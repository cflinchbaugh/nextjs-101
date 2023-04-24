import useSwapi from "../../api/useSwapi"

const Layout = ({ children }) => {
  return (
    <>
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