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
import useWindow from "@/lib/hooks/useWindow";
import { Button } from "../ui/button";

const AddTokens = () => {
	const { address, isConnected } = useAccount();
	const { chains } = useSwitchChain();
	const chainId = useChainId();
	const windowWidthPx = useWindow();


	const urlExplorer = useMemo(() => {
		const chain = chains.find((chain) => chain.id === chainId);
		if (isConnected) {
			return `${chain?.blockExplorers?.default.url}/address/${address}`;
		}
		return chain?.blockExplorers?.default.url || "";
	}, [chainId, chains, address, isConnected]);

	const addressDisplayed = useMemo(() => {
		if (windowWidthPx !== undefined && windowWidthPx > 600) {
			return address;
		}
		return address && `${address.slice(0, 4)}...${address.slice(-6)}`;
	}, [address, windowWidthPx]);

	return (
		<div className="py-10">
			<Card>
				<div className="flex flex-col justify-between sm:flex-row">
					<CardHeader>
						<CardTitle>
							ERC-20 - Add multiple tokens to your wallet in one click.
						</CardTitle>

						<CardDescription className="flex flex-row items-center gap-2 ">
							{addressDisplayed}
							<Link href={urlExplorer} target="_blank">
								<ArrowUpRight />
							</Link>
						</CardDescription>
					</CardHeader>
					{chainId === 1444673419 && <Link href={"https://www.sfuelstation.com/"} target="_blank" className="m-6">
						<Button variant={"outline"}>Faucet</Button>
					</Link>}
				</div>
				<CardContent>
					<TableTokens />
				</CardContent>
			</Card>
		</div>
	);
};

export default AddTokens;
