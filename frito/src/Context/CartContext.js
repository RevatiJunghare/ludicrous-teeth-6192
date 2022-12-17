import { createContext, useEffect, useState } from "react";
export const CartContext =createContext();
export const CartContextProvider = ({children}) =>{
    const [arr, setArr] = useState([])

function changeArr(obj){
setArr([...arr,obj])
}

function removeItem(id){
    setArr(arr.filter((el)=>el.id != id))
}


return <CartContext.Provider value={{changeArr,arr,removeItem}} >
    {children}
</CartContext.Provider>
}
