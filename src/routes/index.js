const { Router } = require("express");

const products = require("./products");
const brands = require("./brands");
const admins = require("./admin");




const router = Router();

// Configurar los routers

router.use("/products", products);
router.use("/brands", brands);
router.use("/admins", admins);



module.exports = router;