import Header from "../components/Header"; 
import { Link } from "react-router-dom";

const Dashboard = () => {
	return (
		<div>
		<Header headerTitle="Dashboard"/>
		<div className="grid grid-cols-4">
		<Link to="/voting">
			<div className="flex flex-col button shadow h-36 w-36 rounded outline-1 bg-green-100 justify-center text-center m-auto
			hover:bg-green-200">
				<h1>Vote</h1>
			</div>
			</Link>
			<div className="flex flex-col button shadow h-36 w-36 rounded outline-1 bg-green-100 justify-center text-center m-auto
			hover:bg-green-200">
				<h1>Classify</h1>
			</div>
			<div className="flex flex-col button shadow h-36 w-36 rounded outline-1 bg-green-100 justify-center text-center m-auto
			hover:bg-green-200">
				<h1>Chat</h1>
			</div>
			<div className="flex flex-col button shadow h-36 w-36 rounded outline-1 bg-green-100 justify-center text-center m-auto
			hover:bg-green-200">
				<h1>History</h1>
			</div>
		</div>
		</div>
	)
}


export default Dashboard