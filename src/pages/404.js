import { colors, config } from "theme";

import { ExtPage } from "styles";
import Head from "next/head";
import Link from "next/link";
import { styled } from "goober";

const { commonMargin, commonTransition } = config;

const S = {
  MainContainer: styled(ExtPage)`
    align-items: center;
    justify-content: center;
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
    margin-top: ${commonMargin}rem;
    transition: ${commonTransition};
  `,
};

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 | Anthony Ngo</title>
      </Head>
      <S.MainContainer>
        <S.Title>404</S.Title>
        <S.Subtitle>Page Not Found</S.Subtitle>
        <Link href="/" passHref>
          <S.HomeButton className="button button-outline">go back</S.HomeButton>
        </Link>
      </S.MainContainer>
    </>
  );
}
