"use client";
import React from "react";
import { switchChain } from "@wagmi/core";
import { Button } from "./ui/button";
import { config } from "@/lib/clients/wagmi/config";
import { base } from "viem/chains";

const SwitchChain = () => {
	return (
		<div>
			<Button
				onClick={() => {
					switchChain(config, { chainId: base.id });
				}}
			>
				switch chain
			</Button>
		</div>
	);
};

export default SwitchChain;
