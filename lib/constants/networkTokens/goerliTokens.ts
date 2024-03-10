import { goerli } from "viem/chains";

export const goerliTokens = {
	[goerli.id]: [
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0xC2Eb52200586aF9594B93618b55B460e07E4ddBd",
			isStableCoins: true,
		},
		{
			symbol: "USDT",
			name: "USD Tether",
			decimals: 6,
			address: "0x5492dE05F89501A4a6F5d3dE85675541E42534C2",
			isStableCoins: true,
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0xf48c61Cc6DBCF6f4Dd1C93d29De27Fd0832843bE",
			isStableCoins: false,
		},
		
	],
};
