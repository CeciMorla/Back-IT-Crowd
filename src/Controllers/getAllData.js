const  { Products, Brands, Admins }   = require("../db.js");
const api = require("../../db.json");

const getAllData = async () =>{
    try {
        const brands = await Brands.findAll({});
        if(!brands.length){
            const allBrands = await Brands.bulkCreate(api.brands)
        }
        
        console.log(api.admins)
        const allProducts = await Products?.findAll({
            where: {},
            include:[
                {
                    model: Brands
                },
                {
                    model: Admins
                }
            ]
        });
        if (!allProducts?.length) {
            const allProductsdb = await Products?.bulkCreate(api.products)
            console.log('allProductsdb',allProductsdb)
        }

        const allAdmin = await Admins.findAll({
            where: {},
            include:{
                model: Products
            }
        })
        if(!allAdmin.length){
            const allAdmindb = await Admins.bulkCreate(api.admins)
        }
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllData }