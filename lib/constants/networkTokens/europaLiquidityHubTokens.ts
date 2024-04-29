import { europaLiquidityHub } from "@/lib/clients/wagmi/europaLiquidityHub";


export const europaLiquidityHubTokens = {
	[europaLiquidityHub.id]: [
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0x57678E3930351820Acd11d5C6fE7518122BA182c",
			isStableCoins: true,
		},
		{
			symbol: "USDC",
			name: "USD Circle",
			decimals: 6,
			address: "0x6bE16988159AE1C6Dda1941931Fd40DF620fF89C",
			isStableCoins: true,
		},
		{
			symbol: "USDT",
			name: "USD Tether",
			decimals: 6,
			address: "0x7e4A3fAeDE9D042D0a7e8491E48aa6F33c31dc4F",
			isStableCoins: true,
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x428cE04DE2C55B5cb4A88dD5a6a354714ACA21a1",
			isStableCoins: false,
		},
		
	],
};
