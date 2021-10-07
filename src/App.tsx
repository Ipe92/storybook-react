import React from "react";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

const theme = {
	colors: {
		header: "#acbbfe",
		body: "#fff",
		footer: "#003333",
	},
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>
					<h1>Hello World</h1>
				</Container>
			</>
		</ThemeProvider>
	);
}

export default App;
