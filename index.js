const express = require("express")
const app = express()
const port = 5000

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({ extended: true }))

app.get("/home", (req, res) => {
    res.render('home')
})

app.get("/home/Login", (req,res) => {
    res.render('newHome')
})

app.post('/form/signup', (req, res) => {
    console.log(req.body)
    res.redirect('/home/Login')
  })

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
  })