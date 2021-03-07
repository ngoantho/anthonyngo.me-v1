import Head from "next/head"

let HomepageLayout = ({ children }) => {
  return (
    <>
      {children}
      <Head>
        <title>Anthony Ngo</title>
      </Head>
      <style jsx global>{`
        main#home {
          & h1 {
            text-underline-offset: 1rem;
            text-decoration-thickness: 0.1rem
          }

          & > ul {
            list-style: none;
            columns: 2;
            & li::before {
              content: "▹";
              padding-right: 0.5rem;
            }
          }
        }
      `}</style>
    </>
  )
}

export default HomepageLayout
