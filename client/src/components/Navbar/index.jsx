
export default function Navbar(){
	return (
		<nav className="flex items-center justify-between flex-wrap bg-green-200 p-2">
  <div className="flex items-center flex-shrink-0 text-black">
    <img className="p-1" src="../../public/tree.png" alt="tree-logo" height="54px" width="54px"/>
    <span className="md:visible m-2 font-mono text-2xl tracking-normal"><p className="invisible md:visible">FRDC</p></span>
  </div>
    <div>
      <a href="#" className="inline-block text-sm mx-3 px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-blue-600 hover:bg-white">Account</a>
    </div>

</nav>
	)
}