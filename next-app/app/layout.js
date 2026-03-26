export const metadata = {
  title: "Next.js 13 Tutorial - Build With Rudraksh",
  description: "Learn Next.js 13 with Build With Rudraksh. This tutorial covers all the new features and improvements in Next.js 13, including the new app directory, server components, and more.",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
    <body>
      <header style={{ backgroundColor: "lightgray", padding: "1rem" }}>
        <h1>Header of the page</h1>
      </header>
      {children}
      <footer style={{ backgroundColor: "lightgray", padding: "1rem" }}>
        <h1>Footer of the page</h1>
      </footer>
    </body>
    </html>
  );
}
