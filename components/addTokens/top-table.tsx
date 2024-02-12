import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useWalletClient } from "@/lib/stores/walletClient.store";
import { useTokensSelection } from "@/lib/stores/tokensSelection.store";
import { addTokenToWallet } from "@/lib/helpers/global.helper";

const TopTable = () => {
	const { walletClient } = useWalletClient();
	const { tokensSelection } = useTokensSelection();

	return (
		<div className="flex items-center py-4 pr-1 gap-8 justify-between">
			<Input placeholder="Search a token..." className=" max-w-[10rem]" />

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
