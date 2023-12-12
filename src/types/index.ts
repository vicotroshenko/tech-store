import { ReactNode } from "react";

export type OnlyChildrenProps = {
	children: ReactNode;
}

export type Media = {
	mobile: number;
	tablet: number;
	desctop: number;
};

export type Colors = {
	black_text: string;
	white_text: string;
	button_color: string;
	link: string;
	footer_subtitle: string;
	item_red: string;
	clear_btn: string;
	in_stock_color: string;
	star_btn_color: string;
	bg_primary: string;
	bg_primary_gradient: string;
	bg_second: string;
	bg_dark: string;
};

