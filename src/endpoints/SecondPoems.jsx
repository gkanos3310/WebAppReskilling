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
                        <li>Poem #{poem.id}</li>
                    </Link>
				))}
            </ul>
		</div>

        <Outlet/>
    </>)
};
  
export default SecondPoems;