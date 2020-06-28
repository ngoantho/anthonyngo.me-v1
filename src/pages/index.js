/* eslint-disable no-unused-vars */
import Head from "next/head"
import { Landing } from "@/components/templates"

// TODO Landing page
const Home = ({ metadata }) => {
  return (
    <div className="container">
      <main>
        <Landing />
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const { metadata: Landing } = await import(
    "@/components/templates/Landing.mdx"
  )

  return {
    props: {
      metadata: [Landing],
    },
  }
}

export default Home
