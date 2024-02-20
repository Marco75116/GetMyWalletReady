import * as React from "react";
import { useConnect } from "wagmi";
import { Button } from "./ui/button";
import Image from "next/image";
import metamaskLogo from "../lib/assets/wallets/metamask.svg";
import walletconnectLogo from "../lib/assets/wallets/walletconnect.svg";

export function WalletOptions() {
	const { connectors, connect } = useConnect();

	return (
		<div className="flex gap-2">
			{connectors.map((connector) => (
				<Button
					className={`flex gap-2  ${
						connector.name === "MetaMask" && "animate-bounce"
					} `}
					variant={"secondary"}
					key={connector.uid}
					onClick={() => connect({ connector })}
				>
					{connector.name === "MetaMask" ? (
						<Image
							src={metamaskLogo}
							alt="logo metamask"
							height={20}
							width={20}
						/>
					) : connector.name === "WalletConnect" ? (
						<Image
							src={walletconnectLogo}
							alt="logo metamask"
							height={20}
							width={20}
						/>
					) : (
						""
					)}
					{connector.name}
				</Button>
			))}
		</div>
	);
}
