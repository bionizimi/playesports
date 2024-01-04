import {useRouter} from "next/router";
import {nfts} from "../../utils/static";
import Image from "next/image";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoneyCheck, faBell} from "@fortawesome/free-solid-svg-icons";

export default function NFT() {

	const router = useRouter();

	if(!router.isReady) return <></>

	const nft = nfts.find(v => v.id === router.query.id) || nfts[0];

	return <div className="nft-component">
		<div className="wrapper">
			<div className="header">
				<div className="image">
					<Image src={nft.image} alt="" width={512} />
				</div>
				<div className="about">
					<div className="name">{nft.name}</div>
					<div className="description">Punk pigeons gain passive skills during races due to their tough appearance</div>
					<div className="price">
						<div className="label">Current Price</div>
						<div className="value">$861.12</div>
					</div>
					<div className="buttons">
						<div className="button with-icon">
							<FontAwesomeIcon icon={faMoneyCheck} />
							Buy Now
						</div>
						<div className="button with-icon secondary">
							<FontAwesomeIcon icon={faBell} />
							Make Offer
						</div>
					</div>
				</div>
			</div>
			<div className="attributes">
				<Attribute name="Leather Jacket" value="+12% HP" />
				<Attribute name="Color" value="None" />
				<Attribute name="Background" value="None" />
				<Attribute name="Sunglasses" value="+5% Speed" />
				<Attribute name="Crest" value="+15% Acceleration" />
			</div>
		</div>
	</div>
}

function Attribute({ name, value }: { name: string, value: string }) {
	return <div className="attribute">
		<div className="name">{name}</div>
		<div className="value">{value}</div>
	</div>
}
