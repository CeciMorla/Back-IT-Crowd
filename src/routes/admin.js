const { Router } = require("express");
const router = Router();
const {getAllAdmin} = require("../Controllers/admin");


router.get("/", async (req, res, next) => {
    
    try {
      const getAdmins = await getAllAdmin();
      getAdmins ? res.json(getAdmins) : res.status(400).send('Error!')
    } catch (err) {
      next(err);
    }
  });



module.exports = router;