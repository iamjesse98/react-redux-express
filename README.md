# react-redux-express

## Lesson - 1
```
npm init
mkdir server
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
