# Software One Challenge: React Native

![](https://raw.githubusercontent.com/miguelzabalaf/SoftwareOneReactNative/main/public/assets/software-one-challenge-poster.png)

I hope and exceed your expectations. This react native(0.71.7) project based on clean architecture **DDD** (Domain Driven Design). I split this application in different layers with specific responsabilities: _Domain_, _Use cases_, _Controllers_, _Services_, etc.

[You can download and install an APK in you ANDROID device here.](https://github.com/miguelzabalaf/SoftwareOneReactNative/raw/main/public/apk/so-test-rn.apk)

## Run this project

1. Install all dependencies:

```sh
yarn install
```

2. Install pods:

```sh
yarn pod:install
```

3. Run metro in other terminal tap (Optional):

```sh
yarn start
```

1. Run in iOS simulator:

```sh
yarn ios
```

5. Run in Android simulator:

```sh
yarn android
```

If you have any problem, these're my actual global versions:

- node: v18.15.0
- yarn: 1.22.19
- metro: v0.73.9

Other commands:

1. Gradlew clean:

```sh
yarn android:clean
```

2. Generate APK:

```sh
yarn android:build:apk
```

3. Run tests:

```sh
yarn test
```

## Folders

| Name         | Description                                                                                                                                                                                    |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ui`         | Contain all archives related with the UI components his logic, like interfaces, controllers, styles etc.                                                                                       |
| `domain`     | This archive contains all entities, bussines rules, services, etc, it's the heart of my application.                                                                                           |
| `navigation` | This folder contains all about the navigation in the app, constants, interfaces, architectures, definitions and more.                                                                          |
| `constants`  | In this folder you can see all constants used by user interfaces, like strings and endpoints.                                                                                                  |
| `config`     | In this folder you can set any configuration (global) for this app, in my case, i set the interceptor configuration to intercept all petitions and set configurations like timeout and headers |
| `redux`      | You can see all about: constants, types, interfaces, store, reducers and more related with redux configuration                                                                                 |

## Libraries

| Name                                        | Documentation                                                        | Description                                                                                                                                                                                                                             |
| ------------------------------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `react-native-ui-lib`                       | https://github.com/wix/react-native-ui-lib                           | This is may favorite UI library to build beautiful user interfaces and preset a global styles of my application.                                                                                                                        |
| `react-native-navigation`                   | https://wix.github.io/react-native-navigation/docs/before-you-start/ | It's a [Recomended library](https://reactnative.directory/?search=react-native-navigation) by react native to manage native navigations, see preferences of navigation by react native [here](https://reactnative.dev/docs/navigation). |
| `react-redux`                               | https://react-redux.js.org/introduction/getting-started              | It's my preferred library to manage all global data of my application, based on [Redux](https://redux.js.org/).                                                                                                                         |
| `redux-persist`                             | https://github.com/rt2zz/redux-persist                               | All redux developer needs know about this library, this library help us to persist all o specific data in our local storage (Mobile and Web).                                                                                           |
| `@react-native-async-storage/async-storage` | https://react-native-async-storage.github.io/async-storage/          | It's a library to manage Data storage of my device (iOS/Android). The principal skill is your persistent storage, and i use that hability for my **persistConfig**.                                                                     |
| `redux-immutable-state-invariant`           | https://github.com/leoasis/redux-immutable-state-invariant           | It's a development tool (middleware of my store) , thats spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.                                                                        |
| `@react-native-community/netinfo`           | https://github.com/react-native-netinfo/react-native-netinfo         | With this library i was subscribed to my conection information and show a banner if i didn't have conection.                                                                                                                            |
| `axios`                                     | https://axios-http.com/docs/intro                                    | It's my preferred library to make HTTP request.                                                                                                                                                                                         |
| `lodash`                                    | https://lodash.com/                                                  | It's a utility library of Javascript with a good performance.                                                                                                                                                                           |
| `react-native-size-matters`                 | https://github.com/nirsky/react-native-size-matters                  | It's a simple tooling to make your scaling a whole lot easier (All styles in this app was created with this library)                                                                                                                    |
| `react-native-svg`                          | https://www.npmjs.com/package/react-native-svg                       | Used by adapt SVG images to create a custom components (Of icons)                                                                                                                                                                       |
