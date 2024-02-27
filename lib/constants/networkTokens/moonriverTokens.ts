import { moonriver } from "viem/chains";

export const moonriverTokens = {
	[moonriver.id]: [
		{
			symbol: "Frax",
			name: "Frax",
			decimals: 18,
			address: "0x1A93B23281CC1CDE4C4741353F3064709A16197d",
			isStableCoins: true,
		},
		{
			symbol: "xcKSM",
			name: "xcKSM",
			decimals: 12,
			address: "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",
			isStableCoins: false,
		},
		{
			symbol: "WMOVR",
			name: "Wrapped MOVR",
			decimals: 18,
			address: "0x98878B06940aE243284CA214f92Bb71a2b032B8A",
			isStableCoins: false,
		},
	],
};
