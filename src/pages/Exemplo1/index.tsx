import { useEffect, useMemo, useState } from 'react';

import TitleExemple from '../../components/TitleExemplee';

function Title() {
	const [title, setTitle] = useState('Meu título');

	useEffect(() => {
		setTitle('Meu título1');
	}, []);

	const titleMemorized = useMemo(() => {
		return <TitleExemple title={title} />;
	}, [title]);

	return (
		<div>
			<h1>{titleMemorized}</h1>
		</div>
	);
}
export default Title;
