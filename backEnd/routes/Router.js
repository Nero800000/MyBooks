
const express = require('express')

const router = express()


router.use("/books", require("./UserRoutes"))


module.exports = router





