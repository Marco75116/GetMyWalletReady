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
	celo,
	goerli,
} from "wagmi/chains";
import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";
import { etherlinkTestnet } from "./etherlinkTestnet";

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
		celo,
		goerli,
		etherlinkTestnet
		
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
		[celo.id]: http(),
		[goerli.id]: http(),
		[etherlinkTestnet.id]: http(),

	},
});

export const configB = createConfig({
	chains: [optimism],
	transports: {
		[optimism.id]: http(),
	},
});
