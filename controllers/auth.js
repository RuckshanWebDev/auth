const test = (req, res, next)=>{
    res.status(200).send("Hello Home")
}

module.exports = { test }