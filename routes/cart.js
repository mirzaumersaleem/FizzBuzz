var express = require('express');
var router = express.Router();

var cartController = require('../controllers/cartController');

router.get('/addtocart', function(req, res){
    cartController.addToCartController(req, res);
})

router.get('/shopping-cart', function(req, res){
    cartController.shoppingCartController(req, res);
});

/*
router.get('/final-checkout', isLoggedIn, function(req, res){
    cartController.finalCheckoutController(req, res);
});
*/

router.post('/final-checkout', isLoggedIn, function(req, res){
    cartController.finalCheckoutController(req, res);
});

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        next();
    }
    else{
        res.json({
            status: 200,
            message: "User must be logged in"
        });
    }
}
module.exports = router;
