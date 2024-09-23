import appleImg from "/assets/images/apple.svg"
import   bag   from "/assets/images/bag.svg"
import  search   from "/assets/images/search.svg"

 function Navbar() {
  return (
    <>
    <nav>
      <div className="flex justify-between gap-5 flex-row">
        <img src={appleImg} alt="Apple Logo"  width={14} height={18} />

        <ul className="list-none flex gap-5 justify-between cursor-pointer text-gray-400 max-sm:hidden">
          <li className=" text-gray-400 hover:text-white">store</li>
          <li>iphone</li>
          <li>mac</li>
          <li>support</li>
        </ul>

        <div className="flex gap-5">
        <img src={search} alt="Apple Logo"  width={14} height={18} />
        <img src={bag} alt="Apple Logo"  width={14} height={18} />
        </div>
        
      </div>
    </nav>
    </>
  )
}

export default  Navbar
