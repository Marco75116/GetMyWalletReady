import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

const Links = () => {
	return (
		<div className="flex gap-2">
			<Button variant={"outline"}>
				<Link
					href="https://github.com/Marco75116/GetMyWalletReady"
					target="_blank"
				>
					<Github />
				</Link>
			</Button>
			<Button variant={"outline"}>
				<Link
					href="https://www.linkedin.com/in/marc-antoine-ourradour/"
					target="_blank"
				>
					<Linkedin />
				</Link>
			</Button>
		</div>
	);
};

export default Links;
