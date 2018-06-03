/* global fetch */
import { AsyncStorage } from 'react-native'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/'
const MAX_CACHE_AGE = 60 * (1000 * 60)

const parseJSON = async str => {
  const parse = async str => JSON.parse(str)
  return parse(str).catch(() => null)
}

const Cache = {
  get: async key => AsyncStorage.getItem('drinkApiCache:' + key).then(parseJSON),
  set: (key, value) => {
    return AsyncStorage.setItem('drinkApiCache:' + key, JSON.stringify({
      value,
      age: Date.now()
    }))
  }
}

const _fetch = async uri => {
  const cache = await Cache.get(uri)
  if (cache && cache.value && (cache.age + MAX_CACHE_AGE) > Date.now()) return cache.value
  const json = await fetch(URL + uri)
    .then(async res => {
      if (!res.ok) return null
      const json = await res.json()
      await Cache.set(uri, json)
      return json
    })
    .catch(() => null)

  if (json) return json
  // if (cache && cache.value) return cache.value
  throw new Error('request error')
}

export const categories = () => _fetch('list.php?c=list')
  .then(({drinks}) => drinks.map(({strCategory}) => strCategory))
  .catch(() => null)

export const category = name => _fetch(`filter.php?c=${encodeURIComponent(name)}`)
  .then(({drinks}) => drinks.map(drink => ({
    id: drink.idDrink,
    name: drink.strDrink,
    thumbnail: drink.strDrinkThumb
  })))
  .catch(() => null)

const mapIngredients = drink => {
  let ingredients = []
  for (let i = 1; i <= 15; i++) {
    const name = drink['strIngredient' + i]
    const measure = drink['strMeasure' + i]
    if (!name) break
    const thumbnail = (
      `https://www.thecocktaildb.com/images/ingredients/${encodeURIComponent(name)}-Small.png`
    )
    ingredients.push({name, measure, thumbnail})
  }
  return ingredients
}

export const drink = id => _fetch(`lookup.php?i=${id}`)
  .then(({drinks}) => {
    const drink = drinks[0]
    return ({
      id: drink.idDrink,
      name: drink.strDrink,
      video: drink.strVideo,
      category: drink.strCategory,
      IBA: drink.strIBA,
      alcoholic: drink.strAlcoholic,
      glass: drink.strGlass,
      instructions: drink.strInstructions,
      thumbnail: drink.strDrinkThumb,
      ingredients: mapIngredients(drink),
    })
  })
  .catch(() => null)
