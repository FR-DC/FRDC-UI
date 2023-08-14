import votingdata from "../storage/votingdata";
import CardGallery from "../components/CardGallery";
import Header from "../components/Header";

export default function VotingPage() {
	return(
		<div>
		<Header headerTitle={"Voting Page"}/>
		<CardGallery data={votingdata}/>
		</div>
	)
}
