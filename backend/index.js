const express = require('express')
const app = express()

app.get('/', () => {
console.log(
        "Working"
    )
})

app.listen(3000, () => {
    console.log("App is listening on port 3000")
})