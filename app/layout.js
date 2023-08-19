export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <h1>Navbar</h1>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
