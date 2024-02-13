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

const AddTokens = () => {
	const { address } = useAccount();

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
