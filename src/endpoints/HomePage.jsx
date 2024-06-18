import { Outlet, Link } from "react-router-dom";
import mainLogo from'../assets/scss/Digital-Library.jpg';

const HomePage = () => {
	return (<>
		<div>
			<section className='Row'>
				<h2 className='SiteName'>Latin Poems e-Library</h2>
				
				<Link to="/FirstPoems">
					<button id='poems-1' className='PoemButtons' type="button">Ceasar Poems</button>
				</Link>
				<Link to="/FirstPoems">
					<button id='poems-2' className='PoemButtons' type="button">Colloseum Myths</button>
				</Link>
				<Link to="/FirstPoems">
					<button id='poems-3' className='PoemButtons' type="button">Anonymous Sonatas</button>
				</Link>		
			</section>

			<img src={mainLogo}></img>
		</div>
			
		<Outlet/>
	</>)
};

export default HomePage;