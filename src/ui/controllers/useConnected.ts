import { useEffect, useState } from "react";
import NetInfo from '@react-native-community/netinfo';


export function useConnected() {
    const [isConnected, onChangeIsConnected] = useState<boolean | null>(true);
    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            onChangeIsConnected(state.isConnected);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    return {
        isConnected
    };
}