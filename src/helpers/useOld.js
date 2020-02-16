// um hook para usar estado anterior da props ou state
import { useEffect, useRef } from 'react';
const useOld= (value) =>{
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

export default useOld;