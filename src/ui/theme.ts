import { Theme } from "../types";

const theme: Theme = {
	common: {
		text_primary: "#000",
		text_secondary: "#FFF",
		text_up_menu: "#ACACAC",
		text_summary_link: "#272560",
		text_contact_link: "#01A4FF",
		text_footer_subtitle: "rgba(255, 255, 255, 0.50)",
		bg_primary: "#020203",
		bg_primary_gradient: "linear-gradient(90deg, #010101 0%, #0E0F10 68.23%, rgba(20, 21, 23, 0.00) 100%)",
		bg_second: "#FFFFFF",
		bg_third: "#F5F7FF",
		bg_fifth: "#030303",
		text_price: "#666",
		review_color: "#A2A6B0",
	},
	store: {
		available: "#78A962",
		none: "#C94D3F",
	},
	buttons:{
		primery: "#0156FF",
		secondary: "#000",
		btn_pay: "#FFB800",
		disable: "#A2A6B0"
	},
	input: {
		primery: "#A2A6B0",
		secondary: "#FFF",
		bg_color: "#F5F7FF"
	},
	media: {
		mobile: "310px",
		tablet: "760px",
		desctop: "1400px",
	},
}

export default theme;