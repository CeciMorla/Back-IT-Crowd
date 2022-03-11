const { Router } = require("express");
const router = Router();
const {getAllBrands} = require("../Controllers/brands");
const {Brands} = require("../db.js");


router.get("/", async (req, res, next) => {
    
    try {
      const getBrands = await getAllBrands();
      getBrands ? res.json(getBrands) : res.status(400).send('Error!')
    } catch (err) {
      next(err);
    }
  });

module.exports = router;