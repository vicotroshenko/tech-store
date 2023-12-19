import { FooterLinkListProps } from "../../../types";
import { ListContainer } from "./FooterLinkList.styled";

const FooterLinkList: React.FC<FooterLinkListProps> = ({ title, linkList }) => {
  return (
    <ListContainer>
      <h3>{title}</h3>
      <ul>
        {linkList.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </ListContainer>
  );
};

export default FooterLinkList;
