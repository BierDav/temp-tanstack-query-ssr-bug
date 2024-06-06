import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { SolidQueryDevtools } from "@tanstack/solid-query-devtools";

export default function App() {
    return (
        <Router
            root={props => (
                <QueryClientProvider client={new QueryClient({
                    defaultOptions: {
                        queries: {
                            refetchOnMount: false,
                            suspense: true
                        }
                    }
                })}>
                    <MetaProvider>
                        <Title>SolidStart - Basic</Title>
                        <Suspense>{props.children}</Suspense>
                        <SolidQueryDevtools/>
                    </MetaProvider>
                </QueryClientProvider>
            )}
        >
            <FileRoutes/>
        </Router>
    );
}
