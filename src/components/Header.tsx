import Link from "next/link";

const Header = () => {
  return ( 
    <nav className="bg-secondary-color">
      <div className="container text-2xl items-center flex mx-auto px-4 p-4">
        <div>
          <Link href="/">
            Pedro Henrick
          </Link>
        </div>
        <div className="flex flex-grow justify-end text-right">
          <Link href="/" className="px-3 py-2">
            Home
          </Link>
          <Link href="/stacks" className="px-3 py-2">
            Stacks
          </Link>
        </div>
      </div>
    </nav>
   );
}
 
export default Header;