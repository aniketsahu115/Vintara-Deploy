import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { mainnet, sepolia } from "wagmi/chains";

// Rootstock chains
const rootstock = {
  id: 30,
  name: "Rootstock",
  network: "rootstock",
  nativeCurrency: {
    decimals: 18,
    name: "Rootstock Bitcoin",
    symbol: "RBTC",
  },
  rpcUrls: {
    public: { http: ["https://public-node.rsk.co"] },
    default: { http: ["https://public-node.rsk.co"] },
  },
  blockExplorers: {
    default: { name: "RSK Explorer", url: "https://explorer.rsk.co" },
  },
  testnet: false,
} as const;

const rootstockTestnet = {
  id: Number(import.meta.env.VITE_CHAIN_ID) || 31,
  name: import.meta.env.VITE_NETWORK_NAME || "Rootstock Testnet",
  network: "rootstock-testnet",
  nativeCurrency: {
    decimals: 18,
    name: "Rootstock Bitcoin Testnet",
    symbol: "tRBTC",
  },
  rpcUrls: {
    public: {
      http: [
        import.meta.env.VITE_RPC_URL ||
          "https://rpc.testnet.rootstock.io/aHYduscUz7vhlRM1DHcieLdE9SfQ7K-T",
      ],
    },
    default: {
      http: [
        import.meta.env.VITE_RPC_URL ||
          "https://rpc.testnet.rootstock.io/aHYduscUz7vhlRM1DHcieLdE9SfQ7K-T",
      ],
    },
  },
  blockExplorers: {
    default: {
      name: "RSK Testnet Explorer",
      url:
        import.meta.env.VITE_EXPLORER_URL || "https://explorer.testnet.rsk.co",
    },
  },
  testnet: true,
} as const;

export const config = getDefaultConfig({
  appName: "Vintara",
  projectId:
    import.meta.env.VITE_WALLETCONNECT_PROJECT_ID ||
    "95856d4bd39a6a4f4ec4a9477b796f17",
  chains: [rootstock, rootstockTestnet, mainnet, sepolia],
  ssr: false, // If your dApp uses server side rendering (SSR)
});
