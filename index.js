const express = require("express")
const path = require("path")
const app = express()
const chefs = require("./database/chef.json")
const cors = require("cors")

const port = process.env.PORT || 3000
const publicPath = path.join(__dirname, "./public")
app.use(cors())
app.use(express.static(publicPath))



app.get("/", (req, res) => {
    res.send(chefs)
})
app.listen(port, () => {
    console.log(`this server running at ${port}`)
})