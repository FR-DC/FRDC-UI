import Header from "../components/Header";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"; 
import votingdata from "../storage/votingdata";

async function temporaryQuery(){
	console.log(2);
	const data = votingdata.images.find(el => el.caseId === 2);
	console.log(data);
	return data; 
}
const VoteItemPage = () => {
	const {caseId} = useParams(); 
	console.log(`caseId ${caseId}`)
	const [voteItemInfo, setVoteItemInfo] = useState();



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
			const votingdata = JSON.parse(votingdata);
			console.log(votingdata);
      const info = votingdata.images.find(image => image.caseId === 2);
      console.log("Fetched info:", info); // Add this line to log the fetched info
      setVoteItemInfo(info);
    }

    fetchData();
  }, [caseId]);

  console.log("Vote item info:", voteItemInfo); // Log the state here

	return (
		<div>
		<Header headerTitle="Item"/>
		<h1>vote item {caseId}</h1>
		<img src={`${voteItemInfo.url}`} alt={`${voteItemInfo.alt}`} />
		</div>
	)
}



export default VoteItemPage