import '@/styles/globals.css';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
  // console.count("App Loaded")
  return (
    <>
    <nav className="mainNav">
      <ul>
        <li>
        <Link href="/">Home</Link>
        </li>
        <li>
        <Link href="/about">About</Link>
        </li>
        <li>
        <Link href="/products">Products</Link>
        </li>
        <li>
        <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
    <Component {...pageProps} />
    </>
  )
}