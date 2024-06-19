//FirstPoems.jsx SecondPoems.jsx ThirdPoems.jsx should be a single file cause they have the same logic but sadly I split them in three cause I had some problems with the routing.
import { Outlet, Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrlPosts = 'http://localhost:3001/posts';

const SecondPoems = () => {
    const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [poems, setData] = useState(null);

    async function fetchData() {
		try {
			var element = document.getElementById("homeFooter");
			element.classList.add("hideDiv");

			//the range is random and can be adapted to be dynamic -> size of all posts / number of buttons
			const response = await axios.get(baseUrlPosts, {params : {
				from : 20,
				to : 25
			}});

            setData(response.data.poems);
		} 
		catch (err) {
			const errorMessage = "Error: " + err.message;
			setError(errorMessage);
		} 
		finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
	}, []);
	
	if (isLoading) return "Loading...";
	if (error) return error;

    return (<>
		<div>
            <p>Poems List</p>
            <ul className='PoemList'>
                {poems.map((poem) => (
                    <Link to="/singlepoem" key={poem.id}>
                        <button id={poem.id}>Poem #{poem.id}</button>
                    </Link>
				))}
            </ul>
		</div>

        <Outlet/>
    </>)
};
  
export default SecondPoems;