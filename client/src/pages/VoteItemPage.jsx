import Header from "../components/Header";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"; 
// import votingdata from "../storage/votingdata";
import votingdata from "/Users/nicoleyap/Documents/GitHub/FRDC/backend_temp/bb_data_json/18Dec2020_filtered_bounds.json";
// testing with csv format 
import Papa from "papaparse";


async function temporaryQuery(uuid, data_json){
	// const data = votingdata.images.find(el => el.caseId === 0);
	// console.log(data);
	// return data; 
	var data = null; 
	const entries = data_json;
	// console.log('uuid', uuid)
	entries.forEach(key=>{
		// console.log('key:', key[0]);
		if (key[0] === uuid){
			console.log('found')
			data = key;
			// console.log(data)
		}
	});
	console.log("data", data); 
	return data
}



async function parseCsvData(filename) {
	return new Promise((resolve, reject) => {
	  Papa.parse(filename, {
		header: true,
		delimiter: ",",
		skipEmptyLines: true,
		complete: function (results) {
		  // Check for parsing errors
		  if (results.errors.length > 0) {
			reject(results.errors);
		  } else {
			console.log(results.data);
			resolve(results.data);
		  }
		},
	  });
	});
  }

// async function temporaryQuery2(uuid){

// 	// const data = votingdata.images.find(el => el.caseId === 0);
// 	// //console.log(data);
// 	// return data; 
// 	var data = null; 
// 	const entries = Object.entries(votingdata); 
// 	entries.forEach(key=>{
// 		//console.log(key)
// 	})
// 	Object.keys(votingdata).forEach(key=>{
// 		if (votingdata['images'][key]['caseId'].toString()=== cid){
// 			//console.log(cid);
// 			data = votingdata['images'][key];
// 		}
// 	});
// 	//console.log("data", data);
// 	return data
// }
const VoteItemPage = () => {
	
	const [voteItemInfo, setVoteItemInfo] = useState({});
	const [jsonBoundsData, setJsonBoundsData] = useState({}); 
	const {uuid} = useParams(); 
	//console.log(uuid);

	//TODO: add backend logic to query info based on caseId
	// useEffect(() => {
	// 	// fetch(`http://127.0.0.1:5173/voting/${caseId}`)
	// 	// .then(response => {
	// 	// 	response.json().then(voteItemInfo => {
	// 	// 		setVoteItemInfo(voteItemInfo); 
	// 	// 	})
	// 	// })
	// 	async () => {
	// 	const info = await temporaryQuery(parseInt(caseId));
	// 	setVoteItemInfo(info);
	// 	}
	// }, [caseId]);
	// //console.log(voteItemInfo);

	
	useEffect(() => {
		async function parse(filename){
			let promise = await parseCsvData(filename); 
			promise.then(
				(result) => {
					console.log("line 95", result);
					setJsonBoundsData(result); 
				}
			)
		}
		parse("/Users/nicoleyap/Documents/GitHub/FRDC/backend_temp/FilesForGui/18Dec2020_filtered_bounds.csv");

	}, []);

	useEffect(() => {
    async function fetchData(json_data) {
		//console.log(uuid);
		const info = await temporaryQuery(uuid, json_data);
		//console.log('info', info);
      	setVoteItemInfo(info);
    }

    fetchData(jsonBoundsData);
  }, [uuid, jsonBoundsData]);

  //console.log("Vote item info:", voteItemInfo); // Log the state here

	return (
		<div>
		<Header headerTitle="Item"/>
		<h1>vote item {uuid}</h1>
		{/* <p>x0 {voteItemInfo[1].minc}</p>
		<p>x1 {voteItemInfo[1].maxc}</p>
		<p>y0 {voteItemInfo[1].minr}</p>
		<p>y1 {voteItemInfo[1].maxr}</p> */}

		<img className="m-auto pt-5" src={`/dec_images_casuarina/${uuid}.png`} alt="test" />
		</div>
	)
}



export default VoteItemPage