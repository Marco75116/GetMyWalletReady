import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useWalletClient } from "@/lib/stores/walletClient.store";
import { useTokensSelection } from "@/lib/stores/tokensSelection.store";
import { addTokenToWallet } from "@/lib/helpers/global.helper";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	BlockchainIDs,
	blockchains,
} from "@/lib/constants/blockchain.constant";
import { config } from "@/lib/clients/wagmi/config";
import { switchChain } from "@wagmi/core";

const TopTable = () => {
	const { walletClient } = useWalletClient();
	const { tokensSelection } = useTokensSelection();

	return (
		<div className="flex items-center py-4 pr-1 gap-8 justify-between">
			<div className="flex gap-8">
				<Input placeholder="Search a token..." className=" max-w-[10rem]" />
				<Select
					defaultValue={"1"}
					onValueChange={(value) => {
						switchChain(config, { chainId: Number(value) as BlockchainIDs });
					}}
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue />
					</SelectTrigger>
					<SelectContent>
						{blockchains.map((blockchain) => {
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
