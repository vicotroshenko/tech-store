import { useBreakpoints } from "../../../hooks/useBreakpoints";
import FooterBottom from "../FooterBottom/FooterBottom";
import FooterContactsList from "../FooterContactsList/FooterContactsList";
import FooterLinkList from "../FooterLinkList/FooterLinkList";
import FooterTitle from "../FooterTitle/FooterTitle";
import SubscribeForm from "../SubscribeForm/SubscribeForm";
import { Footer, FooterContainer, FooterLinkBox, SubscribeTitle } from "./FooterMain.styled";

const informationList: { name: string; link: string }[] = [
  { name: "About Us", link: "/" },
  { name: "About Zip", link: "/" },
  { name: "Privacy Policy", link: "/" },
  { name: "Search", link: "/" },
  { name: "Terms", link: "/" },
  { name: "Orders and Returns", link: "/" },
  { name: "Contact Us", link: "/" },
  { name: "Advanced Search", link: "/" },
  { name: "Newsletter Subscription", link: "/" },
];

const pcPartsList: { name: string; link: string }[] = [
  { name: "CPUS", link: "/" },
  { name: "Add On Cards", link: "/" },
  { name: "Hard Drives (Internal)", link: "/" },
  { name: "Graphic Cards", link: "/" },
  { name: "Keyboards / Mice", link: "/" },
  { name: "Cases / Power Supplies / Cooling", link: "/" },
  { name: "RAM (Memory)", link: "/" },
  { name: "Software", link: "/" },
  { name: "Speakers / Headsets", link: "/" },
  { name: "Motherboards", link: "/" },
];

const descktopPCList: { name: string; link: string }[] = [
  { name: "Custom PCs", link: "/" },
  { name: "Servers", link: "/" },
  { name: "MSI All-In-One PCs", link: "/" },
  { name: "HP/Compaq PCs", link: "/" },
  { name: "ASUS PCs", link: "/" },
  { name: "Tecs PCs", link: "/" },
];

const laptopsList: { name: string; link: string }[] = [
  { name: "Evryday Use Notebooks", link: "/" },
  { name: "MSI Workstation Series", link: "/" },
  { name: "MSI Prestige Series", link: "/" },
  { name: "Tablets and Pads", link: "/" },
  { name: "Netbooks", link: "/" },
  { name: "Infinity Gaming Notebooks", link: "/" },
];

const contactsList: { name: string; adress: string; link: string }[] = [
  {
    name: "Address:",
    adress: "1234 Street Adress City Address, 1234",
    link: "/",
  },
  { name: "Phones:", adress: "(00) 1234 5678", link: "/" },
  {
    name: "We are open:",
    adress: "Monday-Thursday: 9:00 AM - 5:30 PM",
    link: "/",
  },
  { name: "Friday:", adress: "9:00 AM - 6:00 PM", link: "/" },
  { name: "Saturday:", adress: "11:00 AM - 5:00 PM", link: "/" },
  { name: "E-mail:", adress: "shop@email.com", link: "/" },
];

const FooterMain: React.FC = () => {
  const { isLaptop } = useBreakpoints();
	
  return (
    <Footer>
      <FooterContainer>
        <SubscribeTitle>
          <FooterTitle />
          <SubscribeForm />
        </SubscribeTitle>
        <FooterLinkBox>
          <FooterLinkList title={"Information"} linkList={informationList} />
          {isLaptop && (
            <FooterLinkList title={"PC Parts"} linkList={pcPartsList} />
          )}
          {isLaptop && (
            <FooterLinkList title={"Desktop PCs"} linkList={descktopPCList} />
          )}
          {isLaptop && (
            <FooterLinkList title={"Laptops"} linkList={laptopsList} />
          )}
          <FooterContactsList title={"Address"} linkList={contactsList} />
        </FooterLinkBox>
				<FooterBottom/>
      </FooterContainer>
    </Footer>
  );
};

export default FooterMain;
