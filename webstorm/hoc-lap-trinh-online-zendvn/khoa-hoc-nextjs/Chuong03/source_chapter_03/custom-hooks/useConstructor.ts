import { useRef } from "react";

type ConstructorCallback = () => void;

function useConstructor(callback: ConstructorCallback): void {
    const isRun = useRef(false);
    
    if(isRun.current === false) {
        callback();
        
        isRun.current = true;
    }
}

export default useConstructor;