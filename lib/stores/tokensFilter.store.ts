import { create } from "zustand";

interface useTokensFilterStore {
	tokensSearch: string;
	setTokensSearch: (textSearch: string) => void;
	tokensStableCoin: boolean;
	setTokensStableCoin: () => void;
}

export const useTokensFilter = create<useTokensFilterStore>((set) => ({
	tokensSearch: "",
	setTokensSearch: (textSearch: string) => set({ tokensSearch: textSearch }),
	tokensStableCoin: false,
	setTokensStableCoin: () =>
		set((state) => ({
			tokensStableCoin: !state.tokensStableCoin,
		})),
}));
