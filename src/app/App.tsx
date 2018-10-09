import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './components/Hello';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import 'antd/dist/antd.css';

OfflinePluginRuntime.install();

declare let module: any

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
	//SET SOME VISUAL INDICATOR IN APP
}

if (module.hot) {
   module.hot.accept();
}

ReactDOM.render(
	<div>
		<Hello
			compiler="Typescript"
			framework="React"
			bundler="Webpack"
		/>
	</div>
	,
	document.getElementById('root')
);

