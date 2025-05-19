import { CgMenuLeft } from 'react-icons/cg'
import Button from './Button'
import { MdOutlineShoppingBag } from 'react-icons/md'

export default function Navbar() {
  return (
    <nav className="max-w-screen flex justify-between items-center shadow-md py-10 px-5 lg:px-10">
      <a href="/" className="flex items-center gap-3">
        <img src="/img/logo.png" alt="Logo" />
        <h1 className="text-primary font-bold text-2xl">Dekoor</h1>
      </a>
      <ul className="hidden lg:flex lg:items-center lg:justify-around w-1/2 gap-12">
        <li>
          <a href="/" className="text-primary font-medium hover:text-primary/80">About us</a>
        </li>
        <li>
          <a href="/products" className="text-primary font-medium hover:text-primary/80">Furniture</a>
        </li>
        <li>
          <a href="/about" className="text-primary font-medium hover:text-primary/80">Partnership</a>
        </li>
        <li>
          <a href="/contact" className="text-primary font-medium hover:text-primary/80">Contact</a>
        </li>
      </ul>
      <div>
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:bg-primary/10 lg:hidden"
        >
          <CgMenuLeft className="w-5 h-5" />
        </Button>
        <div className="hidden lg:flex lg:items-center lg:gap-4">
          <Button
            variant="secondary"
            size="lg"
          >
            Sign Up
          </Button>
          <Button
            size="logo"
          >
            <MdOutlineShoppingBag className="w-10 h-10" />
          </Button>
        </div>
      </div>
    </nav>
  )
}
