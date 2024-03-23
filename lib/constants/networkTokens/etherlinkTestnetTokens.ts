import { etherlinkTestnet } from "@/lib/clients/wagmi/etherlinkTestnet";

export const etherlinkTestnetTokens = {
	[etherlinkTestnet.id]: [
		{
			symbol: "DAI",
			name: "Dai Stablecoin",
			decimals: 18,
			address: "0x1FfEb3C5174b19Ed399A0FdB65747ecAE7fBA3b0",
			isStableCoins: true,
		},
		{
			symbol: "USDT",
			name: "USD Tether",
			decimals: 6,
			address: "0xc2B7337a8eB403B3fC6a1ADbd63c3B18dc356A8A",
			isStableCoins: true,
		},
		{
			symbol: "WETH",
			name: "Wrapped Ether",
			decimals: 18,
			address: "0x5d998f0a711F5bd56Ac1B96EcfD9da0555027F1D",
			isStableCoins: false,
		},
		
	],
};
