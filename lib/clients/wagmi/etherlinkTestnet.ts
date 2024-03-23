import { defineChain } from "viem";


export const etherlinkTestnet = /*#__PURE__*/ defineChain({
  id: 128123,
  name: 'Etherlink Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'BNB',
    symbol: 'BNB',
  },
  rpcUrls: {
    default: { http: ['https://node.ghostnet.etherlink.com'] },
  },
  blockExplorers: {
    default: {
      name: 'testnet-explorer.etherlink',
      url: 'https://testnet-explorer.etherlink.com/',
      apiUrl: 'https://testnet-explorer.etherlink.com/api',
    },
  },
  contracts: {
    multicall3: {
      address: '0xca11bde05977b3631167028862be2a173976ca11',
      blockCreated: 1639079,
    },
  },
})
