const express = require("express");
const router = express.Router();

router.post("/posts");
router.get("/posts/:slug");
router.get("/posts");
router.put("/posts/:slug");
router.delete("/posts/:slug");

module.exports = router;

// - **/posts** POST, per creare nuovo post
// - **/posts/:slug** GET, per recuperare post dallo slug
// - **/posts** GET, per ricevere tutti i post (con possibilità di filtraggio per: post pubblicati e per post con determinata parola nel titolo o nel contenuto)
// - **/posts/:slug** PUT, per aggiornare un post
// - **//posts/:slug** DELETE , per eliminare un post
