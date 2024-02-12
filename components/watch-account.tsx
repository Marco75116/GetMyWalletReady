"use client";
import React from "react";
import { watchAccount } from "@wagmi/core";
import { config } from "@/lib/clients/wagmi/config";
import { Button } from "./ui/button";

const WatchAccount = () => {
	const unwatch = watchAccount(config, {
		onChange(data) {},
	});
	return (
		<div>
			<Button
				onClick={() => {
					// unwatch();
				}}
			>
				Change Account
			</Button>
		</div>
	);
};

export default WatchAccount;
