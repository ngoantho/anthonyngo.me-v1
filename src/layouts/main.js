import Header from "components/header/Header"

const MainLayout = ({ children }) => {
  return (
    <>
      <div id="container">
        <Header />
        {children}
      </div>
      <style jsx global>{`
        #__next {
          height: 100%;
        }
      `}</style>
      <style jsx>{`
        #container {
          max-width: 80rem;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

export default MainLayout
