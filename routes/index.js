const {Router} = require("express");
const controllers = require(`../controllers`)
const router = Router();

router.get("/", (req, res) => res.send ("This is finally working!"));
router.get("/origin", controllers.getOrigins)
router.get("/seller", controllers.getSellers)
router.get("/shipping", controllers.getShippings)
router.get("/pop", controllers.getPops)
router.delete("/pop/:id", controllers.deleteById)
router.post("/origin", controllers.createOrigins)
router.post("/shipping", controllers.createShippings)
router.post("/seller", controllers.createSellers)
router.post("/pop", controllers.createPops)
router.put("/pop/:id", controllers.updatePops)


module.exports = router;
