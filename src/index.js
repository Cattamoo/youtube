import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App';
import NotFound from "./pages/NotFound";
import Videos from "./pages/Videos";
import VideoDetail from "./pages/VideoDetail";

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{ index: true, element: <Videos /> },		// Hot Trend
			{ path: '/videos', element: <Videos /> },	// Hot Trend
			{ path: '/videos/:keyword', element: <Videos /> }, // Keyword
			{ path: '/videos/watch/:videoId', element: <VideoDetail /> }, // Watch
		]
	}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

reportWebVitals();
