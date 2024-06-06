const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

router.post("/", postController.store);
router.get("/:slug", postController.show);
router.get("/", postController.index);
router.put("/:slug");
router.delete("/:slug");

module.exports = router;

// - **/posts** POST, per creare nuovo post
// - **/posts/:slug** GET, per recuperare post dallo slug
// - **/posts** GET, per ricevere tutti i post (con possibilità di filtraggio per: post pubblicati e per post con determinata parola nel titolo o nel contenuto)
// - **/posts/:slug** PUT, per aggiornare un post
// - **//posts/:slug** DELETE , per eliminare un post
