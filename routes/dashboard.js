let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.render('dashboard', {
        title: 'Knowledgebase - Dashboard',
        user: req.user
    }); 
});

// function isLoggedIn(req, res, next) {
//     if (req.isAuthenticated()) return next();
//     res.redirect('/auth/google');
//   }

module.exports = router;