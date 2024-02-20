"use client";
import React, { useMemo } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useAccount, useChainId, useSwitchChain } from "wagmi";
import TableTokens from "./table-tokens";

const AddTokens = () => {
	const { address, isConnected } = useAccount();
	const { chains } = useSwitchChain();
	const chainId = useChainId();

	const urlExplorer = useMemo(() => {
		const chain = chains.find((chain) => chain.id === chainId);
		if (isConnected) {
			return `${chain?.blockExplorers?.default.url}/address/${address}`;
		}
		return chain?.blockExplorers?.default.url || "";
	}, [chainId, chains, address, isConnected]);

	return (
		<div className="py-10">
			<Card>
				<CardHeader>
					<CardTitle>
						ERC-20 - Add multiple tokens to your wallet in one click.
					</CardTitle>

					<CardDescription className="flex flex-row items-center gap-2 ">
						{address}
						<Link href={urlExplorer} target="_blank">
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
