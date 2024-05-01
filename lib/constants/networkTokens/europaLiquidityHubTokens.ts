import { skaleEuropaTestnet } from "viem/chains";

export const europaLiquidityHubTokens = {
	[skaleEuropaTestnet.id]: [
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0x6aC1C63824991EE50DD41C17F2bb0d111D9fcec1",
			isStableCoins: true,
		},
		{
			symbol: "USDC",
			name: "USD Circle",
			decimals: 6,
			address: "0x0178D32863dc1e1f369f157d4B09e9100f832DE3",
			isStableCoins: true,
		},
		{
			symbol: "USDT",
			name: "USD Tether",
			decimals: 6,
			address: "0xF8357722637a0bd81b958FEA639BCf7EC7aeB365",
			isStableCoins: true,
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x8f8828d226Befb46A13F4924fDf87FC65bAb343a",
			isStableCoins: false,
		},
	],
};
