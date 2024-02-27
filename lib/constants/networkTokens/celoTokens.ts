import { celo } from "viem/chains";

export const celoTokens = {
	[celo.id]: [
		{
			symbol: "USDC",
			name: "USDC",
			decimals: 6,
			address: "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
			isStableCoins: true,
		},
		{
			symbol: "USDT",
			name: "Tether USD",
			decimals: 6,
			address: "0x617f3112bf5397D0467D315cC709EF968D9ba546",
			isStableCoins: true,
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x122013fd7dF1C6F636a5bb8f03108E876548b455",
			isStableCoins: false,
		},
		{
			symbol: "WBTC",
			name: "Wrapped BTC optic",
			decimals: 8,
			address: "0xBAAB46E28388d2779e6E31Fd00cF0e5Ad95E327B",
			isStableCoins: false,
		},
		{
			symbol: "BTC",
			name: "Wrapped BTC",
			decimals: 18,
			address: "0xD629eb00dEced2a080B7EC630eF6aC117e614f1b",
			isStableCoins: false,
		},
	],
};
