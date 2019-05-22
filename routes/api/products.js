const express = require("express");
const router = express.Router();
const Product = require("../../models/Product");

router.get("/", (req, res) => {
    Product.find({})
    .then(function(products) {
      res.json(products);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
    
});

router.get("/:id", (req, res) => {
  Product.findOne({_id: req.params.id })
    .then(function(products) {
      res.json(products);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
