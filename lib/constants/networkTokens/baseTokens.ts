import { base } from "viem/chains";

export const baseTokens = {
	[base.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
			isStableCoins: true,
		},
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
			isStableCoins: true,
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x4200000000000000000000000000000000000006",
			isStableCoins: false,
		},
	],
};
