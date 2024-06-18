import './assets/scss/style.scss'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./endpoints/HomePage.jsx";
import FirstPoems from "./endpoints/FirstPoems.jsx";
import SecondPoems from "./endpoints/SecondPoems.jsx";
import ThirdPoems from "./endpoints/ThirdPoems.jsx";
import SinglePoem from "./endpoints/SinglePoem.jsx";
import NoPage from "./endpoints/NoPage.jsx";

export default function App() {
    return (
        <BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />}>
				<Route path="FirstPoems" element={<FirstPoems />} />
				<Route path="SecondPoems" element={<SecondPoems />} />
				<Route path="ThirdPoems" element={<ThirdPoems />} />
				<Route path="SinglePoem" element={<SinglePoem />} />
				<Route path="*" element={<NoPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render();
