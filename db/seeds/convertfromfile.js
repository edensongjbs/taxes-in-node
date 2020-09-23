const csvFilePath='./csv/last-year-2019.csv'
const csv=require('csvtojson')

const fs = require('fs');
const path = './'
// print(path)

async function print(path) {
  const dir = await fs.promises.opendir(path)
  for await (const dirent of dir) {
    if (!dirent.isDirectory()) {console.log(dirent) }
  }
}
print(path).catch(console.error);


// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     console.log(jsonObj);
// })

