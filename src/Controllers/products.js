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

const createProduct = async (name,description,image_url,price,auth) => {
  if(auth){
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
        price: price
      })
    }
  } else{
    return 'unauthorized'
  }
  
}

const putProducts = async (id,changes,auth) => {
  if(auth){
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
  }else{
    return 'unauthorized'
  }
  
  
}

const deleteProduct = async (id,auth) =>{
  if(auth){
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
  }else{
    return 'unauthorized'
  }
  
}
    

  module.exports = { getAllProduct, getProductById,createProduct,putProducts, deleteProduct };