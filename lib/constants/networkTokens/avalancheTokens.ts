import { avalanche } from "viem/chains";

export const avalancheTokens = {
	[avalanche.id]: [
		{
			symbol: "USDC",
			name: "USD Coin",
			decimals: 6,
			address: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
			isStableCoins: true,
		},
		{
			symbol: "USDC.e",
			name: "USD Coin",
			decimals: 6,
			address: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
			isStableCoins: true,
		},
		{
			symbol: "USDT",
			name: "Tether USD",
			decimals: 6,
			address: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
			isStableCoins: true,
		},
		{
			symbol: "USDT.e",
			name: "Tether USD",
			decimals: 6,
			address: "0xc7198437980c041c805A1EDcbA50c1Ce5db95118",
			isStableCoins: true,
		},
		{
			symbol: "DAI.e",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
			isStableCoins: true,
		},
		{
			symbol: "WETH.e",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB",
			isStableCoins: false,
		},
	],
};
