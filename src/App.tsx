import * as React from "react";
import * as styles from "./App.scss";

import logo from "./logo.svg";

class App extends React.Component {
	public render() {
		return (
			<div className={styles.app}>
				<header className={styles.appHeader}>
					<img src={logo} className={styles.appLogo} alt="logo" />
					<h1 className={styles.appTitle}>YO! Welcome to React</h1>
				</header>
				<p className={styles.appIntro}>
					To get started, edit <code>src/App.tsx</code> and save to reload.
				</p>
			</div>
		);
	}
}

export default App;
