import {Cart} from './model.js'
import cloudinary from 'cloudinary'


cloudinary.config({
    cloud_name: 'dqssfu7rl',
    api_key: '555615328341924',
    api_secret: 'S7a4bjYvGPrWb1yK-Ps9Sa5U93I'
  });

const addToCart= async( req,res)=>{
    const { id, title, price, description, image } = req.body;
    try{

      const existingItem = await Cart.findOne({ productId: id });
      if (existingItem) {
        return res.status(400).json({ message: 'Item is already in the cart' });
      }
        const uploadResponse = await cloudinary.uploader.upload(image, {
            upload_preset: 'YOUR_UPLOAD_PRESET',

          });
          const imageUrl = uploadResponse.secure_url;
          const newItem = new Cart({ productId: id, title, price, description, image: imageUrl });
          await newItem.save();
          console.log(newItem);
      
          res.status(200).json(newItem);
      

    }catch(err){
        console.log(err)
    }

};

const getCart =async (req, res) => {
    try {
      const items = await Cart.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };


const deleteFromCart = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedItem = await Cart.findOneAndDelete({ productId: id });

    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found in the cart' });
    }

    console.log(`Deleted item: ${deletedItem}`);
    res.status(200).json({ message: 'Item deleted successfully', item: deletedItem });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'An error occurred while deleting the item from the cart' });
  }
};


export {addToCart,getCart, deleteFromCart};