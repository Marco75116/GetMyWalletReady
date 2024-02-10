"use client";
import { useAccount } from "wagmi";
import { Account } from "./accounts";
import { WalletOptions } from "./wallet-options";

export function ConnectWallet() {
	const { isConnected } = useAccount();
	if (isConnected) return <Account />;
	return <WalletOptions />;
}
