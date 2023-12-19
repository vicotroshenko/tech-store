import React from 'react'
import { Contacts, ListContainerConatcts } from './FooterContactsList.styled';
import { FooterLinkListProps } from '../../../types';

interface FooterContactsProps extends FooterLinkListProps {
	linkList: { name: string, adress: string, link: string }[];
}

const FooterContactsList: React.FC<FooterContactsProps> = ({ title, linkList }) => {
	return (
		<ListContainerConatcts>
		<h3>{title}</h3>
		<ul>
			{linkList.map((item, index) => (
				<li key={index}>
					{item.name === "Phones:" && <a href={"tel:"+item.adress}>
						{item.name} 
						<Contacts>{item.adress}</Contacts>
					</a>}
					{item.name === "E-mail:" && <a href={"mailto:"+item.adress}>
						{item.name} 
						<Contacts>{item.adress}</Contacts>
					</a>}
					{item.name !== "Phones:" && item.name !== "E-mail:" && <a href={item.link}>
						{item.name} 
						<span>{item.adress}</span>
					</a>}
				</li>
			))}
		</ul>
	</ListContainerConatcts>
	)
}

export default FooterContactsList;