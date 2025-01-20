import { createQuery } from "@tanstack/solid-query";

export default function () {


    const state = createQuery(() => ({
        refetchOnMount: false,
        queryKey: ["realQuery"],
        queryFn: async () => {
            const resp = await fetch('https://api.sampleapis.com/switch/games');
            return await resp.json();
        },
    }))

    return <>
        {JSON.stringify(state.data?.[0])}
        <br/><br/>
        <a href="/test">Go to other page</a>
    </>
}
