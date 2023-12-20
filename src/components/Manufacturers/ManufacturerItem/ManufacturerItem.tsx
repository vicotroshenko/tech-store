import { IAboutUsCardProps } from "../../../types";
import { LogoItem } from "./ManufacturerItem.styled";


const ManufacturerItem: React.FC<Pick<IAboutUsCardProps, "image" | "alt">> = ({image, alt=""}) => {
	return (
		<LogoItem>
			<img src={image} alt={alt}/>
		</LogoItem>
	)
}

export default ManufacturerItem