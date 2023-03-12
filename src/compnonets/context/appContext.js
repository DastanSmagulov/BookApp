import { createContext, useContext } from "react";
import { useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext)

    if(context === undefined){
        throw new Error("app context must be within app context provider")
    } 

    return context
}

const AppContextProvider = ({children}) =>{
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (book) => {
        console.log(book)
        const oldFavourites = [...favourites];

        const newFavourites = oldFavourites.concat(book)

        setFavourites(newFavourites)
    }

    const removeFromFavourites = (id) => {
        const oldFavourites = [...favourites];
        const newFavourites = oldFavourites.filter((book)=> book.id !== id)
        setFavourites(newFavourites)
    }

    return (
        <AppContext.Provider value = {{favourites, addToFavourites, removeFromFavourites}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;