const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../../models/User")
const router = express.Router()
const secretKey = process.env["SECRET_KEY"]

router.post("/register", async(req, res) => {
    try{
      const {email, name, country, phoneNumber, password, confirmPassword} = req.body
      const emailExist = await User.findOne({email: email})
      if(emailExist) return res.status(403).json({msg: "This email has already existed"})
      const salt = await bcrypt.genSalt(10)
      const hash = await bcrypt.hash(password, salt)
      const newUser = await new User({
        email: email,
        name: name,
        country: country,
        phoneNumber: phoneNumber,
        password: hash
      })
      const user = await newUser.save()
      return res.status(200).json({user: user})
      }catch(e){
        console.log(e)
    }
})

router.post("/", async(req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email: email})
  if(email=="" || password=="") return res.status(403).json({msg: "All fields are required"})
  if(!user) return res.status(403).json({msg: "Wrong email or password, please try again"})
  if(user && (await bcrypt.compare(password, user.password))){
    const accessToken = jwt.sign({id: user.id,
                                 isAdmin: user.isAdmin},
                                 secretKey, 
                                 {expiresIn: "7d"})
    
    const { password, ...info } = user._doc
    return res.status(200).json({ ...info, accessToken })
  }else{
    return res.status(403).json({msg: "Wrong email or password, please try again"})
  }
})

module.exports = router