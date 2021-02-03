import { Link } from 'react-router-dom';
import CategoryCard from '../../CategoriesComponent/CategoryCard/CategoryCard';
import { HeaderSection, SectionStyle, CategoryContainer } from './style/CategoriesSectionStyle';

const CategoriesSection = () => {
	return (
		<SectionStyle>
			<HeaderSection>
				<h3>Categories</h3>
				<Link to="/categories">See all</Link>
			</HeaderSection>
			<CategoryContainer>
				<CategoryCard category="men clothing" image="Test" />
				<CategoryCard category="jewelry" image="Test" />
			</CategoryContainer>
		</SectionStyle>
	);
};

export default CategoriesSection;
