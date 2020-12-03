import React,{useState, useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

 
function Booklist() {
    const {islight, light, dark}=  useContext(ThemeContext);
    const ui = islight? light:dark;
    const [book, setBook] = useState(
        [{ name:'HtmlCss', author:"john Ducket"},
       { name:'js', author:'mark'},
        {name:'React', author:'Dave caddia',
    }]
    )
    return (
        <div style={{background: ui.bg, color: ui.text}}>
            <ul>
                {book.map((item) =>(
                    <li key={item.name}> {`${item.name} is writhen by ${item.author}`}

                    </li>
                )

                )}
            </ul>
            
        </div>
    )
}

export default Booklist
