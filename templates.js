export const createComponentFile = (componentName, htmlTag) => {
	const cmpContent = `import React from 'react'

const ${componentName} = () => {
    return (
        <${htmlTag}>
            ${componentName}
        </${htmlTag}>
    )
}

export default ${componentName}`;

	return cmpContent;
};

export const createComponentTestFile = (componentName) => {
	const fileContent = `
import React from 'react';
import ${componentName} from './${componentName}';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

test('loads and displays ${componentName}', async () => {
    render(<${componentName} />);
});

`;

	return fileContent;
};
