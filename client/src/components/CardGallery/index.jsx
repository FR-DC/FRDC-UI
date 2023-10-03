/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom';


const CardGallery = (props) => {
	console.log(props.data.images)

	return (
		<div className="flex items-center justify-evenly flex-wrap gap-2 m-2 p-3">
		{props.data.images.map((data_, index)=>{
			return(<Card caseId={data_.caseId} key={index} url={`${data_.url}`} imgId={data_.imgId} alt="hello"
			upvotes={data_.upvotes} downvotes={data_.downvotes} description={data_.description}
			/>)
		})}
		</div>
	)
}

const CardGallery2 = (props) => {
	// console.log(props)
	// console.log(props.data)
	return (
		<div className="flex items-center justify-evenly flex-wrap gap-2 m-2 p-3">
		{props.data.map((key, index)=>{
			console.log(key[1])
			return(<Card caseId={`CasuarinaDec_${index}`} uuid={key[1].uuid} key={key[1].uuid} url={`dec_images_casuarina/${key[0]}.png`} imgId={key[1].uuid} alt=""
			upvotes={0} downvotes={0} description={`x0: ${key[1]['minc']}, x1: ${key[1]['maxc']}, y0: ${key[1]['minr']}, y1: ${key[1]['maxr']}`}
			/>)
		})}
		</div>
	)
}

// const Card2 = (props) => {
// 	return (
// 		<div className="w-32 lg:w-48 h-32 md:h-48 lg:h-64 max-w-lg rounded overflow-hidden shadow-lg hover:bg-green-100">
// 	<Link to={`/voting/${props.caseId.toString()}`}>
// 	{/* <img className="object-cover w-full h-full sm:h-2/4" src={props.url} alt={props.alt}></img> */}
// 	<img className="object-cover" src={casuarina} style={{objectPosition: `${props.top} ${props.right} ${props.bottom} ${props.left}`}}/>
// 	</Link>
//   <div className="p-2">
// 		<div className="flex flex-col relative">
//     {/* <div className="font-bold text-s mb-1">{props.imgId}</div> */}
//     <p className="text-gray-700 text-base">
//       {props.description}
//     </p>
//   </div>
//   <div className="relative bottom-3 grid grid-cols-2 px-6 pt-4 pb-2 text-center">
// 		<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
// 			{props.upvotes}
// 		</span>
// 		<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 uppercase last:mr-0 mr-1">
// 			{props.downvotes}
// 		</span>
//   </div>
// 	</div> 
// </div>
// 	)
// }

const Card = (props) => {
	return (
		<div className="w-32 lg:w-48 h-32 md:h-48 lg:h-64 max-w-lg rounded overflow-hidden shadow-lg hover:bg-green-100">
	<Link to={`/voting/${props.uuid}`}>
	<img className="object-cover w-full h-full sm:h-2/4" src={props.url} alt={props.alt}></img>
	</Link>
  <div className="p-2">
		<div className="flex flex-col relative">
    <div className="font-bold text-s mb-1">{props.caseId}</div>
		<p className="font-italic text-xs">{props.uuid}</p>
    <p className="text-gray-700 text-xs">
      {props.description}
    </p>
  </div>
  <div className="relative bottom-3 grid grid-cols-2 px-6 pt-4 pb-2 text-center">
		<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
			{props.upvotes}
		</span>
		<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 uppercase last:mr-0 mr-1">
			{props.downvotes}
		</span>
  </div>
	</div> 
</div>
	)
}

export default CardGallery;
export {Card, CardGallery2}; 
