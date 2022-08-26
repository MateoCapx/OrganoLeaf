const router = require('express').Router();
const apiRoutes = require('./api');
const path = require('path');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));

});
 
module.exports = router;



// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet"
//         integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
//     <link rel="stylesheet" type="text/css" href="style.css" />
//     <title>Organo Leaf</title>
// </head>

// <body>


//     <div class="container text-center">
//         <div class="row">
//             <div class="col-sm-12">
//                 <h1> Customer Information Form</h1>
//             </div>
//         </div>
//         <br>
//         <div class="row">
//             <div class="col-sm">
//                 <form>
//                     <form class="inputForm"> 
//                         <label for="Name">Name:</label><br>
//                         <input type="text" id="fname" name="Name" required><br><br>

//                         <label for="Phone">Phone:</label><br>
//                         <input type="tel" id="phoneID" name="Phone" required ><br><br>

//                         <label for="Email">Email:</label><br>
//                         <input type="email" id="emailID" name="Email" required ><br><br>

//                         <label for="Birthday">Birthday:</label><br>
//                         <input type="date" id="birthdayID" name="Birthday"><br><br>

//                         <label for="Employee">Select Employee:</label>
//                         <select id="employee" name="Employee">
//                         <option value="Employee_1">Employee 1 </option>
//                         <option value="Employee_2">Employee 2</option>
//                         <option value="Employee_3">Employee 3</option>
//                         <option value="Employee_4">Employee 4</option>
//                         </select>

//                         <br>
//                         <br>
                                                
//                         <button type="submit">Send</button>
//                         <input type="reset">
//                       </form>
  
//                 </form>
//             </div>
//         </div>
//     </div>




// </body>
// <script src="sandbox.js"></script>

// </html>
  
//   `)