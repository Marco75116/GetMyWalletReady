import { mainnet } from "viem/chains";

export const mainnetTokens = {
	[mainnet.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
			isStableCoins: true,
		},
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
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
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
			isStableCoins: false,
		},
		{
			symbol: "WBTC",
			name: "Wrapped BTC",
			decimals: 8,
			address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
			isStableCoins: false,
		},
	],
};
