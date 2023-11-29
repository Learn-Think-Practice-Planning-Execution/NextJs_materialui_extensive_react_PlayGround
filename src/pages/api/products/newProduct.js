import { connectDb } from "../../../utls/database";
import { product } from "../../../model/product";
export default async function newProductHandler(req, res) {
  await connectDb();

  if (req.method !== "POST") {
    res
      .status(404)
      .json({
        success: false,
        message: `no api handler with ${req.method} Method`,
      });
  } else {
    const { price, catagory, name } = req.body;

    //   const name = "apple, mac",
    //     price = 200000,
    //     catagory = "laptops";
    //   res.status(200).json({ success: true, productList: [], data });
    // create model
    await product.create({
      name,
      price,
      catagory,
    });
    // send respponse
    res.status(201).json({ success: true, message: "created successfully" });
  }
}
