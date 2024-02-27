import { optimism } from "viem/chains";

export const optimismTokens = {
	[optimism.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
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
			address: "0x4200000000000000000000000000000000000006",
			isStableCoins: false,
		},
		{
			symbol: "OP",
			name: "Optimism",
			decimals: 18,
			address: "0x4200000000000000000000000000000000000042",
			isStableCoins: false,
		},
		{
			symbol: "WBTC",
			name: "Wrapped BTC",
			decimals: 8,
			address: "0x68f180fcCe6836688e9084f035309E29Bf0A2095",
			isStableCoins: false,
		},
	],
};
