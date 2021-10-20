#!/usr/bin/env node
import { mkdir, writeFile } from 'fs';
import { argv, cwd } from 'process';
import { join } from 'path';

import { createComponentFile,createComponentTestFile } from './templates.js';

const componentName = argv[2] || 'HelloCmpGen';
const htmlTag = argv[3] || 'div';

const fullPath = join(cwd(), componentName);

mkdir(fullPath, (err) => {
	writeFile(
		join(fullPath, componentName) + '.jsx',
		createComponentFile(componentName, htmlTag),
		(err) => {
			if (err) {
				console.log(err);
			}
			writeFile(
				join(fullPath, componentName) + '.test.js',
				createComponentTestFile(componentName),
				(err) => {
					if (err) {
						console.log(err);
					}
				}
			);
		}
	);
});
