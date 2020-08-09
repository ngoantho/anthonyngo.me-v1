import Head from "next/head";
import { Layout } from "components";
import Link from "next/link";
import { colors } from "theme";
import { getProjectByFile } from "../lib/api";
import { styled } from "goober";

const S = {
  MainContainer: styled("section")`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto 0 auto;
  `,
  Title: styled("h1")`
    font-family: "mono", monospace;
    font-size: 12vw;
    line-height: 1;
    color: ${colors.secondary};
    @media (min-width: 40rem) and (max-width: 80rem) {
      font-size: 16rem;
    }
    @media (max-width: 40rem) {
      font-size: 12rem;
    }
  `,
  Subtitle: styled("h2")`
    font-size: 3vw;
    font-weight: 400;
    @media (min-width: 40rem) and (max-width: 80rem) {
      font-size: 4rem;
    }
    @media (max-width: 40rem) {
      font-size: 3rem;
    }
  `,
  HomeButton: styled("a")`
    margin-top: 4rem;
  `,
};

export default function Custom404({ footerData }) {
  return (
    <Layout footerData={footerData}>
      <Head>
        <title>404 | Anthony Ngo</title>
      </Head>
      <S.MainContainer>
        <S.Title>404</S.Title>
        <S.Subtitle>Page Not Found</S.Subtitle>
        <Link href="/">
          <S.HomeButton className="button button-outline" href="/">
            go back
          </S.HomeButton>
        </Link>
      </S.MainContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      footerData: await getProjectByFile("src/assets/sections/footer.md"),
    },
  };
}
