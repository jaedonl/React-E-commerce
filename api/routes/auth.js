const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require('jsonwebtoken');

//register
router.post('/register', async (req, res) => {
    
    try {
        const newUser =  await new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
        }) 
    
        const user = await newUser.save()
        res.status(200).json(user)

    } catch (err) {
        res.status(500).json(err)
    }
})


//login
router.post('/login', async (req, res) => {
    try {   
        const user = await User.findOne({ username: req.body.username })
        if (!user) {
            res.status(401).json('Wrong credentials. (Username)')
        }
        
        const hashedPassword = await CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SEC
        )

        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        if (originalPassword !== req.body.password) {
            res.status(401).json("Wrong credentials. (Password)")
        } 

        const token = jwt.sign(
            { 
                id: user._id,
                isAdmin: user.isAdmin
            }, 
            process.env.JWT_SEC,
            {expiresIn: "3d"}
        );


        const { password, ...others } = user._doc

        res.status(200).json({...others, token})

    } catch (err) {
        console.log(err)
    }

})

module.exports = router