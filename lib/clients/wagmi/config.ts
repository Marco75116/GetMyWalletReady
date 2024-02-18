import { createConfig, http } from "wagmi";
import {
	mainnet,
	base,
	optimism,
	arbitrum,
	polygon,
	avalanche,
	bsc,
} from "wagmi/chains";
import { injected, safe, walletConnect } from "wagmi/connectors";

const projectId = process.env.WALLECT_CONNECT_PROJECTID as string;

export const config = createConfig({
	chains: [mainnet, arbitrum, optimism, polygon,bsc, base, avalanche],
	connectors: [injected(), walletConnect({ projectId })],
	transports: {
		[mainnet.id]: http(),
		[arbitrum.id]: http(),
		[optimism.id]: http(),
		[polygon.id]: http(),
		[base.id]: http(),
		[bsc.id]: http(),
		[avalanche.id]: http(),
	},
});

export const configB = createConfig({
	chains: [optimism],
	transports: {
		[optimism.id]: http(),
	},
});
