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

type ButtonBaseAddonType = HTMLAttributes<HTMLElement> & {
	children: (props: any) => any;
};

export type buttonColor =
	| "primary"
	| "secondary"
	| "tertiary"
	| "pinky"
	| "blinky";

export interface IButtonThemeBaseProps {
	color?: buttonColor;
	active?: boolean;
	activeAlt?: boolean;
	disabled?: boolean;
}

export interface IButtonBaseProps extends IButtonThemeBaseProps {
	small?: boolean;
	width?: "wide" | "xWide" | "fitWidth";
	large?: boolean;
}

export type IButtonProps = IButtonBaseProps &
	ButtonHTMLAttributes<HTMLButtonElement>;
export type IInputButtonProps = IButtonBaseProps & {
	type?: "button" | "submit";
} & InputHTMLAttributes<HTMLInputElement>;

export const ButtonThemeBase: React.SFC<
	IButtonThemeBaseProps & ButtonBaseAddonType
> = ({
	color,
	active,
	activeAlt,
	disabled,
	className,
	children,
	...otherAttributes
}) => {
	const colorClass = color ? classes[color] : "";
	const parentClassName = className ? className : "";
	className = classNames([
		classes.buttonTheme,
		colorClass,
		parentClassName,
		{
			[classes.disabled]: disabled,
			[classes.ghost]: color === "pinky" || color === "blinky",
			[classes.active]: active,
			[classes.activeAlt]: activeAlt,
		},
	]);
	return children({ ...otherAttributes, className, disabled });
};

const _ButtonBase: React.SFC<IButtonBaseProps & ButtonBaseAddonType> = ({
	small,
	width,
	large,
	children,
	className,
	...otherAttributes
}) => {
	const widthClass = width ? classes[width] : "";
	const parentClassName = className ? className : "";
	className = classNames([
		classes.buttonLayout,
		parentClassName,
		{
			[classes.small]: small,
			[widthClass]: !small && !!width,
			[classes.large]: !small && !!large,
		},
	]);
	return (
		<ButtonThemeBase {...otherAttributes} className={className}>
			{props => children(props)}
		</ButtonThemeBase>
	);

	//
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
