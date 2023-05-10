import { setRoot } from "../../../../navigation/helpers/navigation";
import { homeRoot } from "../../../../navigation/roots/home";

export function useTimeActive() {
    function handleAfterTimeout() {
        setRoot(homeRoot);
        clearTimeout(myTimeout);
    }

    const myTimeout = setTimeout(() => {
        handleAfterTimeout();
    }, 2000);
}
