import { defineChain } from "viem";

export const europaLiquidityHub = /*#__PURE__*/ defineChain({
	id: 1444673419,
	name: "Europa Liquidity Hub",
	nativeCurrency: {
		decimals: 18,
		name: "sFUEL",
		symbol: "sFUEL",
	},
	rpcUrls: {
		default: {
			http: ["https://testnet.skalenodes.com/v1/juicy-low-small-testnet"],
		},
	},
	blockExplorers: {
		default: {
			name: "juicy-low-small-testnet.explorer.testnet.skalenodes",
			url: "https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/",
			apiUrl:
				"https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/api",
		},
	},
	contracts: {
		multicall3: {
			address: "0xD2C89700844C878b31093Fb87F83f2BB80438cFe",
			blockCreated: 1270500,
		},
	},
});
