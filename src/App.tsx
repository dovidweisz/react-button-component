import * as React from "react";
import * as styles from "./App.scss";

import logo from "./logo.svg";
import { Button, buttonColor, IButtonBaseProps } from "./Button/Button";

interface ColorName {
	color: buttonColor;
	colorName: string;
}

class App extends React.Component {
	regColors: Array<ColorName> = [
		{ color: "primary", colorName: "Primary" },
		{ color: "secondary", colorName: "Secondary" },
		{ color: "tertiary", colorName: "Tertiary" },
	];
	ghostColors: Array<ColorName> = [
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
					<table>
						<thead>
							<tr>
								<td />
								<td>Default</td>
								<td>Active / Selected</td>
								<td>Disabled</td>
							</tr>
						</thead>
						<tbody>
							{this.regColors.map(({ color, colorName }) => (
								<tr key={color}>
									<td className={styles.rowTitle}>{colorName}</td>
									{this.otherSettings.map((settings, i) => (
										<td className={styles.buttonContainer} key={i}>
											<Button color={color} {...settings}>
												Button
											</Button>
										</td>
									))}
								</tr>
							))}
							<tr>
								<td colSpan={2}>Active / Selected alt</td>
								<td className={styles.buttonContainer}>
									<Button>Button</Button>
								</td>
							</tr>
							{this.ghostColors.map(({ color, colorName }) => (
								<tr key={color}>
									<td className={styles.rowTitle}>{colorName}</td>
									{this.otherSettings.map((settings, i) => (
										<td className={styles.buttonContainer} key={i}>
											<Button color={color} {...settings}>
												Button
											</Button>
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default App;
