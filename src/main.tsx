import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClientProvider} from "@tanstack/react-query";
import App from './App.tsx'
import {queryClient} from "./global/index.ts";
import {DarkModeProvider} from "./global/";
import {UserProvider} from "./global/";
import {RouteNamesProvider} from "./global/";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <UserProvider>
        <DarkModeProvider>
            <QueryClientProvider client={queryClient}>
                <RouteNamesProvider>
                  <React.StrictMode>
                      <App />
                  </React.StrictMode>
                </RouteNamesProvider>
            </QueryClientProvider>
        </DarkModeProvider>
    </UserProvider>
)
