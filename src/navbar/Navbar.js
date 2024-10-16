import Link from "next/link";

const Navbar = () =>{
    return(<>
    <header className="">
    <nav className="container w-5/6 m-auto">
    <div className="flex justify-between  ">
    <Link href="/category">category</Link>
    <Link href="/category">category</Link>
    <Link href="/category">category</Link>
    <Link href="/category">category</Link>
    <Link href="/category">category</Link>
    </div>
    </nav>   
    </header>
    
    </>)
}
export default Navbar;