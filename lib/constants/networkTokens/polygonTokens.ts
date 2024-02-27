import { polygon } from "viem/chains";

export const polygonTokens = {
	[polygon.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
			isStableCoins: true,
		},
		{
			symbol: "USDT",
			name: "Tether USD",
			decimals: 6,
			address: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
			isStableCoins: true,
		},
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
			isStableCoins: true,
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
			isStableCoins: false,
		},
	],
};
