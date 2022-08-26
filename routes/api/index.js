const router = require('express').Router();
const req = require('express/lib/request');
const path = require('path');
const CustomerForm = require('../../models');
 
 

router.post('/',(req, res) => {
     CustomerForm.create({
      name: req.body.name,
      phone: req.body.phone,
      email: req.body.email,
      birthday: req.body.birthday,
      employee:req.body.employee
    })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;