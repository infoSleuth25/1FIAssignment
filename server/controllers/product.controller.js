import Product from '../models/product.model.js';
import { uploadFilesToCloudinary } from '../utils/features.js';

async function addProduct(req, res) {
  try {
    const productName = req.body?.productName;
    const productDescription = req.body?.productDescription;
    const productDetails = req.body?.productDetails;

    if (!productName || !productDescription || !productDetails) {
      return res.status(400).json({
        msg: "Product name, description, and details are required"
      });
    }

    let detailsArray;
    if(typeof (productDetails) === 'string'){
        try {
            detailsArray = JSON.parse(productDetails);
        } 
        catch(err){
            return res.status(400).json({ 
                msg: "Invalid productDetails format" 
            });
        }
    } 
    else if(Array.isArray(productDetails)){
      detailsArray = productDetails;
    } 
    else {
        return res.status(400).json({ 
            msg: "productDetails must be an array" 
        });
    }

    for(let variant of detailsArray) {
        const { color, storage, ram, price, cashback } = variant;
        if (!color || !storage || !ram || !price || !cashback) {
            return res.status(400).json({
                msg: "Each variant must have color, storage, ram, price, and cashback"
            });
        }
    }

    const productImages = req.files || [];
    if (productImages.length < 1) {
        return res.status(400).json({ 
            msg: "At least 1 product image is required" 
        });
    }
    if (productImages.length > 5) {
        return res.status(400).json({ 
            msg: "Maximum 5 images allowed per product" 
        });
    }

    const attachments = await uploadFilesToCloudinary(productImages);

    const product = await Product.create({
        productName,
        productImages: attachments,
        productDescription,
        productDetails: detailsArray
    });

    res.status(201).json({
        msg: "Product added successfully",
        product : product
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
  }
}

export { addProduct };
