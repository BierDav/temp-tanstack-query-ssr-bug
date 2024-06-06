import { ErrorBoundary } from "solid-js";
import { createQuery } from "@tanstack/solid-query";

export default function () {
    const errorQuery = createQuery(() => ({
        queryKey: ["errorQuery"],
        queryFn: () => {
            throw new Error("test")
        }
    }))

    return <ErrorBoundary fallback={<div>Something went wrong</div>}>
        {errorQuery.data}
    </ErrorBoundary>
}
