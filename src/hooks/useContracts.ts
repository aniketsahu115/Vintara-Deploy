import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { CONTRACTS } from "@/config/contracts";
import { parseEther, formatEther } from "viem";

// Contract ABIs (simplified for now - you'll need to add the full ABIs)
const MOCK_TOKEN_ABI = [
  {
    inputs: [
      { internalType: "string", name: "name", type: "string" },
      { internalType: "string", name: "symbol", type: "string" },
      { internalType: "uint256", name: "initialSupply", type: "uint256" },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "balanceOf",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const YIELD_VAULT_ABI = [
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "deposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "amount", type: "uint256" }],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getUserBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalDeposits",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

const LENDING_PROTOCOL_ABI = [
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "borrowToken", type: "address" },
    ],
    name: "borrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "address", name: "borrowToken", type: "address" },
    ],
    name: "repay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getUserBorrowBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getUserCollateralBalance",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

const CHAINLINK_ORACLE_ABI = [
  {
    inputs: [],
    name: "getRBTCPrice",
    outputs: [{ internalType: "int256", name: "price", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getUSDTPrice",
    outputs: [{ internalType: "int256", name: "price", type: "int256" }],
    stateMutability: "view",
    type: "function",
  },
] as const;

// Hook for MockToken interactions
export function useMockToken() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const { data: balance } = useReadContract({
    address: CONTRACTS.mockToken as `0x${string}`,
    abi: MOCK_TOKEN_ABI,
    functionName: "balanceOf",
    args: address ? [address] : undefined,
  });

  const { data: totalSupply } = useReadContract({
    address: CONTRACTS.mockToken as `0x${string}`,
    abi: MOCK_TOKEN_ABI,
    functionName: "totalSupply",
  });

  const transfer = async (to: string, amount: string) => {
    return writeContract({
      address: CONTRACTS.mockToken as `0x${string}`,
      abi: MOCK_TOKEN_ABI,
      functionName: "transfer",
      args: [to as `0x${string}`, parseEther(amount)],
    });
  };

  return {
    balance: balance ? formatEther(balance) : "0",
    totalSupply: totalSupply ? formatEther(totalSupply) : "0",
    transfer,
  };
}

// Hook for YieldVault interactions
export function useYieldVault() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const { data: userBalance } = useReadContract({
    address: CONTRACTS.yieldVault as `0x${string}`,
    abi: YIELD_VAULT_ABI,
    functionName: "getUserBalance",
    args: address ? [address] : undefined,
  });

  const { data: totalDeposits } = useReadContract({
    address: CONTRACTS.yieldVault as `0x${string}`,
    abi: YIELD_VAULT_ABI,
    functionName: "getTotalDeposits",
  });

  const deposit = async (amount: string) => {
    return writeContract({
      address: CONTRACTS.yieldVault as `0x${string}`,
      abi: YIELD_VAULT_ABI,
      functionName: "deposit",
      args: [parseEther(amount)],
    });
  };

  const withdraw = async (amount: string) => {
    return writeContract({
      address: CONTRACTS.yieldVault as `0x${string}`,
      abi: YIELD_VAULT_ABI,
      functionName: "withdraw",
      args: [parseEther(amount)],
    });
  };

  return {
    userBalance: userBalance ? formatEther(userBalance) : "0",
    totalDeposits: totalDeposits ? formatEther(totalDeposits) : "0",
    deposit,
    withdraw,
  };
}

// Hook for LendingProtocol interactions
export function useLendingProtocol() {
  const { address } = useAccount();
  const { writeContract } = useWriteContract();

  const { data: borrowBalance } = useReadContract({
    address: CONTRACTS.lendingProtocol as `0x${string}`,
    abi: LENDING_PROTOCOL_ABI,
    functionName: "getUserBorrowBalance",
    args: address ? [address] : undefined,
  });

  const { data: collateralBalance } = useReadContract({
    address: CONTRACTS.lendingProtocol as `0x${string}`,
    abi: LENDING_PROTOCOL_ABI,
    functionName: "getUserCollateralBalance",
    args: address ? [address] : undefined,
  });

  const borrow = async (amount: string, borrowToken: string) => {
    return writeContract({
      address: CONTRACTS.lendingProtocol as `0x${string}`,
      abi: LENDING_PROTOCOL_ABI,
      functionName: "borrow",
      args: [parseEther(amount), borrowToken as `0x${string}`],
    });
  };

  const repay = async (amount: string, borrowToken: string) => {
    return writeContract({
      address: CONTRACTS.lendingProtocol as `0x${string}`,
      abi: LENDING_PROTOCOL_ABI,
      functionName: "repay",
      args: [parseEther(amount), borrowToken as `0x${string}`],
    });
  };

  return {
    borrowBalance: borrowBalance ? formatEther(borrowBalance) : "0",
    collateralBalance: collateralBalance ? formatEther(collateralBalance) : "0",
    borrow,
    repay,
  };
}

// Hook for ChainlinkOracle interactions
export function useChainlinkOracle() {
  const { data: rbtcPrice } = useReadContract({
    address: CONTRACTS.chainlinkOracle as `0x${string}`,
    abi: CHAINLINK_ORACLE_ABI,
    functionName: "getRBTCPrice",
  });

  const { data: usdtPrice } = useReadContract({
    address: CONTRACTS.chainlinkOracle as `0x${string}`,
    abi: CHAINLINK_ORACLE_ABI,
    functionName: "getUSDTPrice",
  });

  return {
    rbtcPrice: rbtcPrice ? Number(rbtcPrice) / 1e8 : 0, // Chainlink prices are in 8 decimals
    usdtPrice: usdtPrice ? Number(usdtPrice) / 1e8 : 0,
  };
}
