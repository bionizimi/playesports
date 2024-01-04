import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {

	render() {
		return <Html lang="en">
			<Head>
				<meta charSet="UTF-8"/>
				<title>Mockup</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<meta name="robots" content="noindex" />
				<meta name="theme-color" content="#2e4482" />
				<link rel="icon" type="image/png" href="/icon.png" />
				<link rel="apple-touch-icon" href="/icon.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto&family=Work+Sans&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	}

}
