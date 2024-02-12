export type Token = {
	symbol: string;
	name: string;
	decimals: number;
	address: string;
};
export type AllTokens = {
	[chain: string]: Token[];
};
