import { Link } from "react-router-dom"

const Navbar = () => {
  return(
    <>
    <nav className="flex bg-emerald-950 px-10 py-5 items-center justify-between">
      <h2 className="text-2xl">Durvesh</h2>
      <div className="flex gap-10 text-lg-underline">
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
    </>
  )
}

export default Navbar