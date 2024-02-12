import { Token } from "../types/global.types";

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const addTokenToWallet = (token: Token, walletClient: any) => {
	walletClient.watchAsset({
		type: "ERC20",
		options: {
			address: token.address,
			decimals: token.decimals,
			symbol: token.symbol,
		},
	});
};
