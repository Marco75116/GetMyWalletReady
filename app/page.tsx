import AddTokens from "@/components/addTokens/add-tokens";
import { ConnectWallet } from "@/components/connect-wallet";

export default function Home() {
	return (
		<div>
			<ConnectWallet />
			<AddTokens />
		</div>
	);
}
