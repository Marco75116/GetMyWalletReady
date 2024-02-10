import { createConfig, http } from "wagmi";
import { mainnet, optimism } from "wagmi/chains";

export const configA = createConfig({
  chains: [mainnet],
  transports: {
    [mainnet.id]: http(),
  },
});

export const configB = createConfig({
  chains: [optimism],
  transports: {
    [optimism.id]: http(),
  },
});
