import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import RoutesContainer from './components/RoutesContainer';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Navbar />
				<RoutesContainer />
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
