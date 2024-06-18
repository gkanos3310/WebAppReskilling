import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrlPosts = 'https://jsonplaceholder.typicode.com/posts';
const baseUrlPhotos = 'https://jsonplaceholder.typicode.com/photos';

const SinglePoem = () => {
	const [singlePhoto, setData] = useState(null);

	async function fetchData() {
		try {
			const response = await axios.get(baseUrlPhotos);
            //const singlePhoto = response.data.find((elem) => elem.id == 5);
            setData(response.data);
		} 
		catch (err) {
			const errorMessage = "Error: " + err.message;
		} 
		finally {
			const errorMessage = "Error: ";
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

    return (<>
			<div>
				{singlePhoto.find((elem) => (
					elem.id == 5
				))}
			</div>
    </>)
};
  
export default SinglePoem;