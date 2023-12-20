import adataLogo from '../../../images/companies/adata.png';
import gigabyteLogo from '../../../images/companies/gigabyte.png';
import hpLogo from '../../../images/companies/hp.png';
import msiLogo from '../../../images/companies/msi.png';
import razerLogo from '../../../images/companies/razer.png';
import roccatLogo from '../../../images/companies/roccat.png';
import thermaltakeLogo from '../../../images/companies/thermaltake.png';
import Container from '../../Container/Container';
import ManufacturerItem from '../ManufacturerItem/ManufacturerItem';
import { ManufacturerList } from './ManufacturersMain.styled';

const ManufacturersMain = () => {
	return (
		<Container>
			<ManufacturerList>
				<ManufacturerItem image={adataLogo} alt={"Adata company's logo"}/>
				<ManufacturerItem image={gigabyteLogo} alt={"Gigabyte company's logo"}/>
				<ManufacturerItem image={hpLogo} alt={"HP company's logo"}/>
				<ManufacturerItem image={msiLogo} alt={"MSI company's logo"}/>
				<ManufacturerItem image={razerLogo} alt={"Razer company's logo"}/>
				<ManufacturerItem image={roccatLogo} alt={"Roccat company's logo"}/>
				<ManufacturerItem image={thermaltakeLogo} alt={"Thermaltake company's logo"}/>
			</ManufacturerList>
		</Container>
	)
}
export default ManufacturersMain;