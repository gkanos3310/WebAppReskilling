import { Outlet, Link } from "react-router-dom";
import mainLogo from'../assets/scss/Digital-Library.jpg';

const HomePage = () => {
	return (<>
		<div>
			<section className='Row'>
				<h2 className='SiteName underliner overliner'>Latin Poems e-Library</h2>
				
				<Link to="/FirstPoems">
					<button id='poems-1' className='PoemButtons' type="button">Ceasar Poems</button>
				</Link>
				<Link to="/SecondPoems">
					<button id='poems-2' className='PoemButtons' type="button">Colloseum Myths</button>
				</Link>
				<Link to="/ThirdPoems">
					<button id='poems-3' className='PoemButtons' type="button">Anonymous Sonatas</button>
				</Link>		
			</section>

			<div id="homeFooter">
				<p className="underliner">Welcome to our brand new e-Library for Latin poems!</p>
				<img src={mainLogo} className="centerImage"></img>
				<p>Here you can find a big variety of old poems coming for the Roman Empire. Choose your desired topic throughout various types and enjoy your literature journey!</p>
			
				<div className="lala">
					<footer>
						<p>Author: Konstantinos Gkanogiannis <a href="../www.linkedin.com/in/konstantinos-gkanogiannis-6a6523218"><span className="badge">in</span></a></p>
					</footer>
				</div>
			</div>
		</div>
			
		<Outlet/>
	</>)
};

export default HomePage;