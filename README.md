# drinkexplorer

This project is meant to test my skills with React Native. It gathers data from [theCockTailDB](https://www.thecocktaildb.com/api.php).


## Compatibility
Tested on Android only (I don't own a mac). It should, however, run without any issues and with native look thanks to [native-base](https://nativebase.io)

## Running
clone this repository then run `yarn` and `react-native run-android`

## Code Style

This project follows [StandardJS](https://github.com/standard/standard) guidelines.

## Tests
No tests. A shame, I know. They will come in time.

## Overview
This was a fun weekend project. There was a number of interesting issues to solve
that gave me some ideias that I could use in future projects.

Here are some of the highlights in this journey so far:

##### 1. Offline Navigation
TheCockTailDB is awfully slow! It was quite a pain to explore the api
with requests taking +50 seconds to finish.

I've wrote a simple `Cache` object that writes the results of API calls into `AsyncStorage` and a wrapper around `fetch` to load data from it before trying to call the api. That worked wonderfully, and as a plus, we get the data even if the device doesn't have an active internet connection, or the api is offline.

##### 2. Cached Spinner Thumbnail
I also wrote a wrapper component that caches images loaded from the api and displays a rotating spinner while it tries to load it from the storage or from the internet.

##### 3. Async Data Loader
I haven't abstracted this to a general component yet. Basically, all the containers in this project loads data from a remote source or the storage and displays a spinner while it is working on it, or a error message with a button to try again.

The structure in all of them is the same, and will be probably my next step in this project when I have the time (along with snapshot tests)
