import { useState, useEffect } from 'react';
import axios from 'axios';

const baseUrlPhotos = 'http://localhost:3001/singlepost';

const SinglePoem = () => {
	const [singlePhoto, setData] = useState(null);

	async function fetchData() {
		try {
			var element = document.getElementById("homeFooter");
			element.classList.add("hideDiv");
			
			const response = await axios.get(baseUrlPhotos, {params : {
				poemID : event.target.id
			}});

			console.log('--> ' + response.data.poems[0].title);

            setData(response.data.poems);
		} 
		catch (err) {
			console.log('Error');
		} 
		finally {
			console.log('Finally');
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

    return (<>
			<div>
				{singlePhoto.map((poem) => (poem.title))}
			</div>
    </>)
};
  
export default SinglePoem;