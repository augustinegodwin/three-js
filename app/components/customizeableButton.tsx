import { useSnapshot } from "valtio"
import state from "../store"
import { getContrastingColor } from "../config/helpers"

type PageProp ={
    type:any,
    title:any,
    customStyles:any,
    handleClick:any
    disabled?:boolean
}

export default function CustomizeableButton({ type, title, customStyles, handleClick,disabled }:PageProp) {
    const snap=useSnapshot(state)
    const generateStyle =(type:any)=>{
        if (type="filled"){
            return {
                backgroundColor:snap.color,
                color:getContrastingColor(snap.color)  
            }
        }
    }
    return (
        <button
            className={`px-2 py-1.5 flex-1 cursor-pointer rounded-md ${customStyles}`}
            style={generateStyle(type)}
            onClick={handleClick}
            
        >
            {title}
        </button>
    )
}
