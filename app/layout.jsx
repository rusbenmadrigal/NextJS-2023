import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>Navbar</h1>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
