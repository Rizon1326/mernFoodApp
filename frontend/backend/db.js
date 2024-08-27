//db.js
const mongoose = require('mongoose');

const mongoURL = "mongodb+srv://bsse1326:rizoniit@cluster0.uipuyr8.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to MongoDB");

        const fetched_data = await mongoose.connection.db.collection("food_items").find({}).toArray();
        const fetched_data1 = await mongoose.connection.db.collection("food_Category").find({}).toArray();
        
        if (fetched_data.length > 0 && fetched_data1.length>0) {
            global.food_items = fetched_data;
            global.food_Category = fetched_data1;
            console.log("Food items  and food category fetched and stored globally.");
           
        } else {
            console.log("No food items found in the database.");
            global.food_items = [];
            global.food_Category = [];
        }

    } catch (err) {
        console.log("--- Error connecting to MongoDB:", err);
    }
}

module.exports = mongoDB;



















// const mongoose = require('mongoose');

// const mongoURL = "mongodb+srv://bsse1326:rizoniit@cluster0.uipuyr8.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";
      
// const mongoDB = async () => {
//     try {
//         await mongoose.connect(mongoURL);
//         console.log("Connected to MongoDB");

//         const fetched_data = await mongoose.connection.db.collection("food_items");
//         fetched_data.find({}).toArray(function(err, data) {
//             if (err) {
//                 console.log("Error fetching data:", err);
//             } else {
//                 global.food_items = data;
//                 // console.log(global.food_items);
//             }
//         });
//     } catch (err) {
//         console.log("--- Error connecting to MongoDB:", err);
//     }
// }

// module.exports = mongoDB;



// //--------------------------------------------------------------------------------------------------------------------------

// // const mongoose = require('mongoose');
// // const mongoURL = "mongodb+srv://bsse1326:rizoniit@cluster0.uipuyr8.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

// // const mongoDB = async () => {
// //     await mongoose.connect(mongoURL, { useNewUrlParser: true},async(err,result)=>{
// //         if(err)console.log("---",err)
// //         else{
// //             console.log("Connected to MongoDB");
// //             const fetched_data = await mongoose.connection.db.collection("food_items");
// //             fetched_data.find({}).toArray(function(err,data){
// //                 if(err)console.log(err);
// //                 else{
// //                     global.food_items = data;
// //                     console.log(global.food_items)
// //                 }
// //             });
// //     }
// //     });
   
// // }

// // module.exports = mongoDB;
