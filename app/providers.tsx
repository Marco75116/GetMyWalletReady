"use client";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { configA } from "@/lib/clients/wagmi/config";

export function Providers({ children }: { children: ReactNode }) {
	const queryClient = new QueryClient();
	return (
		<WagmiProvider config={configA}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</WagmiProvider>
	);
}
