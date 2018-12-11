import classNames from "classnames";
import * as React from "react";
import {
	ButtonHTMLAttributes,
	HTMLAttributes,
	InputHTMLAttributes,
} from "react";

const classes: {
	[key: string]: string;
} = require("./button.scss");

// import * as classes from "./button.scss";

export type buttonColor =
	| "primary"
	| "secondary"
	| "tertiary"
	| "pinky"
	| "blinky";

export interface IButtonBaseProps {
	color?: buttonColor;
	ghost?: boolean;
	active?: boolean;
	activeAlt?: boolean;
	disabled?: boolean;
	small?: boolean;
	width?: "wide" | "xWide" | "fitWidth";
	large?: boolean;
}

export type IButtonProps = IButtonBaseProps &
	ButtonHTMLAttributes<HTMLButtonElement>;
export type IInputButtonProps = IButtonBaseProps & {
	type?: "button" | "submit";
} & InputHTMLAttributes<HTMLInputElement>;

const _ButtonBase: React.SFC<
	IButtonBaseProps &
		HTMLAttributes<HTMLElement> & { children: (props: any) => any }
> = ({
	color,
	active,
	activeAlt,
	disabled,
	small,
	width,
	large,
	className,
	children,
	...otherAttributes
}) => {
	const colorClass = color ? classes[color] : "";
	const widthClass = width ? classes[width] : "";
	const parentClassName = className ? className : "";
	className = classNames([
		classes.button,
		colorClass,
		parentClassName,
		{
			[classes.disabled]: disabled,
			[classes.ghost]: color === "pinky" || color === "blinky",
			[classes.small]: small,
			[widthClass]: !small && !!width,
			[classes.large]: !small && !!large,
			[classes.active]: active,
			[classes.activeAlt]: activeAlt,
		},
	]);
	return children({ ...otherAttributes, className, disabled });
};

export const ButtonBase = _ButtonBase;

export const Button = (props: IButtonProps) => {
	const { children, ...otherAttributes } = props;
	return (
		<ButtonBase {...otherAttributes}>
			{props => <button {...props}>{children}</button>}
		</ButtonBase>
	);
};

export const InputButton = (props: IInputButtonProps) => {
	return (
		<ButtonBase {...props}>
			{props => <input type="button" {...props} />}
		</ButtonBase>
	);
};
