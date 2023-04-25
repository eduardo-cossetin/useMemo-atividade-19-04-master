import React from 'react';
interface TitleExempleProps {
	title: string;
}

const TitleExemple: React.FC<TitleExempleProps> = ({ title }) => {
	console.log('Renderizou!');
	return (
		<div>
			<h1>{title}</h1>
		</div>
	);
};

export default TitleExemple;
