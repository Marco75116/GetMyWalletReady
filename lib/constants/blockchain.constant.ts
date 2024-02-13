import {
	arbitrum,
	avalanche,
	base,
	mainnet,
	optimism,
	polygon,
} from "viem/chains";

export const blockchains = [
	mainnet,
	arbitrum,
	optimism,
	polygon,
	base,
	avalanche,
];

export type BlockchainIDs = (typeof blockchains)[number]["id"];
