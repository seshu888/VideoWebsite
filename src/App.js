import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Home from './components/Home'
function App() {
	return (
		<div>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home}/>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
