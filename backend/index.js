const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// routes
app.use('/home', (req,res)=>{
    res.send('Home Server')
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
      