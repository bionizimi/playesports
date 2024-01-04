import {games} from "../../utils/static";
import Link from "next/link";
import {useRouter} from "next/router";
import {PropsWithChildren} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGamepad} from "@fortawesome/free-solid-svg-icons";

export default function Game() {

	const router = useRouter();

	if(!router.isReady) return <></>

	const game = games.find(game => game.id === router.query.id) || games[0];

	return <div className="index-component">
		<div className="promo">
			<img src="/promo.png" alt="" width={1920} />
		</div>
		<div className="wrapper">
			<div className="game">
				<div className="title">{game.name}</div>
				<div className="description">{game.subtitle}</div>
				<div className="video">
					<iframe src="https://www.youtube.com/embed/OsxD0IA0W9M" allowFullScreen />
				</div>
				<div className="buttons">
					<div className="button with-icon">
						<FontAwesomeIcon icon={faGamepad} />
						Play Now
					</div>
				</div>
			</div>
			<div className="about">
				<div className="title">About</div>
				<div className="description">{game.description}</div>
				<div className="values">
					<Value label="Studio">UNIKEY</Value>
					<Value label="Platform">Web</Value>
					<Value label="Status">Alpha</Value>
					<Value label="Network">TBA</Value>
				</div>
			</div>
		</div>
	</div>
}

function Value({ label, children }: { label: string } & PropsWithChildren) {
	return <div className="key-value">
		<div className="key">{label}</div>
		<div className="value">{children}</div>
	</div>
}
