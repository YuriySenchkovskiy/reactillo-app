import { useEffect, useRef } from "react";

function useOutsideClick<T extends HTMLElement = HTMLUListElement>(
    handler: () => void ,
    listenCapturing: boolean = true
) {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                handler();
            }
        }
        document.addEventListener('click', handleClick, listenCapturing);

        return () => {
            document.removeEventListener("click", handleClick, listenCapturing);
        };
    }, [handler, listenCapturing]);

    return ref;
}

export default useOutsideClick;
