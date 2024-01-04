import {AppProps} from "next/app";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "../styles/_.scss";
import {WindowContainer} from "../contexts/window";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MyApp({ Component, pageProps }: AppProps) {

	return <>
		<WindowContainer.Provider>
			<Component {...pageProps} />
			<Footer />
			<Navbar />
		</WindowContainer.Provider>
	</>
}


