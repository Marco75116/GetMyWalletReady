"use client";
import React, { useEffect } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useAccount } from "wagmi";
import TableTokens from "./table-tokens";
import { watchAccount } from "@wagmi/core";
import { config } from "@/lib/clients/wagmi/config";
import { useWalletClient } from "@/lib/stores/walletClient.store";
import { getWalletClient } from "@wagmi/core";

const AddTokens = () => {
	const { address } = useAccount();
	const { setWalletClient } = useWalletClient();
	watchAccount(config, {
		onChange(data) {
			getWalletClient(config).then((walletclient) => {
				setWalletClient(walletclient);
			});
		},
	});

	return (
		<div className="container mx-auto py-10">
			<Card>
				<CardHeader>
					<CardTitle>
						ERC-20 - Add multiple tokens to your wallet in one click.
					</CardTitle>
					<CardDescription className="flex flex-row items-center gap-2 ">
						{address}
						<Link
							href={`https://optimistic.etherscan.io/address/${address}`}
							target="_blank"
						>
							<ArrowUpRight />
						</Link>
					</CardDescription>
				</CardHeader>
				<CardContent>
					<TableTokens />
				</CardContent>
			</Card>
		</div>
	);
};

export default AddTokens;
