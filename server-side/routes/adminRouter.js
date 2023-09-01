const router = require("express").Router();
const AdminController = require("../controllers/adminController");
const authentication = require("../middlewares/authentication");
const errorHandler = require("../middlewares/errorHandler");

router.post("/login", AdminController.login);
router.use(authentication);
router.get("/products", AdminController.readAllProducts);
router.post("/products", AdminController.createProduct);
router.get("/products/:productId", AdminController.readProductById);
router.put("/products/:productId", AdminController.updateProduct);
router.delete("/products/:productId", AdminController.deleteProduct);
router.get("/categories", AdminController.readAllCategories);
router.post("/categories", AdminController.createCategory);
router.get("/categories/:categoryId", AdminController.readCategoryById);
router.put("/categories/:categoryId", AdminController.updateCategory);
router.delete("/categories/:categoryId", AdminController.deleteCategory);
router.post("/add-admin", AdminController.addAdmin);
router.use(errorHandler);

module.exports = router;