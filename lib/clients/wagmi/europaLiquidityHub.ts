import { defineChain } from "viem";


export const europaLiquidityHub = /*#__PURE__*/ defineChain({
  id: 1444673419,
  name: 'Europa Liquidity Hub',
  nativeCurrency: {
    decimals: 18,
    name: 'sFUEL',
    symbol: 'sFUEL',
  },
  rpcUrls: {
    default: { http: ['https://testnet.skalenodes.com/v1/juicy-low-small-testnet'] },
  },
  blockExplorers: {
    default: {
      name: 'juicy-low-small-testnet.explorer.testnet.skalenodes',
      url: 'https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/',
      apiUrl: 'https://juicy-low-small-testnet.explorer.testnet.skalenodes.com/api',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 1639079,
    },
  },
})
