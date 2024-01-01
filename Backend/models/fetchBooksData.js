import axios from 'axios';
import fs from 'fs';
import { filePath } from '../utils/dataFilePath.js';

const fetchData = async ()=>{
    const response = await axios.get('https://6578511ef08799dc8044e5b2.mockapi.io/EBookStore');
    const data = JSON.stringify(response.data);
    fs.writeFileSync(filePath, data, "utf-8");
}

fetchData();