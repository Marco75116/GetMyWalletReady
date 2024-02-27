import { linea } from "viem/chains";

export const lineaTokens = {
	[linea.id]: [
		{
			symbol: "USDC",
			name: "USDC",
			decimals: 6,
			address: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff",
			isStableCoins: true,
		},
		{
			symbol: "USDT",
			name: "Tether USD",
			decimals: 6,
			address: "0xA219439258ca9da29E9Cc4cE5596924745e12B93",
			isStableCoins: true,
		},
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5",
			isStableCoins: true,
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f",
			isStableCoins: false,
		},
		{
			symbol: "WBTC",
			name: "Wrapped BTC",
			decimals: 8,
			address: "0x3aAB2285ddcDdaD8edf438C1bAB47e1a9D05a9b4",
			isStableCoins: false,
		},
	],
};
