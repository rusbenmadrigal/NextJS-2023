import Navbar from "../components/Navbar";

export const metadata = {
  title: "Welcome to my site",
  description: "My NEXT.js site",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
