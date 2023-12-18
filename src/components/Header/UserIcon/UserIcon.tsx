import userIcon from "../../../images/userIcon.jpg"
import { UserIconButton } from "./UserIcon.styled";

const UserIcon = () => {
	return (
		<UserIconButton type="button">
			<img src={userIcon} alt="user avatar" />
		</UserIconButton>
	)
}

export default UserIcon;