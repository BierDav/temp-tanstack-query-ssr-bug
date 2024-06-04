import {createQuery} from "@tanstack/solid-query";

export default function () {
    const timeout = createQuery(() => ({
        queryKey: ["timeout"],
        queryFn: () => new Promise((resolve) => setTimeout(() => resolve("test"), 2000))
    }))

    const state = createQuery(() => ({
        queryKey: ["realQuery"],
        queryFn: async () => {
            const resp = await fetch('https://api.sampleapis.com/switch/games');
            return await resp.json();
        },
        enabled: !!timeout.data
    }))

    return <>
        {JSON.stringify(state.data?.[0])}
    </>
}
