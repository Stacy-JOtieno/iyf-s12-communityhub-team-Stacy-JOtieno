import { useEffect, useState } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [reloadKey, setReloadKey] = useState(0);

    useEffect(() => {
        const controller = new AbortController();

        async function fetchData() {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(url, { signal: controller.signal });

                if (!response.ok) {
                    throw new Error("Fetch failed");
                }

                setData(await response.json());
            } catch (err) {
                if (err.name === "AbortError") {
                    return;
                }
                setError(err.message);
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchData();

        return () => controller.abort();
    }, [url, reloadKey]);

    function reload() {
        setReloadKey((key) => key + 1);
    }

    return { data, loading, error, reload };
}

export default useFetch;
