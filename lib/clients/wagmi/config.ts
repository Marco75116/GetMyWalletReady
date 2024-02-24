import { createConfig, http } from "wagmi";
import {
	mainnet,
	base,
	optimism,
	arbitrum,
	polygon,
	avalanche,
	bsc,
	moonriver,
	moonbeam,
	linea,
} from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECTID as string;

export const config = createConfig({
	chains: [
		mainnet,
		arbitrum,
		optimism,
		polygon,
		bsc,
		base,
		avalanche,
		moonriver,
		moonbeam,
		linea,
	],
	connectors: [
		walletConnect({
			projectId: projectId,
		}),
	],
	transports: {
		[mainnet.id]: http(),
		[arbitrum.id]: http(),
		[optimism.id]: http(),
		[polygon.id]: http(),
		[base.id]: http(),
		[bsc.id]: http(),
		[avalanche.id]: http(),
		[moonriver.id]: http(),
		[moonbeam.id]: http(),
		[linea.id]: http(),
	},
});

export const configB = createConfig({
	chains: [optimism],
	transports: {
		[optimism.id]: http(),
	},
});
