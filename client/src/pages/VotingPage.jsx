import votingdata from "../storage/votingdata";
import CardGallery from "../components/CardGallery";

export default function VotingPage() {
	return(
		<CardGallery data={votingdata}/>
	)
}
