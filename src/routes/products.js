const { Router } = require("express");
const router = Router();
const {getAllProduct, getProductById,createProduct,putProducts,deleteProduct} = require("../Controllers/products");
const Products = require("../db.js");
//const { Products } = require("../db");

router.get("/", async (req, res, next) => {
    
    try {
      const getProducts = await getAllProduct();
      getProducts ? res.json(getProducts) : res.status(400).send('Error!')
    } catch (err) {
      next(err);
    }
  });

router.get("/:id", async (req,res,next) => {
  const {id} = req.params;
  try {
    const productById = await getProductById(id)
    productById ? res.json(productById) : res.status(400).json({msg: 'Error!'})
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req,res,next) => {
  const {name,description,image_url,price} = req.body;
  try{
    const product = await createProduct(name,description,image_url,price)
    product ? res.json(product) : res.status(400).json({msg: 'Error!'})
  } catch (err){
    next(err)
  }
})

router.put("/:id", async (req, res, next) => {
  const changes = req.body;

  const { id } = req.params;

  try {
    const putProduct = await putProducts(id,changes)
    putProduct ? res.json(putProduct) : res.status(400).json({msg: 'Error!'})
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req,res,next) =>{
  const { id } = req.params;
  try {
    const productDelete = await deleteProduct(id)
    productDelete ? res.json(productDelete) : res.status(400).json({msg : 'Error!'})
  } catch (err) {
    next(err)
  }
})


module.exports = router;