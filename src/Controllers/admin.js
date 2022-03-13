const { Admins } = require("../db");
const { Op } = require("sequelize");

const api = require("../../db.json");

const getAllAdmin = async () => {
    
    const allAdmin = await Admins.findAll({
      order: ["id"],
      
    });
  
    if (!allAdmin.length) {
      const allAdmindb = await Admins.bulkCreate(api.admin)
      return allAdmindb
    }
    
    return allAdmin;
}

module.exports = {getAllAdmin}