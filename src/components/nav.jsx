import appleImg from "/assets/images/apple.svg"
import   bag   from "/assets/images/bag.svg"
import  search   from "/assets/images/search.svg"

const navLists = ["store", "iphone", "mac", "support"]

 function Navbar() {
  return (
    <>
    <nav>
      <div className="flex-box flex-row">
        <img src={appleImg} alt="Apple Logo"  width={14} height={18} />

        <ul className="list-none flex-box cursor-pointer text-gray-400 max-sm:hidden">
        {navLists.map((nav) => (
          <li className="text-gray-400 hover:text-white" key={nav}>{nav}</li>
        ))}
        </ul>

        <div className="flex-box">
        <img src={search} alt="Apple Logo"  width={14} height={18} />
        <img src={bag} alt="Apple Logo"  width={14} height={18} />
        </div>
        
      </div>
    </nav>
    </>
  )
}

export default  Navbar
