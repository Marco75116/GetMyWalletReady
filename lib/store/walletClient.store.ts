import { create } from "zustand";

interface useWalletClientStore {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	walletClient: any;
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	setWalletClient: (walletClient: any) => void;
}

export const useWalletClient = create<useWalletClientStore>((set) => ({
	walletClient: undefined,
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	setWalletClient: (walletClient: any) => set({ walletClient: walletClient }),
}));
