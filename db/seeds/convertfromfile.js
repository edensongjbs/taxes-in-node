// const csvFilePath='./csv/last-year-2019.csv'
// const csv=require('csvtojson')

const fs = require('fs');
const path = './'
// print(path)

const createDocsFromDir = async (path, callBack, Model) => {
  console.log(`inside createDocsFromDir`, path, callBack, Model)
  const dir = await fs.promises.opendir(path)
  for await (const dirent of dir) {
    console.log('inside loop')
    if (!dirent.isDirectory()) {callBack(path+dirent.name, Model) }
  }
}
;

module.exports = createDocsFromDir

// csv()
// .fromFile(csvFilePath)
// .then((jsonObj)=>{
//     console.log(jsonObj);
// })

