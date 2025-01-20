import { createQuery, useQueryClient } from "@tanstack/solid-query";

export default function () {
const queryClient = useQueryClient()
    return <>
        <button onClick={() => queryClient.invalidateQueries({queryKey:["realQuery"]})}>Invalidate Query</button>
        <a href={"/"}>Go Back</a>
    </>
}
