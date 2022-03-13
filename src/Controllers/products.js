const { Products } = require("../db");
const { Op } = require("sequelize");

const api = require("../../db.json");

const getAllProduct = async () => {
    
    const allProducts = await Products.findAll({
      order: ["id"],
      
    });
  
    if (!allProducts.length) {
      const allProductsdb = await Products.bulkCreate(api.producst)
      return allProductsdb
    }
    
    return allProducts;
}

const getProductById = async (id) => {
  const productById = await Products.findOne({
    where:{
      id : id
    }
  })
  return productById;
}

const createProduct = async (name,description,image_url,price) => {
    
    const product = await Products.findOne({
      where:{
        name : name
      }
    })
    if(product){
      return 'Existing product'
    }else{
      return await Products.create({
        name: name,
        description: description,
        image_url: image_url,
        price: price,
        brandId: 15
      })
    }
  
  
}

const putProducts = async (id,changes) => {
    console.log(changes)
    try {
      await Products.update(changes, {
        where: {
          id: id,
        },
      });
      return changes
    } catch (error) {
      console.log(error)
    }
  
  
  
}

const deleteProduct = async (id) =>{
  
    try {
      await Products.destroy({
        where:{
          id : id
        }
      })
      return "Product deleted succesfully"
    } catch (error) {
      console.log(error)
    }
  
  
}
    

  module.exports = { getAllProduct, getProductById,createProduct,putProducts, deleteProduct };