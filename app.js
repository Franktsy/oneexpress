const express = require('express');
const mysql = require('mysql2');
const path = require('path');
const os = require('os')
const routes = require('./routes');


const app = express();
const port = process.env.PORT || 3001;

// Determine the device's network environment (local or external)
const environment = process.env.NODE_ENV || 'local';

// Create a MySQL connection pool
console.log('Hello, i am frank tan');

  const dbConfigs = [
   {
     host: "192.168.1.200",
     port: 3300,
     user: "root",
     password: "123456789",
     database: "DemoSites",
   },
   {
     host: "crystalclearrpi.duckdns.org",
     port: 3300,
     user: "root",
     password: "123456789",
     database: "DemoSites",
   },
 ];


function createDBConnection(){
 const pools = [];
 for (const dbConfig of dbConfigs){
   const pool =  mysql.createPool({
     ...dbConfig,
     waitForConnections: true,
     connectionLimit: 10,
     queueLimit: 0,
   });

  pool.query('SELECT 1 + 1 AS solution', function(error, results, fields){
    if (error){ console.log('Error connecting to MySQL: ' + error.message);
  } else { console.log('Connected to MySQL. The solution is: ' + results[0].solution);
   }
  });

 pools.push(pool);
 }

 return pools;
}

const pools = createDBConnection();

app.use(express.static(path.join(__dirname,'public')));
// app.use('/dist', express.static(path.join(__dirname, 'public', 'dist')));
//
// app.get('/dist/vue.js', function (req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'dist', 'vue.js'));
// });
app.use('/',routes);



app.listen(port, () =>{
  console.log('Server is running on port: ', port);
})

process.on('SIGUSR2', () => {
  console.log('Nodemon restarted the application!');
  // Add any additional actions you want to perform on restart
});
