import { ListContainer } from "./FooterLinkList.styled";


const linkList: Readonly<{name: string, link: string}[]> = [
  {name:"About Us", link: "/"},
  {name:"About Zip", link: "/"},
  {name:"Privacy Policy", link: "/"},
  {name:"Search", link: "/"},
  {name:"Terms", link: "/"},
  {name:"Orders and Returns", link: "/"},
  {name:"Contact Us", link: "/"},
  {name:"Advanced Search", link: "/"},
  {name:"Newsletter Subscription", link: "/"}
];

const FooterLinkList = () => {
  return (
    <ListContainer>
      <h3>Information</h3>
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
