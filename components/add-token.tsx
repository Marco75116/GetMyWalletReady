"use client";
import React from "react";
import { getWalletClient } from "@wagmi/core";
import { config } from "@/lib/clients/wagmi/config";
import { Button } from "./ui/button";
import { mainnet } from "viem/chains";

const AddToken = () => {
	return (
		<div>
			<Button
				onClick={async () => {
					// const client = await getWalletClient(config, {
					// 	account: "0x01738387092E007CcB8B5a73Fac2a9BA23cf91d3",
					// 	chainId: mainnet.id,
					// });

					// await client.watchAsset({
					// 	type: "ERC20",
					// 	options: {
					// 		address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
					// 		decimals: 18,
					// 		symbol: "WETH",
					// 	},
					// });
					const clientTwo = await getWalletClient(config, {
						account: "0x98cEA6ed2CF1047B08942cDEeD525DC7eAe2E84e",
						chainId: mainnet.id,
					});

					clientTwo.watchAsset({
						type: "ERC20",
						options: {
							address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
							decimals: 18,
							symbol: "WETH",
						},
					});

					clientTwo.watchAsset({
						type: "ERC20",
						options: {
							address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
							decimals: 18,
							symbol: "DAI",
						},
					});
					clientTwo.watchAsset({
						type: "ERC20",
						options: {
							address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
							decimals: 6,
							symbol: "USDC",
						},
					});
				}}
			>
				add token
			</Button>
		</div>
	);
};

export default AddToken;
