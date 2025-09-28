# 🚀 Vercel Deployment Guide - Vintara DeFi Frontend

This guide will help you deploy the Vintara DeFi Protocol frontend to Vercel with all contract integrations working.

## 📋 Prerequisites

- GitHub account
- Vercel account (free tier available)
- WalletConnect Project ID (free from [WalletConnect Cloud](https://cloud.walletconnect.com/))

## 🚀 Step-by-Step Deployment

### 1. Prepare Your Repository

1. **Push to GitHub:**
   ```bash
   cd frontend-Copy
   git init
   git add .
   git commit -m "Initial commit: Vintara DeFi frontend ready for Vercel"
   git branch -M main
   git remote add origin https://github.com/yourusername/vintara-defi-frontend.git
   git push -u origin main
   ```

### 2. Deploy to Vercel

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure the project:**
   - **Framework Preset**: Vite
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 3. Set Environment Variables

In the Vercel project settings, add these environment variables:

#### Required Variables:

```
VITE_WALLETCONNECT_PROJECT_ID=your_walletconnect_project_id_here
VITE_CHAIN_ID=31
VITE_NETWORK_NAME=Rootstock Testnet
VITE_RPC_URL=https://rpc.testnet.rootstock.io/aHYduscUz7vhlRM1DHcieLdE9SfQ7K-T
VITE_EXPLORER_URL=https://explorer.testnet.rsk.co
```

#### Contract Addresses (Pre-configured):

```
VITE_MOCK_TOKEN_ADDRESS=0xa370fefb8e3c32645bf20885fb9020d9d01fdbc8
VITE_YIELD_VAULT_ADDRESS=0x4f6febf3ba832e8d9ba86ee6f6c641c809f304b4
VITE_LENDING_PROTOCOL_ADDRESS=0xf2676d5013e59c28d060194190164cb0571c4094
VITE_LIQUIDITY_POOL_ADDRESS=0x324c91c047f8f4fd22418fa6254e281321f3fa3d
VITE_YIELD_FARMING_ADDRESS=0x078cf9a4b1e7b184d7dfcd8d082772ab164af9e1
VITE_PRICE_ORACLE_ADDRESS=0xbf08c62e99318962a2627ef5f438ca07dff3aa11
VITE_GOVERNANCE_ADDRESS=0x81d9fe2436a092387b9934e889a33663674c614e
VITE_CHAINLINK_ORACLE_ADDRESS=0xc38d69d593229a0d11853b31394acf8d955dca5e
VITE_GRAPH_INDEXER_ADDRESS=0xc89a1a228d894f6335b9bcc0c6cabd19159a1b32
```

#### Optional Variables:

```
VITE_GRAPH_PROTOCOL_ENDPOINT=https://api.thegraph.com/subgraphs/name/vintara/protocol
VITE_GRAPH_USER_ENDPOINT=https://api.thegraph.com/subgraphs/name/vintara/users
VITE_GRAPH_ANALYTICS_ENDPOINT=https://api.thegraph.com/subgraphs/name/vintara/analytics
VITE_COINMARKETCAP_API_KEY=your_coinmarketcap_api_key_here
VITE_CHAINLINK_RBTC_FEED=0x0000000000000000000000000000000000000000
VITE_CHAINLINK_USDT_FEED=0x0000000000000000000000000000000000000000
```

### 4. Deploy

1. **Click "Deploy"**
2. **Wait for deployment to complete** (usually 2-3 minutes)
3. **Your app will be live at**: `https://your-project-name.vercel.app`

## 🔧 Getting WalletConnect Project ID

1. **Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)**
2. **Sign up/Login** with your GitHub account
3. **Create a new project**
4. **Copy the Project ID**
5. **Add it to your Vercel environment variables**

## 🌐 Custom Domain (Optional)

1. **In Vercel Dashboard**, go to your project
2. **Click "Domains" tab**
3. **Add your custom domain**
4. **Update DNS records** as instructed
5. **SSL certificate** will be automatically provisioned

## 🔄 Automatic Deployments

Vercel will automatically deploy when you push to your main branch:

```bash
git add .
git commit -m "Update frontend"
git push origin main
```

## 🧪 Testing Your Deployment

### 1. Connect Wallet

- Open your deployed app
- Click "Connect Wallet"
- Select MetaMask or WalletConnect
- Switch to Rootstock Testnet (Chain ID: 31)

### 2. Test Contract Interactions

- **Yield Vault**: Try depositing MockToken
- **Lending Protocol**: Test borrowing functionality
- **Price Feeds**: Verify Chainlink prices are loading
- **Analytics**: Check if Graph Protocol data is displayed

### 3. Verify Network Configuration

- Ensure you're on Rootstock Testnet
- Check that contract addresses are correct
- Verify RPC connection is working

## 🚨 Troubleshooting

### Build Errors

- **Check environment variables** are set correctly
- **Verify all dependencies** are in package.json
- **Check Vite configuration** is correct

### Runtime Errors

- **Check browser console** for errors
- **Verify contract addresses** are correct
- **Ensure wallet is connected** to correct network

### Network Issues

- **Add Rootstock Testnet** to MetaMask manually
- **Check RPC URL** is accessible
- **Verify Chain ID** is 31

## 📊 Monitoring

### Vercel Analytics

- **Enable Vercel Analytics** in project settings
- **Monitor performance** and user behavior
- **Track deployment metrics**

### Error Tracking

- **Check Vercel Function logs** for server-side errors
- **Monitor browser console** for client-side errors
- **Set up error tracking** (Sentry, LogRocket, etc.)

## 🔒 Security Considerations

### Environment Variables

- **Never commit** `.env` files to Git
- **Use Vercel's environment variables** for sensitive data
- **Rotate API keys** regularly

### Content Security Policy

- **Configure CSP headers** in `vercel.json`
- **Whitelist trusted domains** for external resources
- **Enable HTTPS** (automatic with Vercel)

## 🎯 Performance Optimization

### Build Optimization

- **Enable Vercel's automatic optimizations**
- **Use Vite's build optimizations**
- **Optimize images** and assets

### Caching

- **Configure caching headers** in `vercel.json`
- **Use Vercel's Edge Network** for global distribution
- **Enable static asset caching**

## 📈 Scaling

### Vercel Pro Features

- **Upgrade to Pro** for advanced features
- **Custom domains** and SSL
- **Advanced analytics** and monitoring
- **Team collaboration** features

### Performance Monitoring

- **Monitor Core Web Vitals**
- **Track user engagement**
- **Optimize based on metrics**

## 🎉 Success!

Your Vintara DeFi Protocol frontend is now live on Vercel!

### Next Steps:

1. **Test all functionality** thoroughly
2. **Monitor performance** and user feedback
3. **Set up monitoring** and error tracking
4. **Plan for mainnet deployment** when ready
5. **Consider custom domain** for branding

### Useful Links:

- **Vercel Dashboard**: https://vercel.com/dashboard
- **WalletConnect Cloud**: https://cloud.walletconnect.com/
- **Rootstock Testnet Explorer**: https://explorer.testnet.rsk.co
- **Rootstock Faucet**: https://faucet.rsk.co

---

**🚀 Your DeFi frontend is ready for the world!**
