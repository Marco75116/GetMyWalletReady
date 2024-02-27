import { bsc } from "viem/chains";

export const bscTokens = {
	[bsc.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 18,
			address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
			isStableCoins: true,
		},
		{
			symbol: "USDT",
			name: "Tether USD",
			decimals: 18,
			address: "0x55d398326f99059fF775485246999027B3197955",
			isStableCoins: true,
		},
		{
			symbol: "FDUSD",
			name: "First Digital USD",
			decimals: 18,
			address: "0xc5f0f7b66764F6ec8C8Dff7BA683102295E16409",
			isStableCoins: true,
		},
		{
			symbol: "WBNB",
			name: "Wrapped BNB",
			decimals: 18,
			address: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
			isStableCoins: false,
		},
	],
};
