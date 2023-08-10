import React, {useState, useEffect} from 'react';

// type Image = {
// 	imageUrl: string, 
// 	votes: number, 
// 	completed: boolean, 
// }

const useGoogleStorage = () => {
	const [docs, setDocs] = useState([]);
	const [isLoading, setIsLoading] = useState(true); 

	useEffect(() => {
		const getData = async() => {
			try {
				// TODO: query logic 
				const data = async () => {
					const response = await fetch('https://jsonplaceholder.typicode.com/photos');
					const json = await response.json(); 
					return json.slice(0, 10); 
				}
				console.log(await data());
				setDocs(await data());
			} catch(error){
				console.error(error)
				return (<div className="alert-error">
						{error.message}
					</div>
			)
			}

				// setDocs(response.jscon()[0])

		};
		getData(); 
	}, []);
	return docs; 
};

export default useGoogleStorage;