import { moonbeam } from "viem/chains";

export const moonbeamTokens = {
	[moonbeam.id]: [
		{
			symbol: "xcUSDC",
			name: "USD Coin",
			decimals: 6,
			address: "0xFFfffffF7D2B0B761Af01Ca8e25242976ac0aD7D",
			isStableCoins: true,
		},
		{
			symbol: "USDC",
			name: "USD Coin (Wormhole)",
			decimals: 6,
			address: "0x931715FEE2d06333043d11F658C8CE934aC61D0c",
			isStableCoins: true,
		},
		{
			symbol: "WGLMR",
			name: "Wrapped GLMR",
			decimals: 18,
			address: "0xAcc15dC74880C9944775448304B263D191c6077F",
			isStableCoins: false,
		},
		{
			symbol: "xcDOT",
			name: "xcDOT",
			decimals: 10,
			address: "0xFfFFfFff1FcaCBd218EDc0EbA20Fc2308C778080",
			isStableCoins: false,
		},
	],
};
