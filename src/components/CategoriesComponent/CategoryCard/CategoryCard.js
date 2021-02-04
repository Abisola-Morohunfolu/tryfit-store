import { Link } from 'react-router-dom';
import { ProductData } from '../../../data';
import { TextContainer, SectionCategory } from './style/CategoryCardStyle';

const CategoryCard = ({ category, image }) => {
	const splitText = category.split(' ');

	const linkText = splitText.length > 1 ? splitText[0] + '-' + splitText[1] : category;

	return (
		<SectionCategory>
			<Link to={`categories/${linkText}`}>
				<img src={ProductData[0].image} alt={ProductData[0].category} />
				<TextContainer>
					<h5>{category}</h5>
				</TextContainer>
			</Link>
		</SectionCategory>
	);
};

export default CategoryCard;
