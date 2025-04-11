import { useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [storedData, setStoredData] = useState<T>(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            console.error("Error reading localStorage key “" + key + "”: ", err);
            return initialValue;
        };
    });


    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedData));
        } catch (err) {
            console.log("Error writing localStorage key “" + key + "”: ", err);
        }
    }, [key, storedData]);

    return [storedData, setStoredData];
};

export default useLocalStorage;