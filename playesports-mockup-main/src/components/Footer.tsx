import logo from "../../public/Logo_PlayeSport_WHITE.png";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiscord, faXTwitter, faInstagram, faTelegramPlane} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
	return <div className="footer-component">
		<div className="wrapper">
			<div className="column">
				<Image className="logo" src={logo} alt="" height={64} />
				<div className="socials">
					<FontAwesomeIcon icon={faDiscord} />
					<FontAwesomeIcon icon={faXTwitter} />
					<FontAwesomeIcon icon={faInstagram} />
					<FontAwesomeIcon icon={faTelegramPlane} />
				</div>
			</div>
			<div className="column">
				<div className="links">
					<div className="link">Games</div>
					<div className="link">Marketplace</div>
					<div className="link">Whitepaper</div>
				</div>
			</div>
			<div className="column">
				<div className="links">
					<div className="link">Work with us</div>
					<div className="link">Terms of Service</div>
					<div className="link">Privacy Policy</div>
				</div>
			</div>
		</div>
	</div>
}
