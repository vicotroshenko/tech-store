import { ReactNode } from "react";

export interface OnlyChildrenProps {
	children: ReactNode;
}

export interface Theme {
	common: {
		[x: string]: string;
	},
	store: {
		[x: string]: string;
	},
	buttons:{
		[x: string]: string;
	},
	input: {
		[x: string]: string;
	},
	media: {
		[x: string]: string;
	};
}

export interface OnlyChildrenProp {
	children: ReactNode;
}

export interface CardItemElemtnts {
	id: number;
	title: string,
	price: number,
	quantity: number,
	total: number,
	discountPercentage: number,
	discountedPrice: number,
	thumbnail: string;
}

export interface IAboutUsCardProps extends OnlyChildrenProp{
	placement: "left" | "right";
	image: string;
	alt: string;
}

export interface ISearchActiveProps {
	searchActive?: boolean;
}

export interface IAmountGoodsProps {
	amount?: number;
}

export interface IAvailabilityProps {
	available: boolean;
}