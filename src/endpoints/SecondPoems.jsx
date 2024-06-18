import { Outlet, Link } from "react-router-dom";

import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrlPosts = 'https://jsonplaceholder.typicode.com/posts';
const CHUNK_SIZE = 3;

const SecondPoems = () => {
    const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);
	const [poems, setData] = useState(null);

    async function fetchData() {
		try {
			let range = event.target.id.split('-')[1];
			const response = await axios.get(baseUrlPosts);
			let batch = response.data.length / CHUNK_SIZE;

			console.log(typeof (range - 1));
			console.log(typeof (batch));
			console.log((batch));

            response.data = response.data.filter(function( poem ) {
                return (poem.id >= (range - 1) * batch && poem.id <= range * batch);
            });

            setData(response.data);
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