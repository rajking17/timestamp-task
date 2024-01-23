const date = new Date();

let day = date.getDate();
let month = date.getMonth();
const monthNames = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
let year = date.getFullYear();

let currentDate = `${day}-${monthNames[month]}-${year}`;
console.log(currentDate);

const PORT = 3000;


const http = require('http');
const fs = require('fs')


let server = http.createServer((req,res)=>{
    try {
        res.writeHead(200, {'Content-Type':'text/html'})
        fs.writeFileSync('date-time.txt', currentDate, 'utf-8')
    } catch (error) {
        console.log(error)
    }
})


server.listen(PORT)