import * as React from "react";
import { Connector, useConnect } from "wagmi";
import { Button } from "./ui/button";

export function WalletOptions() {
	const { connectors, connect } = useConnect();

	return connectors.map((connector) => (
		<Button key={connector.uid} onClick={() => connect({ connector })}>
			{connector.name}
		</Button>
	));
}
