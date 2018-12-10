import * as React from "react";
import * as styles from "./App.scss";

import logo from "./logo.svg";
import { Button, buttonColor, IButtonBaseProps } from "./Button/Button";

class App extends React.Component {
	colors: Array<{ color: buttonColor; colorName: string }> = [
		{ color: "primary", colorName: "Primary" },
		{ color: "secondary", colorName: "Secondary" },
		{ color: "tertiary", colorName: "Tertiary" },
		{ color: "pinky", colorName: "Pinky" },
		{ color: "blinky", colorName: "Blinky" },
	];
	otherSettings: Array<Partial<IButtonBaseProps>> = [
		{},
		{ active: true },
		{ disabled: true },
	];
	public render() {
		return (
			<div className={styles.app}>
				<header className={styles.appHeader}>
					<img src={logo} className={styles.appLogo} alt="logo" />
					<h1 className={styles.appTitle}>Welcome to Eddies Buttons React</h1>
				</header>
				<div className={styles.appIntro}>
					{this.otherSettings.map(settings => (
						<div className={styles.buttonRow}>
							{this.colors.map(({ color, colorName }) => (
								<div className={styles.buttonContainer} key={colorName}>
									<Button color={color} {...settings}>
										{colorName}
									</Button>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default App;
