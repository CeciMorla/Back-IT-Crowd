const { Router } = require("express");
const router = Router();
const {getAllProduct} = require("../Controllers/products");
//const { Products } = require("../db");

router.get("/products", async (req, res, next) => {
    
    try {
      const getProducts = await getAllProduct();
      getProducts ? res.json(getProducts) : res.status(400).send('Error!')
    } catch (err) {
      next(err);
    }
  });


module.exports = router;