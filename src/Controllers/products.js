const { Products } = require("../db");
const { Op } = require("sequelize");

const api = require("../../db.json");

const getAllProduct = async () => {
    
    const allProducts = await Products.findAll({
      order: ["id"],
      
    });
  
    if (!allProducts.length) {
      const allProductsdb = await Products.bulkCreate(api.shows)
      return allProductsdb
    }
    
    return allProducts;
  }

  module.exports = { getAllProduct };