const { Brands } = require("../db");
const { Op } = require("sequelize");

const api = require("../../db.json");

const getAllBrands = async () => {
    
    const allBrands = await Brands.findAll({
      order: ["id"],
      
    });
  
    if (!allBrands.length) {
      const allBrandsdb = await Products.bulkCreate(api.brands)
      return allBrandsdb
    }
    
    return allBrands;
}

module.exports = {getAllBrands}