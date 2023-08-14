/* eslint-disable react/prop-types */

const CardGallery = (props) => {
	console.log(props.data.images)
	return (
		<div className="flex flex-wrap gap-2 m-2 p-3">
		{props.data.images.map((data_, index)=>{
			return(<Card key={index} url={data_.url} imgId={data_.imgId} alt="hello"
			upvotes={data_.upvotes} downvotes={data_.downvotes} description={data_.description}
			/>)
		})}
		</div>
	)
}

const Card = (props) => {
	return (
		<div className="w-16 md:w-32 lg:w-48 h-32 md:h-48 lg:h-64 max-w-xs rounded overflow-hidden shadow-lg">
  <img className="w-full" src={props.url} alt={props.alt}></img>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{props.imgId}</div>
    <p className="text-gray-700 text-base">
      {props.description}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
		<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200 uppercase last:mr-0 mr-1">
			{props.upvotes}
		</span>
		<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-red-600 bg-red-200 uppercase last:mr-0 mr-1">
			{props.downvotes}
		</span>
  </div>
</div>
	)
}

export default CardGallery;
export {Card}; 
