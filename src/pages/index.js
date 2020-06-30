import { css } from "@emotion/core";
import { container } from "@styles/Container.module.css";
import Header from "@components/Header";
import Landing from "@components/Landing";

const Home = ({ metadata }) => {
  return (
    <main
      css={css`
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}>
      <Header metadata={metadata} />
      <main className={container}>
        <Landing />
      </main>
    </main>
  );
};

export async function getStaticProps() {
  const { metadata: Landing } = await import("@components/Landing");

  return {
    props: {
      metadata: [Landing],
    },
  };
}

export default Home;
