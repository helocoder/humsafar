const express = require('express');
const router = express.Router();
require('../db/conn')

router.get('/about',(req,res)=>{
    res.send("Hello world from auth server");
})



router.post('/userinfo', async(req, res) => {
    //     const from = req.body.from
    //     const to = req.body.to
    // const date = req.body.date

    const { from, to, date} = req.body;
    if(!from || !to || !date)
    {
        return res.status(422).json({error:"Please Fill the field properly"})
    }

    
        const formData = new User({
          boarding:from,
          dest:to,
          day:date
        })
    
        try {
            await formData.save();
            res.send("inserted data..")
        } catch(err) {
            console.log(err)
        }
  });

module.exports = router;