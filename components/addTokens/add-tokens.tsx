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
	const { address } = useAccount();
	const { chains } = useSwitchChain();
	const chainId = useChainId();

	const urlExplorer = useMemo(() => {
		const chain = chains.find((chain) => chain.id === chainId);

		return `${chain?.blockExplorers?.default.url}/address/${address}`;
	}, [chainId, chains, address]);

	return (
		<div className="container mx-auto py-10">
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
