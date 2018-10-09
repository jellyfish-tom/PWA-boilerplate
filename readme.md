# Progressive Web App (PWA) set with Typescript, Node, Firebase and React - to name a few


Created by your best friend you never have heard of - Tom Morawski

Findable here: https://www.linkedin.com/in/tomasz-morawski-15118760/

### Pieces:
- Babel - https://babeljs.io/
- Typescript - https://www.typescriptlang.org/
- Webpack - https://webpack.js.org/ (with hot reload, so when you edit file, browser reloads automatically)
- Node - https://nodejs.org/en/
- Express - https://expressjs.com/
- Firebase - https://firebase.google.com/
- React - https://reactjs.org/
- ReactRouter - https://github.com/ReactTraining/react-router
- Mobx (state manager) - https://github.com/mobxjs/mobx
- AntDesign (predefined UI components) - https://ant.design/
- TypeStyle (for typesafe CSS) - https://github.com/typestyle/typestyle
- Jest (test library) - https://jestjs.io/
- Storybook (interactive, isolated UI development enviroment) - https://github.com/storybooks/storybook
- tslint (linter for typescript) - https://palantir.github.io/tslint/
- yarn (dependency management) - https://yarnpkg.com/en/

### Installation:

1. 

To configure it, just search for `PROJECT_CONFIG` to get list of all files you need to configure to actually get the project running (run bellow command in console from project root dir level). 

- `grep -lr "PROJECT_CONFIG" * --exclude=\readme.md`

Output of above command will most probably be:

- src/app/index.html
- src/app/public/manifest.json
- src/app/public/service-worker.js

open files listed and provide all the values needed, by searching for "$PROJECT_CONFIG" (in file) and replacing it with necessary info.

Values you need to provide are pretty straightforward and I've inserted some explanation here and there but you do need a bit of knowledge about each of tools you are going to use, to get started. 
In case of lack of knowledge just head to webpage of each tool you find hard to configure and read docs about configuration. 
As they may change in time, providing explanations here seems out of point.
In case I missed something, or you have found any issues, please post them in github `issue` section.

2.

Run `yarn` if you have yarn installed globally. If not, run `npm install yarn -g` (if you have npm instaled globally) and than run `yarn` from project root. If non of above is true, just head here and follow instructions: https://yarnpkg.com/lang/en/docs/install/#mac-stable

3. 

Run `npm install` in console from `./functions` directory to install all dependencies for firebase functions.

After all that you will be able to run below commands from base project dir:

- `yarn start` - to start the project (under localhost:3000) with storybook (under localhost:9001) concurrently
- `yarn build` - to just build the project for production, without actually runnning it locally
- `yarn deploy` - to deploy to firebase (you can than check it actually online, being served through HTTPS)
- `yarn precommit or prepush` - I've provided those so you can add your githooks
- `yarn test` - to run JEST

To check other scripts you may use (or are used by above scripts), just check `package.json` scripts section.

Thanks and have fun coding! :) 

### Project has (quite) easily been started thanks to:

- ***Initial Project Setup*** 

    https://hackernoon.com/react-with-typescript-and-webpack-654f93f34db6
- ***PWA Initial Configuration*** 
    
    https://engineering.musefind.com/build-your-first-progressive-web-app-with-react-8e1449c575cd
    https://chrome.google.com/webstore/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk
- ***Cache all the things (for dummies)*** 
    
    https://github.com/NekR/offline-plugin
- ***Hack iOS add homescreen icon and splashscreen*** 
    
    https://medium.com/@applification/progressive-web-app-splash-screens-80340b45d210
    https://netguru.co/codestories/few-tips-that-will-make-your-pwa-on-ios-feel-like-native

