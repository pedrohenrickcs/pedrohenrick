import Link from "next/link";

const Header = () => {
  console.log('env', process.env.NODE_ENV);
  
  return ( 
    <nav className="bg-secondary-color">
      <div className="container text-xl items-center flex mx-auto px-4 p-4">
        <div>
          <Link href="/">
            Pedro Henrick
          </Link>
        </div>
        <div className="flex flex-grow justify-end text-right">
          <Link href="/" className="px-3 py-2">
            Aboute me
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