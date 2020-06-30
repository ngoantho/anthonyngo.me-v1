import { css } from "@emotion/core"
import { container } from "@styles/Container.module.css"
import Header from "@components/Header"

const Home = ({ metadata }) => {
  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <Header metadata={metadata} />
      <main
        className={container}
        css={css`
          height: 1000px;
        `}
       />
    </main>
  )
}

export async function getStaticProps() {
  return {
    props: {
      metadata: [
        {
          id: "landing1",
          name: "Landing1",
          visible: true,
        },
        {
          id: "landing2",
          name: "Landing2",
          visible: true,
        },
        {
          id: "landing3",
          name: "Landing3",
          visible: true,
        },
      ],
    },
  }
}

export default Home
