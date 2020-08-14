import { colors, config } from "theme";
import { useEffect, useState } from "react";

import { ExtPage } from "styles";
import Head from "next/head";
import Link from "next/link";
import { cx } from "utils/index";
import { styled } from "goober";

const { commonMargin, commonTransition, navDelay } = config;

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
  const [repo, setRepo] = useState(undefined);
  let target;
  useEffect(() => {
    const id = setTimeout(() => {
      target = window.location.pathname.substring(1);
    }, 0);
    return () => clearTimeout(id);
  }, []);
  useEffect(() => {
    fetch("https://api.github.com/users/ngoantho/repos")
      .then((response) => response.json())
      .then((json) => {
        const found = json.find(({ name }) => name === target);
        setRepo(found);
      })
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    if (typeof repo !== "undefined") {
      window.location.replace(`https://github.com/${repo.full_name}`);
    }
  }, [repo]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const mountId = setTimeout(() => {
      setMounted(true);
    }, navDelay / 2);
    return () => clearTimeout(mountId);
  }, []);

  return typeof repo !== "undefined" ? (
    <S.MainContainer>
      <p>Redirecting...</p>
    </S.MainContainer>
  ) : (
    <>
      <Head>
        <title>404 | Anthony Ngo</title>
      </Head>
      <S.MainContainer className={cx("fade", mounted && "active")}>
        <S.Title>404</S.Title>
        <S.Subtitle>Page Not Found</S.Subtitle>
        <Link href="/" passHref>
          <S.HomeButton className="button button-outline">go back</S.HomeButton>
        </Link>
      </S.MainContainer>
    </>
  );
}
