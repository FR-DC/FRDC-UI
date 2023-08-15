/* eslint-disable react/prop-types */
import Navbar from "../Navbar";


export default function Header(props) {
	const headerTitle = props.headerTitle.toLowerCase(); 
	return (
		<>
			<Navbar/>
			<h1 className={"font-mono text-[35px] sm:text-[30px] md:text-[40px] lg:text-[50px] my-3 text-semibold text-emerald-950"}>{headerTitle}</h1>
		</>
		

	)
}