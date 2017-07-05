# react-redux-express

## Lesson - 1 ( serve index.html )
```
npm init
mkdir server
cd server
touch index.js
```
### server/index.js
```js
import express from 'express'

let app = express()

// catch all routes
app.get('/*', ( req, res ) => {
  res.send('Hello World!')
})

app.listen(3000, () => console.log('Running on port 3000'))
```

```
cd .. # exit from server directory
npm install --save-dev babel-cli
npm install --save express
```

*in package.json*
```json
...
"scripts": {
  "server": "babel-node server/index.js",
  ...
}
...
```
*configuring babel*
### *.babelrc*
```json
{
  "presets": [ "es2015" ]
}
```

```
npm install --save-dev babel-preset-es2015
```

```
npm run server
```

### now lets render html
### server/index.js
```js
import express from 'express'
import path from 'path'

let app = express()

// catch all routes
app.get('/*', ( req, res ) => {
  res.sendFile( path.join(__dirname, 'index.html') )
})

app.listen(3000, () => console.log('Running on port 3000'))
```

### server/index.html
```html
<html>

  <head>
    <meta charset="UTF-8">
    <title>Red Dice</title>
    <meta content="width=device-width, initial-scale=1" name="viewport">
  </head>
  
  <body>
  
    <h1>Hello World!</h1>
  
  </body>

</html>
```

```
npm install save-dev nodemon
```

*in package.json*
```json
...
"scripts": {
  "server": "nodemon --watch server --exec babel-node -- server/index.js"
  ...
}
...
```

## Lesson - 2 ( Render React Component )
### client / index.js
```js
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'

render(<>, document.getElementById('app'))
```
### server / index.html
<html>

  <head>
    <meta charset="UTF-8">
    <title>Red Dice</title>
    <meta content="width=device-width, initial-scale=1" name="viewport">
  </head>
  
  <body>
  
    <div id="app"></div>
  
  </body>

</html>
