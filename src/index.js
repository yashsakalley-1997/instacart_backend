const express = require("express");
const cors =  require('cors');
const app = express();
const port = 5000;
const connect = require("./config/db");

// importing all controllers.
const categoryController = require("./controllers/category.controller");
const subcategoryController = require("./controllers/subCategory.controller");
const productController = require("./controllers/product.controller");
const storesController = require("./controllers/stores.controller");
const optionController = require("./controllers/cat.controller");
const {register,login} = require("./controllers/authentication.controller");
const usersController = require("./controllers/user.controller");

app.use(express.json());
app.use(cors());

app.use("/category",categoryController);
app.use("/subCategory",subcategoryController);

app.use("/product",productController);

app.use("/stores", storesController);
app.use("/options", optionController);

// Login signup.
app.use("/register" , register) ;
app.use("/login" , login) ;
app.use("/users", usersController);

// Turning on the server and connection with db.
app.listen(process.env.PORT || port ,async () =>{
    try{
        await connect();
        console.log(`listening on port ${port}`)
    }
    catch(err){
        console.log(err.message)
    }
})