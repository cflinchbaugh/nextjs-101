import Link from "next/link"

const Layout = ({ children }) => {
  return (
    <>
      <Link href="/">Home</Link>

      <div>
        Alt Layout Nav
      </div>

      <main>
        {children}
      </main>

      <footer>
        Footer
      </footer>
    </>
  )
}

export default Layout