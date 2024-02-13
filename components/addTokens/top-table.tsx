"use client";
import React, { useMemo } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useTokensSelection } from "@/lib/stores/tokensSelection.store";
import { addTokenToWallet } from "@/lib/helpers/global.helper";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useSwitchChain, useWalletClient, useChainId } from "wagmi";

const TopTable = () => {
	const { data: walletClient } = useWalletClient();
	const { tokensSelection, setTokensSelection } = useTokensSelection();
	const { chains, switchChain } = useSwitchChain({
		mutation: {
			onSuccess(data) {
				setTokensSelection([]);
			},
		},
	});
	const chainId = useChainId();

	return (
		<div className="flex items-center py-4 pr-1 gap-8 justify-between">
			<div className="flex gap-8">
				<Input placeholder="Search a token..." className=" max-w-[10rem]" />
				<Select
					value={chainId.toString()}
					onValueChange={(value) => {
						switchChain({ chainId: Number(value) });
					}}
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{chains.map((blockchain) => {
							return (
								<SelectItem
									value={blockchain.id.toString()}
									key={blockchain.id}
								>
									{blockchain.name}
								</SelectItem>
							);
						})}
					</SelectContent>
				</Select>
			</div>

			<Button
				onClick={() => {
					tokensSelection.map((token) => {
						addTokenToWallet(token, walletClient);
					});
				}}
			>
				Add
			</Button>
		</div>
	);
};

export default TopTable;
