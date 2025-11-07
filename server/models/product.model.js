import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    productName :{
        type : String,
        required : true
    },
    productImages :[{
        public_id : {
            type : String,
            required : true
        },
        url : {
            type : String,
            required : true
        }
    }],
    productDescription :{
        type : String,
        required : true
    },
    productDetails: [{
        color: { 
            type: String, 
            required: true 
        },
        storage: { 
            type: Number, 
            required: true 
        },
        ram : {
            type : Number,
            required : true
        },
        price: { 
            type: Number, 
            required: true 
        },
        cashback : {
            type : Number,
            required : true
        }
    }]
},{
    timestamps : true
})

const Product = mongoose.model('Product',productSchema);
export default Product;