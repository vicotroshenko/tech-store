import { styled } from '@mui/material/styles';
import { TextField, Button } from "@mui/material";

export const SubscribeField = styled(TextField)`
	max-height: 50px;
	width: 100%;
	max-width: 391px;
	box-sizing: border-box;
	& input {
		padding-top: 15px;
		padding-bottom: 15px;
		outline: 2px solid white;
		border-radius: 4px;
		font-size: 14px;
		line-height: 1.5;
		color: #FFF;
	}
	& label {
		color: #FFF;
		background-color: #000;
	}
`;

export const SubscribeButton = styled(Button)`
	max-height: 50px;
	max-width: 151px;
	width: 100%;
	padding: 15px 0;
	margin-left: 23px;
	font-size: 14px;
	line-height: 1.5;
	font-weight: 600;
	text-align: center;
`;