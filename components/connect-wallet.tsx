"use client";
import { useAccount, useDisconnect } from "wagmi";
import { WalletOptions } from "./wallet-options";
import { Button } from "./ui/button";

export function Wallet() {
	const { isConnected } = useAccount();
	const { disconnect } = useDisconnect();
	if (!isConnected) return <WalletOptions />;

	return (
		<Button
			variant={"outline"}
			onClick={() => {
				disconnect();
			}}
		>
			Disconnect
		</Button>
	);
}
