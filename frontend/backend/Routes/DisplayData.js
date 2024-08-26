//DisplayData.js
const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res) => {
    try {
        if (global.food_items && global.food_items.length > 0) {
            res.send([global.food_items]);
        } else {
            console.log("No food items available.");
            res.status(404).send("No food items available.");
        }
    } catch (error) {
        console.error("Server Error:", error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;

// --------------
// const express = require("express");
// const router = express.Router();

// router.post('/foodData',(req,res)=>{
//     try{
//         console.log(global.food_items)
//         res.send([global.food_items])
//     }catch (error){
//         console.error(error.message);
//         res.send("Server Error")
//     }
// })
// module.exports=router;