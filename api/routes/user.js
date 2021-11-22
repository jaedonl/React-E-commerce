const router = require("express").Router()

router.get("/usertest", (req, res) => {
    res.send("user test is ok")
})

router.post("/userposttest", (req, res) => {
    const username = req.body.username
    console.log(username)
    res.send(req.body.username)
})

module.exports = router