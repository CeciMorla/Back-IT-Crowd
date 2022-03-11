const { Router } = require("express");

const products = require("./products");
const brands = require("./brands");




const router = Router();

// Configurar los routers

router.use("/products", products);
router.use("/brands", brands);



module.exports = router;