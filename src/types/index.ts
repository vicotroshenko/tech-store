import { ReactNode } from "react";

export type OnlyChildrenProps = {
	children: ReactNode;
}


export type Theme = {
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


export type CardItemElemtnts = {
	id: number;
	title: string,
	price: number,
	quantity: number,
	total: number,
	discountPercentage: number,
	discountedPrice: number,
	thumbnail: string;
}