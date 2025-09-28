import { useState } from "react";
import { StatCard } from "@/components/ui/StatCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConnectWallet } from "@/components/ui/ConnectWallet";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RiskManager } from "@/components/ui/RiskManager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChainlinkPriceFeed } from "@/components/ui/ChainlinkPriceFeed";
import { GraphAnalytics } from "@/components/ui/GraphAnalytics";
import {
  useMockToken,
  useYieldVault,
  useLendingProtocol,
  useChainlinkOracle,
} from "@/hooks/useContracts";
import { useAccount } from "wagmi";
import {
  TrendingUp,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
  Wallet,
  PieChart,
  Clock,
  Shield,
} from "lucide-react";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const { address, isConnected } = useAccount();

  // Contract hooks
  const { balance: mockTokenBalance, totalSupply } = useMockToken();
  const { userBalance: yieldBalance, totalDeposits } = useYieldVault();
  const { borrowBalance, collateralBalance } = useLendingProtocol();
  const { rbtcPrice, usdtPrice } = useChainlinkOracle();

  const transactions = [
    {
      id: 1,
      type: "Deposit",
      token: "BTC",
      amount: "0.5",
      value: "$21,500",
      status: "completed",
      time: "2 minutes ago",
    },
    {
      id: 2,
      type: "Yield Claim",
      token: "VINT",
      amount: "125.50",
      value: "$892",
      status: "completed",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "Swap",
      token: "BTC → ETH",
      amount: "0.2",
      value: "$8,600",
      status: "pending",
      time: "3 hours ago",
    },
    {
      id: 4,
      type: "LP Add",
      token: "BTC-USDT",
      amount: "1,000",
      value: "$1,000",
      status: "completed",
      time: "1 day ago",
    },
  ];

  return (
    <div className="container py-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Your DeFi Portfolio</h1>
          <p className="text-muted-foreground">
            Overview of your Bitcoin yield and DeFi positions
          </p>
        </div>
        <ConnectWallet />
      </div>

      {/* Dashboard Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="overview">Portfolio Overview</TabsTrigger>
          <TabsTrigger value="risk">Risk Management</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="MockToken Balance"
              value={`${parseFloat(mockTokenBalance).toFixed(2)} MOCK`}
              subtitle="Your token balance"
              icon={<DollarSign className="h-5 w-5" />}
              trend="neutral"
            />
            <StatCard
              title="Yield Vault Balance"
              value={`${parseFloat(yieldBalance).toFixed(2)} MOCK`}
              subtitle="Staked in yield vault"
              icon={<Activity className="h-5 w-5" />}
              trend="up"
              trendValue="8.5%"
            />
            <StatCard
              title="Total Protocol Deposits"
              value={`${parseFloat(totalDeposits).toFixed(2)} MOCK`}
              subtitle="All users combined"
              icon={<TrendingUp className="h-5 w-5" />}
              trend="up"
              trendValue="15.2%"
            />
            <StatCard
              title="rBTC Price"
              value={`$${rbtcPrice.toFixed(2)}`}
              subtitle="Live from Chainlink"
              icon={<TrendingUp className="h-5 w-5" />}
              trend="neutral"
            />
          </div>

          {/* Charts and Activity */}
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Price Feeds */}
            <Card className="lg:col-span-2 p-6 card-gradient border-border/40">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Live Price Feeds</h2>
                <Badge variant="outline" className="text-green-500">
                  Chainlink Oracle
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ChainlinkPriceFeed asset="rBTC" />
                <ChainlinkPriceFeed asset="USDT" />
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6 card-gradient border-border/40">
              <h2 className="text-lg font-semibold mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/swap">
                    <ArrowUpRight className="h-4 w-4 mr-2" />
                    Swap Tokens
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/liquidity">
                    <Activity className="h-4 w-4 mr-2" />
                    Add Liquidity
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  asChild
                >
                  <a href="/yield">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Stake Tokens
                  </a>
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Bridge Assets
                </Button>
              </div>
            </Card>
          </div>

          {/* Protocol Analytics */}
          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6 card-gradient border-border/40">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold">Protocol Analytics</h2>
                <Badge variant="outline" className="text-blue-500">
                  The Graph
                </Badge>
              </div>
              <GraphAnalytics type="protocol" />
            </Card>

            {isConnected && address && (
              <Card className="p-6 card-gradient border-border/40">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold">Your Analytics</h2>
                  <Badge variant="outline" className="text-purple-500">
                    User Data
                  </Badge>
                </div>
                <GraphAnalytics type="user" userAddress={address} />
              </Card>
            )}
          </div>

          {/* Recent Transactions */}
          <Card className="p-6 card-gradient border-border/40">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Recent Transactions</h2>
              <Button variant="outline" size="sm">
                View All
              </Button>
            </div>

            <div className="space-y-4">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`h-2 w-2 rounded-full ${
                        tx.status === "completed"
                          ? "bg-success"
                          : tx.status === "pending"
                          ? "bg-warning"
                          : "bg-destructive"
                      }`}
                    />
                    <div>
                      <div className="font-medium">{tx.type}</div>
                      <div className="text-sm text-muted-foreground">
                        {tx.token}
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-medium">
                      {tx.type === "Yield Claim" || tx.type === "Deposit"
                        ? "+"
                        : ""}
                      {tx.amount} {tx.token.includes("→") ? "" : tx.token}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {tx.value}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">
                      {tx.time}
                    </div>
                    <div
                      className={`text-xs font-medium ${
                        tx.status === "completed"
                          ? "text-success"
                          : tx.status === "pending"
                          ? "text-warning"
                          : "text-destructive"
                      }`}
                    >
                      {tx.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="risk" className="space-y-8">
          <RiskManager />
        </TabsContent>
      </Tabs>
    </div>
  );
}
