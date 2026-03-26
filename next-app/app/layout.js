

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
