import fs from 'fs';
import { filePath } from '../utils/dataFilePath.js'

const readBooksFile = ()=>{
    try{
        const data=fs.readFileSync(filePath,'utf8');
        return JSON.parse(data);

    }catch(e){
        throw new Error("Error reading from books file")
    }
}

const writeBooksToFile = (books)=>{
    try{

        fs.writeFileSync(filePath,JSON.stringify(books),'utf8')
    }catch(e){
        throw new Error("Error writing to the books file")
    }

}

export {readBooksFile,writeBooksToFile}