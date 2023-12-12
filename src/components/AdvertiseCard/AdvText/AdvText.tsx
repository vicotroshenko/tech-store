import { Subtitle, TextContainer, UnderSubtitleText } from "./AdvText.styled";

type AdvTextProps = {
	subtitle: string;
	text1: string;
	text2?: string;
}

const AdvText: React.FC<AdvTextProps> = ({subtitle, text1, text2=null}) => {
	return (
		<TextContainer abouttype="us">
			<Subtitle>{subtitle}</Subtitle>
			<UnderSubtitleText>{text1}</UnderSubtitleText>
			{text2 && <UnderSubtitleText>{text2}</UnderSubtitleText>}
		</TextContainer>
	)
}

export default AdvText;