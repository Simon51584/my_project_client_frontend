import React from 'react';
import { Button } from 'semantic-ui-react';

const ClearTrash = ({ actions }) => {
	const clear = () => {
		actions.clearTrash();
	};

	return (
		<div>
			<Button type="button" onClick={clear}>
				Clear the entire Trash
			</Button>
		</div>
	);
};

export default ClearTrash;
