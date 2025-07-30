console.log("welcome to node js ");

const fs = require('fs');

fs.writeFile("Save.txt" , "my firsttome " , (err) => {
 if (err) console.log('not same ');
 else console.log('ha ha');

})