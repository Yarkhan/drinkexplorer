/* global fetch */

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/'

const config = {
  cache: 'force-cache'
}
const _fetch = async uri => {
  const json = await fetch(URL + uri, config).then(res => res.ok && res.json())
  return json
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
