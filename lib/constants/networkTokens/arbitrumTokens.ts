import { arbitrum } from "viem/chains";

export const arbitrumTokens = {
	[arbitrum.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
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
			address: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
			isStableCoins: false,
		},
		{
			symbol: "ARB",
			name: "Arbitrum",
			decimals: 18,
			address: "0x912CE59144191C1204E64559FE8253a0e49E6548",
			isStableCoins: false,
		},
	],
};
