import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Title from '../../pages/Exemplo1';

const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Title />} />
			</Routes>
		</BrowserRouter>
	);
};

export default AppRoutes;
