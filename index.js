const fs = require('fs')

const path = 'document.txt';

try{
    const data = fs.readFileSync(path, 'utf8')
    const datalist = Object.values(data)
    let somme = 0 ;
    datalist.forEach(element => {
        if(Number(element) === Number(element)){
            somme += Number(element)
        }
    });
    console.log("Somme : ", somme)
}catch(error){
    console.error('Error reading the file', error.message)
}