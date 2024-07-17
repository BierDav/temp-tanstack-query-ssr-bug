import { createQueries } from "@tanstack/solid-query";
import { ErrorBoundary, Suspense } from "solid-js";

export default function () {
    const queries = createQueries(() => {
        const list = ["test1", "test2"];
        return ({
            queries: list.map((key) => ({
                queryKey: ["key", key],
                queryFn: () => true,
            })),
            combine: (results) => ({
                data: results.every(result => result.data)
            })
        });
    });

    return <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Suspense>
            {queries.data}
        </Suspense>
    </ErrorBoundary>
}
