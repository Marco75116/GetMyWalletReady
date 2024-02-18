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
import { useTokensSearch } from "@/lib/stores/tokenSearch.store";
import { Plus } from "lucide-react";
import { useTokensStableCoin } from "@/lib/stores/tokenStableCoin.store";

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
	const { setTokensSearch } = useTokensSearch();
	const { tokensStableCoin, setTokensStableCoin } = useTokensStableCoin();

	return (
		<div className="flex items-center py-4 pr-1 gap-8 justify-between">
			<div className="flex gap-8">
				<Input
					placeholder="Search a token..."
					onChange={(e) => {
						setTokensSearch(e.target.value);
					}}
					className=" max-w-[10rem]"
				/>
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

				<Button
					className={` flex gap-2 ${!tokensStableCoin && " opacity-50"} `}
					onClick={() => {
						setTokensStableCoin();
					}}
				>
					Stablecoins
				</Button>
			</div>

			<Button
				className=" flex gap-2"
				onClick={() => {
					tokensSelection.map((token) => {
						addTokenToWallet(token, walletClient);
					});
				}}
				disabled={tokensSelection.length === 0}
			>
				Add Selection <Plus />
			</Button>
		</div>
	);
};

export default TopTable;
