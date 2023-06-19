import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Navbar';
import { Form } from '../routes/Form';
import Login from '../routes/Login';
import Register from '../routes/Register';
import Manager from '../routes/Manager';
import Client from '../routes/Client';
import Recruiter from '../routes/Recruiter';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Form />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
					<Route path="/manager" element={<Manager />} />
					<Route path="/client" element={<Client />} />
					<Route path="/recruiter" element={<Recruiter />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
