const { CustomerForm } = require('../models');

const customerData = [
  {
    name: 'Tom',
   
  },
  {
    phone: '407-455-5544',
   
  },
  {
     email: 'testemail@test.com',
    
  },
  {
    birthday: '12/03/1994',
    
  },
  {
    employee_Name: 'Mateo',

  },
];

const seedProducts = () => CustomerForm.bulkCreate(customerData);

module.exports = customerData;