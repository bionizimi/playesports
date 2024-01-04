import logo from "../../public/Logo_PlayeSport_WHITE.png";
import Image from "next/image";
import {useEffect, useState} from "react";
import Link from "next/link";

export default function Navbar() {

	const [ scrolled, setScrolled ] = useState(false);

	useEffect(() => {
		const scroll = () => setScrolled(document.documentElement.scrollTop > 0);
		scroll();
		document.addEventListener("scroll", scroll);
		return () => document.removeEventListener("scroll", scroll);
	}, []);

	return <div className={"navbar-component" + (scrolled ? " scrolled" : "")}>
		<div className="wrapper">
			<Link href="/" className="logo">
				<Image src={logo} alt="" height={48} />
			</Link>
			<div className="link">Games</div>
			<div className="link">Marketplace</div>
			<div className="link">Whitepaper</div>
			<div className="link">Work with us</div>
			<div className="spacer" />
			<div className="buttons">
				<div className="button">Connect Wallet</div>
			</div>
		</div>
	</div>
}
