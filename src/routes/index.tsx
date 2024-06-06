import { ErrorBoundary, Suspense } from "solid-js";
import { createQuery } from "@tanstack/solid-query";

export default function () {
    const errorQuery = createQuery(() => ({
        queryKey: ["errorQuery"],
        queryFn: () => new Promise<string>((_, reject) => {
            setTimeout(() => {
                reject(new Error("test"))
            }, 1000)
        })
    }))

    return <Suspense>
        <ErrorBoundary fallback={<div>Something went wrong</div>}>
            {errorQuery.data}
        </ErrorBoundary>
    </Suspense>
}
