const  { Products, Brands }   = require("../db.js");
const api = require("../../db.json");

const getAllData = async () =>{
    try {
        const brands = await Brands.findAll({});
        if(!brands.length){
            const allBrands = await Brands.bulkCreate(api.brands)
        }
        
        
        const allProducts = await Products?.findAll({
            where: {},
            include:[
                {
                    model: Brands
                }
                
            ]
        });
        if (!allProducts?.length) {
            const allProductsdb = await Products?.bulkCreate(api.products)
            
        }

        
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllData }