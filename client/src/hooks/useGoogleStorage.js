// import React, {useState, useEffect} from 'react';

// // type Image = {
// // 	imageUrl: string, 
// // 	votes: number, 
// // 	completed: boolean, 
// // }
// export default async function useGoogleStorage() {
// 	const [docs, setDocs] = useState([]);
// 	useEffect(() => {
// 		const getData = async() => {
// 			try {
// 				// TODO: query logic 
// 				// const data = async () => {
// 				const response = await fetch('https://jsonplaceholder.typicode.com/photos');
// 				const json = await response.json(); 
// 				// 	console.log(json);
// 				// 	const usefulData = [];
// 				// 	for (var key in json.slice(0,50)){
// 				// 		usefulData.push({
// 				// 			'id': json[key]['id'],
// 				// 			'url': json[key]['thumbnailUrl'],
// 				// 			'title': json[key]['title']
// 				// 		})
// 				// 	}
// 				// 	return usefulData; 
// 				// }
// 				const usefulData = json.slice(0, 50).map(item => ({
// 				'id': item.id,
// 				'url': item.thumbnailUrl,
// 				'title': item.title
//         }));
// 				setDocs(usefulData);
// 				console.log(usefulData);
// 			} catch(error){
// 				console.error(error)
// 				return (<div className="alert-error">
// 						{error.message}
// 					</div>
// 			)
// 			}
// 		};
// 		getData(); 
// 	}, []);
// 	return docs; 
// };
