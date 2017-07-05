import express from 'express'

let app = express()

// catch all routes
app.get('/*', ( req, res ) => {
  res.send('Hello World!')
})

app.listen(3030, () => console.log('Running on port 3030'))
