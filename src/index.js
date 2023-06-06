import React from 'react';
import ReactDom from 'react-dom/client';

function App() {
	return <h1>Hello React!</h1>;
}

const rootEl = document.getElementById('root');
const root = ReactDom.createRoot(rootEl);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
