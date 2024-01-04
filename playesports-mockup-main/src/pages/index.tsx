import Image, {StaticImageData} from "next/image";
import {games, nfts} from "../utils/static";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

export default function Index() {
	return <div className="index-component">
		<div className="promo">
			<img src="/promo.png" alt="" width={1920} />
		</div>
		<div className="wrapper">
			<div className="game">
				<div className="title">{games[0].name}</div>
				<div className="description">{games[0].subtitle}</div>
				<div className="buttons">
					<Link className="button with-icon" href={"/game/" + games[0].id}>
						<FontAwesomeIcon icon={faGamepad} />
						Play Now
					</Link>
				</div>
				<div className="video">
					<iframe src="https://www.youtube.com/embed/zrZtoXkRMDg" allowFullScreen />
				</div>
			</div>
			<Carousel title="Discover Games" path="/game/" entries={games} />
			<Carousel title="NFTs" path="/nft/" entries={nfts} />
		</div>
	</div>
}

interface ICarouselEntry {
	id: string,
	name: string,
	image: string | StaticImageData
}

function Carousel({ title, path, entries }: { title: string, path: string, entries: ICarouselEntry[] }) {
	return <div className="carousel">
		<div className="title">{title}</div>
		<div className="entries">
			{entries.map(({ id, name, image }) => <Link key={id} className="entry" href={path + id}>
				<Image src={image} alt="" width={256} />
				<div className="name">{name}</div>
			</Link>)}
		</div>
	</div>
}

function Game() {
	return <div className="game-info">

	</div>
}
