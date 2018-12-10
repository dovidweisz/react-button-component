import * as React from "react";
import * as styles from "./App.scss";

import logo from "./logo.svg";
import { Button } from "./Button/Button";

class App extends React.Component {
	public render() {
		return (
			<div className={styles.app}>
				<header className={styles.appHeader}>
					<img src={logo} className={styles.appLogo} alt="logo" />
					<h1 className={styles.appTitle}>YO! Welcome to React</h1>
				</header>
				<div className={styles.appIntro}>
					<div className={styles.buttonContainer}>
						<Button color="primary">Primary</Button>
					</div>
					<div className={styles.buttonContainer}>
						<Button color="primaryAlt">primaryAlt</Button>
					</div>
					<div className={styles.buttonContainer}>
						<Button color="secondary">secondary</Button>
					</div>
					<div className={styles.buttonContainer}>
						<Button color="tertiary">tertiary</Button>
					</div>
					<div className={styles.buttonContainer}>
						<Button color="tertiaryAlt">tertiaryAlt</Button>
					</div>
					<div className={styles.buttonContainer}>
						<Button>My first Button</Button>
					</div>
					<div className={styles.buttonContainer}>
						<Button>My first Button</Button>
					</div>
					<div className={styles.buttonContainer}>
						<Button>My first Button</Button>
					</div>
					<div className={styles.buttonContainer}>
						<Button>My first Button</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
