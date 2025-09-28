# 🚀 Vintara DeFi Protocol - Frontend

A modern DeFi protocol frontend built with React, TypeScript, and Vite, integrated with deployed smart contracts on Rootstock Testnet.

## ✨ Features

- **🔗 Wallet Integration**: MetaMask, WalletConnect, and other Web3 wallets
- **💰 Yield Farming**: Deposit tokens to earn yield from deployed contracts
- **🏦 Lending Protocol**: Borrow and lend assets with real-time data
- **📊 Live Analytics**: Real-time protocol statistics and user analytics
- **💱 Price Feeds**: Chainlink integration for live rBTC and USDT prices
- **📈 The Graph**: Protocol analytics and data indexing
- **🎨 Modern UI**: Beautiful, responsive design with dark/light themes

## 🏗️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Shadcn/ui
- **Web3**: Wagmi + Viem
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Deployment**: Vercel

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- MetaMask or compatible Web3 wallet

### Installation

1. **Clone and install dependencies:**

   ```bash
   npm install
   ```

2. **Set up environment variables:**

   ```bash
   cp env.example .env.local
   ```

   Fill in your environment variables in `.env.local`:

   - Get WalletConnect Project ID from [WalletConnect Cloud](https://cloud.walletconnect.com/)
   - Add your CoinMarketCap API key (optional)
   - Contract addresses are pre-configured for Rootstock Testnet

3. **Start development server:**

   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 🌐 Network Setup

### Rootstock Testnet Configuration

The app is pre-configured for **Rootstock Testnet**:

- **Chain ID**: 31
- **RPC URL**: https://rpc.testnet.rootstock.io/aHYduscUz7vhlRM1DHcieLdE9SfQ7K-T
- **Explorer**: https://explorer.testnet.rsk.co
- **Faucet**: https://faucet.rsk.co

### Adding Rootstock Testnet to MetaMask

1. Open MetaMask
2. Click on network dropdown
3. Select "Add Network"
4. Enter the following details:
   - **Network Name**: Rootstock Testnet
   - **RPC URL**: https://rpc.testnet.rootstock.io/aHYduscUz7vhlRM1DHcieLdE9SfQ7K-T
   - **Chain ID**: 31
   - **Currency Symbol**: tRBTC
   - **Block Explorer**: https://explorer.testnet.rsk.co

## 📋 Deployed Contracts

All contracts are deployed on Rootstock Testnet:

| Contract        | Address                                      | Explorer                                                                                   |
| --------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| MockToken       | `0xa370fefb8e3c32645bf20885fb9020d9d01fdbc8` | [View](https://explorer.testnet.rsk.co/address/0xa370fefb8e3c32645bf20885fb9020d9d01fdbc8) |
| YieldVault      | `0x4f6febf3ba832e8d9ba86ee6f6c641c809f304b4` | [View](https://explorer.testnet.rsk.co/address/0x4f6febf3ba832e8d9ba86ee6f6c641c809f304b4) |
| LendingProtocol | `0xf2676d5013e59c28d060194190164cb0571c4094` | [View](https://explorer.testnet.rsk.co/address/0xf2676d5013e59c28d060194190164cb0571c4094) |
| ChainlinkOracle | `0xc38d69d593229a0d11853b31394acf8d955dca5e` | [View](https://explorer.testnet.rsk.co/address/0xc38d69d593229a0d11853b31394acf8d955dca5e) |
| GraphIndexer    | `0xc89a1a228d894f6335b9bcc0c6cabd19159a1b32` | [View](https://explorer.testnet.rsk.co/address/0xc89a1a228d894f6335b9bcc0c6cabd19159a1b32) |

## 🎮 How to Use

### 1. Connect Wallet

- Click "Connect Wallet" in the top right
- Select your preferred wallet (MetaMask, WalletConnect, etc.)
- Approve the connection

### 2. Get Testnet Tokens

- Get testnet RBTC from the [Rootstock Faucet](https://faucet.rsk.co)
- The MockToken contract is deployed and ready to use

### 3. Yield Farming

- Navigate to the **Yield** page
- Deposit MockToken to earn yield
- Monitor your balance and rewards in real-time

### 4. Lending Protocol

- Go to the **Lending** page
- Use MockToken as collateral to borrow
- Monitor your health factor and manage positions

### 5. Analytics

- View live protocol statistics on the **Dashboard**
- See real-time price feeds from Chainlink
- Monitor protocol analytics from The Graph

## 🚀 Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Push to GitHub:**

   ```bash
   git add .
   git commit -m "Deploy Vintara DeFi frontend"
   git push origin main
   ```

2. **Deploy on Vercel:**

   - Connect your GitHub repository to Vercel
   - Set environment variables in Vercel dashboard
   - Deploy automatically

3. **Environment Variables in Vercel:**
   - Add all variables from `env.example`
   - Make sure to use `VITE_` prefix for client-side variables

### Manual Build

```bash
npm run build
npm run preview
```

## 🔧 Configuration

### Environment Variables

| Variable                        | Description                 | Required |
| ------------------------------- | --------------------------- | -------- |
| `VITE_WALLETCONNECT_PROJECT_ID` | WalletConnect Project ID    | Yes      |
| `VITE_GRAPH_PROTOCOL_ENDPOINT`  | The Graph Protocol endpoint | No       |
| `VITE_COINMARKETCAP_API_KEY`    | CoinMarketCap API key       | No       |
| `VITE_CHAIN_ID`                 | Network chain ID            | Yes      |
| `VITE_RPC_URL`                  | RPC endpoint URL            | Yes      |

### Contract Configuration

Contract addresses are configured in `src/config/contracts.ts` and can be updated via environment variables.

## 📁 Project Structure

```
frontend-Copy/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # UI components (Shadcn/ui)
│   │   ├── layout/         # Layout components
│   │   └── providers/      # Context providers
│   ├── hooks/              # Custom React hooks
│   ├── pages/              # Page components
│   ├── config/             # Configuration files
│   ├── lib/                # Utility libraries
│   └── assets/             # Static assets
├── public/                 # Public assets
├── vercel.json            # Vercel configuration
└── README.md              # This file
```

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

### Code Style

- **ESLint**: Configured with React and TypeScript rules
- **Prettier**: Code formatting
- **TypeScript**: Strict type checking enabled

## 🔒 Security

- **Environment Variables**: Sensitive data stored in environment variables
- **Input Validation**: All user inputs are validated
- **Error Handling**: Comprehensive error handling and user feedback
- **Security Headers**: Configured in `vercel.json`

## 📞 Support

For support and questions:

- **Documentation**: Check the main project README
- **Issues**: Create an issue in the GitHub repository
- **Discord**: Join our community Discord

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**🚀 Ready to deploy your DeFi frontend to Vercel!**
