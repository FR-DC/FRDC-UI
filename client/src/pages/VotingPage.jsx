// import votingdata from "../storage/votingdata";
import {CardGallery2} from "../components/CardGallery";
import Header from "../components/Header";
import votingdata from "/Users/nicoleyap/Documents/GitHub/FRDC/backend_temp/bb_data_json/18Dec2020_filtered_bounds.json";
// import image from "/Users/nicoleyap/Documents/GitHub/FRDC/backend_temp/casuarina_dec.png";
// import {useRef, useEffect} from "react";

// export default function VotingPage() {
// 	// const votingdata = JSON.parse(data); 
// 	// [croppedImages, setCroppedImages] = useState(); 

// 	const entries = Object.entries(data);
// 	return (
//     <div>
//       {entries.map((entry, index) => {
//         const [key, value] = entry;
//         return (
//           <div key={index}>
//             <p>{`${key}: ${JSON.stringify(value)}`}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

export default function VotingPage(){
	const entries = Object.entries(votingdata); 
	return(
		<div>
			<Header headerTitle="voting page"/>
			<CardGallery2 data={entries}/>
		</div>
	)
}
