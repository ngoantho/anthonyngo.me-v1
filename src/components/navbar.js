import { Link as BaseLink, Icon } from "styles";
import { colors, config } from "theme";
import { useEffect, useState } from "react";

import Link from "next/link";
import Menu from "./mobmenu";
import { lighten } from "polished";
import { styled } from "goober";

const {
  navHeight,
  navScrollHeight,
  navLinks,
  hamburgerClamp,
  hamHeight,
  hamVisibleCutoff,
  commonMargin,
  commonTransition,
  borderRadius,
} = config;

const S = {};
S.layout = {
  Container: styled("header")`
    display: flex;
    justify-content: space-between;
    top: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    padding: 0 ${commonMargin}rem;
    position: fixed;
    transition: ${commonTransition};
    background: var(--glob-bg);
    box-shadow: ${(props) =>
      props.scrollDirection === "up"
        ? "0px 2px 5px 0px rgba(0, 0, 0, 0.5)"
        : "none"};
    height: ${(props) =>
      props.scrollDirection === "none"
        ? `${navHeight}px`
        : `${navScrollHeight}px`};
    transform: translateY(
      ${(props) =>
        props.scrollDirection === "down" ? `-${navScrollHeight}px` : "0px"}
    );
  `,
  MainNav: styled("nav")`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    z-index: 3;
    width: 100%;
    font-family: "mono", monospace;
  `,
  Hamburger: styled("button")`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    cursor: pointer;
    height: calc(25% + 1rem);
    border-color: transparent;
    padding: 0.5rem;
    margin-bottom: 0;
    transition: ${commonTransition};
    @media (min-width: ${hamVisibleCutoff}) {
      display: none;
    }
  `,
  NavLinks: styled("div")`
    display: flex;
    align-items: center;
    @media (max-width: ${hamVisibleCutoff}) {
      display: none;
    }
  `,
};
S.with = {
  HamburgerLine: styled("div")`
    background: ${colors.tertiary};
    height: ${`${hamHeight}rem`};
    border-radius: ${borderRadius};
    width: ${(props) => `${hamburgerClamp - props.line / 2}rem`};
  `,
  Logo: styled("div")`
    display: grid;
    height: ${(props) => `${props.size}px`};
    transition: ${commonTransition};
    a {
      margin: auto;
    }
    &.blur {
      filter: opacity(${(props) => props.blurAmount});
    }
  `,
  NavLinksList: styled("ul")`
    padding: 0;
    margin-bottom: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
  `,
  NavLinksItem: styled("li")`
    margin: 0 1rem;
    a {
      font-weight: 400;
      padding: 1rem 1rem;
      color: ${lighten(0.5, colors.quaternary)};
    }
  `,
  ResumeButton: styled(BaseLink)`
    font-family: "system", sans-serif;
    margin-left: 1rem;
    margin-bottom: 0px !important;
  `,
};

const DELTA = 5;

function Navbar({ menuOpen, setMenuOpen, blurAmount, homePage }) {
  const [scrollDirection, setScrollDirection] = useState("none");
  let prev = 0;
  let curr = 0;

  const handleScroll = (e) => {
    curr = e.currentTarget.scrollY;

    if (Math.abs(curr - prev) <= DELTA || menuOpen) {
      return;
    }

    if (curr <= DELTA) {
      setScrollDirection("none");
    } else if (prev > curr) {
      if (scrollDirection !== "up") {
        setScrollDirection("up");
      }
    } else if (prev < curr && curr > navHeight / 2) {
      if (scrollDirection !== "down") {
        setScrollDirection("down");
      }
    }

    prev = e.currentTarget.scrollY;
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.layout.Container scrollDirection={scrollDirection}>
      <S.layout.MainNav>
        <S.with.Logo
          tabIndex="-1"
          size="48"
          blurAmount={blurAmount}
          className={[menuOpen && "blur"].filter(Boolean)}>
          {homePage ? (
            <a href="/">
              <Icon src={require("public/favicons/favicon48.png")} alt="Home" />
            </a>
          ) : (
            <Link href="/" passHref>
              <BaseLink>
                <Icon
                  src={require("public/favicons/favicon48.png")}
                  alt="Home"
                />
              </BaseLink>
            </Link>
          )}
        </S.with.Logo>
        <S.layout.NavLinks>
          <S.with.NavLinksList>
            {navLinks.map(([name, hash], i) => (
              <S.with.NavLinksItem key={i}>
                <Link href={{ pathname: "/", hash }} passHref>
                  <BaseLink>{name}</BaseLink>
                </Link>
              </S.with.NavLinksItem>
            ))}
          </S.with.NavLinksList>
          <S.with.ResumeButton
            href="/resume.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="button button-outline"
            title="View my resumé">
            Resumé
          </S.with.ResumeButton>
        </S.layout.NavLinks>
        <S.layout.Hamburger
          className="button-outline"
          onClick={() => setMenuOpen(!menuOpen)}>
          <S.with.HamburgerLine line="1" />
          <S.with.HamburgerLine line="2" />
          <S.with.HamburgerLine line="3" />
        </S.layout.Hamburger>
      </S.layout.MainNav>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </S.layout.Container>
  );
}

export default Navbar;
