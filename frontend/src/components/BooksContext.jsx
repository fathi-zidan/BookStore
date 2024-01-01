import React from 'react'
import { useEffect,useState,createContext } from 'react'
import axios from 'axios';

export const BooksContext = createContext();

function BooksContextProvider({children}) {
    const [books,setBooks] = useState([]);
    useEffect(()=>{
            const fetchData = async()=>{
                try{

                    const response = await axios.get('http://localhost:3000/books/All');
                    setBooks(response.data);
                    console.log(response.data)
                }catch(e){
                    console.error(`Error! ${e}`);
                }
            }
       
        fetchData();
    },[])

    return(
        <BooksContext.Provider value ={{books}}>
            {children}
        </BooksContext.Provider>
    )

  
}

export default BooksContextProvider
