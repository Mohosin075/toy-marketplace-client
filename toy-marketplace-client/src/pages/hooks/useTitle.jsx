/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `ToyGalore | ${title}`;
    }, [title])
}

export default useTitle;