const express = require("express")
const bcrypt = require("bcrypt")
const User = require("../../models/User")
const verifyMiddleware = require("../../verify")
const router = express.Router()

router.put("/", verifyMiddleware, async(req, res) => {
    const { oldPassword, newPassword, confirmNewPassword } = req.body
    const user = await User.findById(req.user.id)
    if(oldPassword==="" || newPassword==="" || confirmNewPassword==="")
        return res.status(403).json({msg: "All fields are required"})
    if(newPassword.length < 6) return res.status(403).json({msg: "Your password is required at least 6 characters"})
    if(newPassword !== confirmNewPassword) return res.status(403).json({msg: "New passwords are not match"})
    if(await bcrypt.compare(oldPassword, user.password)){
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(newPassword, salt)
        user.password = hash
        await user.save()
        return res.status(200).json({msg: "Your password is updated"})
    }else{
        return res.status(403).json({msg: "Current password is not correct, please try again"})
    }
})

module.exports = router