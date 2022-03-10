const  { Products }   = require("../db.js");
const api = require("../../db.json");

const getAllData = async () =>{
    try {
        console.log(api)
        console.log(Products)
        const allProducts = await Products?.findAll({});
        if (!allProducts?.length) {
            const allProductsdb = await Products?.bulkCreate(api)
            console.log('allProductsdb',allProductsdb)
        }
       
    } catch (error) {
        console.log(error)
    }
}

module.exports = { getAllData }