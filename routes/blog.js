const express = require('express'); 
const path = require('path');
const router = express.Router();

router.get('/' , (req,res) =>{
    res.render('home');
})

router.get('/about' , (req , res) =>{
    res.render('about' , {
        name : 'amit dubey',
        enroll : '201B039'
    });
})

// router.get('/blog' , (req , res) =>{
//     res.sendFile(path.join(__dirname , '../views/index.html'));
// })

module.exports = router;