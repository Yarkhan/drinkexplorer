/* global fetch */
import { AsyncStorage } from 'react-native'
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/'

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
  if (cache && cache.value && (cache.age + 1000 * 60 * 60) > Date.now()) return cache.value
  const json = await fetch(URL + uri)
    .then(async res => {
      if (!res.ok) return null
      const json = await res.json()
      await Cache.set(uri, json)
      return json
    })
    .catch(() => null)

  if (json) return json
  if (cache && cache.value) return cache.value
  return null
}

export const categories = () => _fetch('list.php?c=list')
  .then(({drinks}) => drinks.map(({strCategory}) => strCategory))

export const category = name => _fetch(`list.php?c=${encodeURIComponent(name)}`)
  .then(({drinks}) => drinks.map(drink => ({
    id: drink.idDrink,
    name: drink.strDrink,
    thumbnail: drink.strDrinkThumb
  })))

export const drink = id => _fetch(`lookup.php?i=${id}`)
  .then(({drinks}) => drinks[0])
