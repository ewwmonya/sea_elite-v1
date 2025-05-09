'use client';
import { categoryReducer } from './categoryReducer';
import { createContext, useContext, useReducer } from 'react';
import products from '../../lib/products';

const allCategories = products.reduce((total, product) => {
	const { category } = product;
	total[category] = (total[category] || 0) + 1;
	return total;
}, {});
const CategoriesContext = createContext();

const initialState = {
	categories: allCategories,
};

export const CategoryProvider = ({ children }) => {
	const [state, dispatch] = useReducer(categoryReducer, initialState);

	return (
		<CategoriesContext.Provider value={{ state, dispatch }}>
			{children}
		</CategoriesContext.Provider>
	);
};

export const useCategories = () => useContext(CategoriesContext);
