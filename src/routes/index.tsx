import { createQueries, createQuery } from "@tanstack/solid-query";
import { ErrorBoundary, Suspense } from "solid-js";

export default function () {
    const queries = createQuery(() => {
        const list = ["test1", "test2"];
        return ({
            queryKey: ["test"],
            queryFn: async () => {
                return list;
            }
        });
    });

    return <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense>
            {queries.data}
        </Suspense>
    </ErrorBoundary>
}
