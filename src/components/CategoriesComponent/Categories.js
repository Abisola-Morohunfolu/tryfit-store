import * as React from 'react';
import { CategoriesData } from '../../data';
import CategoryCard from './CategoryCard/CategoryCard';
import { Category, Container } from './style/CategoriesStyle';
import { useGlobalStateContext } from '../../context/context';
import { Redirect } from 'react-router-dom';

const Categories = () => {
	const { products } = useGlobalStateContext();

	if (products.length === 0) return <Redirect to="/" />;
	return (
		<>
			<Container>
				<h2>Categories</h2>
				<Category>
					{CategoriesData.map((category) => (
						<CategoryCard category={category} key={category} image="test" />
					))}
				</Category>
			</Container>
		</>
	);
};

export default Categories;
