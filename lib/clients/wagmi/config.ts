import { createConfig, http } from "wagmi";
import { mainnet, base, optimism } from "wagmi/chains";
import { injected, safe, walletConnect } from "wagmi/connectors";

const projectId = process.env.WALLECT_CONNECT_PROJECTID as string;

export const config = createConfig({
  chains: [mainnet, base],
  connectors: [injected(), walletConnect({ projectId }), safe()],
  transports: {
    [mainnet.id]: http(),
    [base.id]: http(),
  },
});

export const configB = createConfig({
  chains: [optimism],
  transports: {
    [optimism.id]: http(),
  },
});
