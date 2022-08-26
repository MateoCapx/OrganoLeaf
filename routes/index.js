const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes =require('./homeRoutes')
const path = require('path');

router.use('/api', apiRoutes);
router.use("/",homeRoutes)


module.exports = router;


