import React,{useState, useContext} from 'react'
import {BookContext }from '../context/BookContext';
import { ThemeContext } from '../context/ThemeContext'

 
function Booklist() {
    const {islight, light, dark}=  useContext(ThemeContext);
    const ui = islight? light:dark;
    const  {book}= useContext(BookContext);
  
    return (
        <div style={{background: ui.bg, color: ui.text}}>
            <ul>
                {book.map((item) =>(
                    <li key={item.name}> {`${item.name} is writhen by ${item.name}`}

                    </li>
                )

                )}
            </ul>
            
        </div>
    )
}

export default Booklist
