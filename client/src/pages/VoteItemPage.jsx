import Header from "../components/Header";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"; 
import votingdata from "../storage/votingdata";

async function temporaryQuery(cid){

	// const data = votingdata.images.find(el => el.caseId === 0);
	// console.log(data);
	// return data; 
	var data = null; 
	Object.keys(votingdata['images']).forEach(key=>{
		if (votingdata['images'][key]['caseId'].toString()=== cid){
			console.log(cid);
			data = votingdata['images'][key];
		}
	});
	console.log("data", data);
	return data
}
const VoteItemPage = () => {
	
	const [voteItemInfo, setVoteItemInfo] = useState({});
	const {caseId} = useParams(); 


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
	// console.log(voteItemInfo);

	




	useEffect(() => {
    async function fetchData() {
			console.log(caseId);
			const info = await temporaryQuery(caseId);
			console.log('info', info);
      setVoteItemInfo(info);
    }

    fetchData();
  }, [caseId]);

  console.log("Vote item info:", voteItemInfo); // Log the state here

	return (
		<div>
		<Header headerTitle="Item"/>
		<h1>vote item {caseId}</h1>
		<p>{voteItemInfo.description}</p>
		<img src={`${voteItemInfo.url}`} alt={`${voteItemInfo.alt}`} />
		</div>
	)
}



export default VoteItemPage