
export default function Navbar(){
	return (
		<nav className="flex items-center justify-between flex-wrap bg-green-200 p-6">
  <div className="flex items-center flex-shrink-0 text-black mr-6">
    <img className="p-1" src="../../public/tree.png" alt="tree-logo" height="54px" width="54px"/>
    <span className="m-2 font-semibold text-2xl tracking-tight">FRDC</span>
  </div>
    <div>
      <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-blue-600 hover:bg-white mt-4 lg:mt-0">Account</a>
    </div>

</nav>
	)
}