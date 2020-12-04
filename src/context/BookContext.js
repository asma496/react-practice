

import React, { Component , createContext} from 'react'
export const BookContext = createContext();

export default class BookContextProvider extends Component {
    state= {
       
        book: [{ name:'HtmlCss', author:"john Ducket"},
         { name:'js', author:'mark'},
        {name:'React', author:'Dave caddia'},]
     
    }
    render() {
        return (
            
                 <BookContext.Provider value={{...this.state}}>
                {this.props.children}
                </BookContext.Provider>
          
        )
    }
}
