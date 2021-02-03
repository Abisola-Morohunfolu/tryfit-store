import { CategoriesData } from '../../data';
import CategoryCard from './CategoryCard/CategoryCard';
import { Category } from './style/CategoriesStyle';

const Categories = () => {
	return (
		<Category>
			{CategoriesData.map((category) => (
				<CategoryCard category={category} key={category} image="test" />
			))}
		</Category>
	);
};

export default Categories;
