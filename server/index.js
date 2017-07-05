import express from 'express'
import path from 'path'

let app = express()

// catch all routes
app.get('/*', ( req, res ) => {
  res.sendFile( path.join(__dirname, 'index.html') )
})

app.listen(3030, () => console.log('Running on port 3030'))
