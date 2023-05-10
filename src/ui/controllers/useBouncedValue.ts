import { useState, useEffect } from 'react';

interface UseBouncedValueProps {
    value?: string;
    delay?: number;
}

export const useBouncedValue = (props: UseBouncedValueProps) => {
    const { value, delay = 2000 } = props;
    const [bouncedValue, setBouncedValue] = useState(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setBouncedValue(value);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return {
        bouncedValue
    };
};