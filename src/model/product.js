import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  catagory: String,
});

// next js use hot reload ,,, app can load multiple times
// error can occure
// overwriteModelError ; => can't over write  product model  once complied
// fixed
// define empty model product or check if model existes

// first method
// export const product =  mongoose.model.product ? mongoose.model("product", schema) : {};

// second method
mongoose.models = {};
export const product = mongoose.model("product", schema);
