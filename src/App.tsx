import * as React from "react";
import { TwitterPicker } from "react-color";

import * as styles from "./App.scss";
import logo from "./logo.svg";
import { Button, buttonColor, IButtonBaseProps } from "./Button/Button";

const pickerColors = [
	"#000",
	"#333",
	"#666",
	"#9A9A9A",
	"#CDCDCD",
	"#E7E7E7",
	"#F0F4F8",
	"#FFF",
	"#d9e3ed",
	"#334455",
	"#1a5888",
	"#007ab8",
	"#990000",
	"#db8749",
	"#ff9933",
	"#769e2d",
	"#0a92ca",
	"#e54c3c",
	"#e5f3d8",
	"#f2a99b",
];

interface ColorName {
	color: buttonColor;
	colorName: string;
}

interface AppState {
	color: string;
}

class App extends React.Component<{}, AppState> {
	constructor(props, context) {
		super(props, context);
		this.state = {
			color: "#FFF",
		};
	}
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
			<div className={styles.app} style={{ backgroundColor: this.state.color }}>
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
									<Button activeAlt>Button</Button>
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
					<p style={{ textAlign: "left" }}>Select a background color:</p>
					<TwitterPicker
						color={this.state.color}
						colors={pickerColors}
						onChangeComplete={this.handleOnChangeComplete}
						triangle="hide"
						width="315px"
					/>
				</div>
			</div>
		);
	}
	handleOnChangeComplete = ({ hex }) => this.setState({ color: hex });
}

export default App;
