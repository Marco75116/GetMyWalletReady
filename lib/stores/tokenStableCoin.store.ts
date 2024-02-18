import { create } from "zustand";

interface useTokensStableCoinStore {
	tokensStableCoin: boolean;
	setTokensStableCoin: () => void;
}

export const useTokensStableCoin = create<useTokensStableCoinStore>((set) => ({
	tokensStableCoin: false,
	setTokensStableCoin: () =>
		set((state) => ({
			tokensStableCoin: !state.tokensStableCoin,
		})),
}));
