import AddToken from "@/components/add-token";
import AddTokens from "@/components/addTokens/add-tokens";
import { ConnectWallet } from "@/components/connect-wallet";
import SwitchChain from "@/components/switch-chain";
import WatchAccount from "@/components/watch-account";

export default function Home() {
	return (
		<div>
			<AddTokens />
		</div>
	);
}
