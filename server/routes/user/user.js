const express = require("express")
const User = require("../../models/User")
const verifyMiddleware = require("../../verify")
const router = express.Router()

router.get('/', verifyMiddleware, async(req, res) => {
    const users = await User.find()
    if(req.user.isAdmin){
        return res.status(200).json(users)
    }else{
        return res.status(403).json("Only admin can see all user")
    }
})

router.get('/stats', verifyMiddleware, async(req, res) => {
    const today = new Date();
    const latYear = today.setFullYear(today.setFullYear() - 1)
    const data = await User.aggregate([
        {
            $project: {
                month: {$month: "$createdAt"}
            },
        },
        {
            $group: {
                _id: "$month",
                total: {$sum: 1}
            }
        }
    ])
    return res.status(200).json(data)
})

router.get('/:id', verifyMiddleware, async(req, res) => {
    if(req.user.isAdmin || req.user.id == req.params.id){
        const user = await User.findById(req.params.id)
        return res.status(200).json(user)
    }
})

router.put('/:id', verifyMiddleware, async(req, res) => {
    //if(req.user.isAdmin || req.user.id === req.params.id){
        const userUpdate = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        return res.status(200).json(userUpdate)
    //}else{
       // return res.status(403).json("You are not allowed to do that")
    //}
})

router.delete("/:id", verifyMiddleware, async(req, res) => {
    try {
        if(req.user.isAdmin || req.user.id === req.params.id){
            const userDelete = await User.findByIdAndDelete(req.params.id)
            return res.status(200).json("Delete user successfully")
        }else{
            return res.status(403).json("You are not allowed to do that")
        }
    }catch(e){
        console.log(e)
    }
})

module.exports = router