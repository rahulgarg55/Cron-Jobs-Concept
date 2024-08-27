const express = require("express");
const app = express();  

const cron = require('node-cron');
const fs = require('fs');

cron.schedule('*/10 * * * * *', () => {
    let data = `Hii Cron job running\n`;
fs.appendFile('logs.txt', data, function(err){
    if(err)throw err; 
    console.log('File Data added');
});

});   




app.listen(3002, () => {
    console.log("Server is running on port 3002");
}); 