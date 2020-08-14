import { Link as BaseLink, Icon } from "styles";
import { colors, config } from "theme";
import { useEffect, useState } from "react";

import Menu from "./mobmenu";
import NextLink from "next/link";
import { cx } from "utils";
import { lighten } from "polished";
import { styled } from "goober";

const {
  navHeight,
  navScrollHeight,
  navLinks,
  navDelay,
  hamburgerClamp,
  hamHeight,
  hamVisibleCutoff,
  commonMargin,
  commonTransition,
  borderRadius,
} = config;

const S = {
  BaseHeader: styled("header")`
    display: flex;
    justify-content: space-between;
    top: 0;
    right: 0;
    z-index: 2;
    width: 100%;
    padding: 0 ${commonMargin}rem;
    position: fixed;
    transition: ${commonTransition};
  `,
  BaseHamburger: styled("button")`
    cursor: pointer;
    border-color: transparent;
    padding: 0.5rem;
    margin-bottom: 0;
    transition: ${commonTransition};
  `,
};
S.layout = {
  Container: styled(S.BaseHeader)`
    background: ${(props) =>
      props.scrollDirection === "none" ? "transparent" : "var(--glob-bg)"};
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
  NavLinks: styled("div")`
    display: flex;
    align-items: center;
    @media (max-width: ${hamVisibleCutoff}) {
      display: none;
    }
  `,
  Hamburger: styled(S.BaseHamburger)`
    height: calc(
      ${(props) => (props.scrollDirection !== "none" ? "35%" : "25%")} + 1rem
    );
    @media (min-width: ${hamVisibleCutoff}) {
      display: none;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    --base-width: ${hamburgerClamp - 1}rem;
    &.on {
      padding-right: ${hamburgerClamp * 3}px;
    }
  `,
};
S.with = {
  HamburgerLine: styled("div")`
    background: ${colors.tertiary};
    height: ${`${hamHeight}rem`};
    border-radius: ${borderRadius};
    transition: ${commonTransition};

    &.line1 {
      width: ${hamburgerClamp - 1 / 2}rem;
      transform-origin: 100% 0;
      &.on {
        width: var(--base-width);
        transform: rotate(-45deg);
      }
    }
    &.line2 {
      width: var(--base-width);
      &.on {
        transform: translateX(calc(var(--base-width) * -1));
        opacity: 0;
        visibility: hidden;
      }
    }
    &.line3 {
      width: ${hamburgerClamp - 3 / 2}rem;
      transform-origin: 100% 0;
      &.on {
        width: var(--base-width);
        transform: rotate(45deg);
      }
    }
  `,
  Logo: styled("div")`
    display: grid;
    height: ${(props) => `${props.size}px`};
    transition: ${commonTransition};
    a {
      margin: auto;
    }
    &.blur {
      pointer-events: none;
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
    font-family: "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    margin-left: 1rem;
    margin-bottom: 0px !important;
  `,
};

const DELTA = 5;
const navDelayMisc = 100;

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
    } else if (prev < curr && curr > DELTA) {
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

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const mountId = setTimeout(
      () => {
        setMounted(true);
      },
      homePage ? navDelay : 0
    );
    return () => clearTimeout(mountId);
  }, []);

  return (
    <S.layout.Container scrollDirection={scrollDirection}>
      <S.layout.MainNav>
        <S.with.Logo
          size="48"
          blurAmount={blurAmount}
          className={cx("fadedown", mounted && "active", menuOpen && "blur")}>
          <NextLink href="/" passHref>
            <BaseLink>
              <Icon
                src={require("public/favicons/favicon48.png?inline")}
                alt="Home"
              />
            </BaseLink>
          </NextLink>
        </S.with.Logo>
        <S.layout.NavLinks>
          <S.with.NavLinksList>
            {navLinks.map(([name, hash], i) => (
              <S.with.NavLinksItem
                key={i}
                className={cx("fadedown", mounted && "active")}
                style={{
                  transitionDelay: `${(i + 1) * navDelayMisc}ms`,
                }}>
                <NextLink href={{ pathname: "/", hash }} passHref>
                  <BaseLink>{name}</BaseLink>
                </NextLink>
              </S.with.NavLinksItem>
            ))}
          </S.with.NavLinksList>
          <S.with.ResumeButton
            href="/resume.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer"
            className={cx(
              "button",
              "button-outline",
              "fadedown",
              mounted && "active"
            )}
            style={{
              transitionDelay: `${(navLinks.length + 1) * navDelayMisc}ms`,
            }}
            title="View my resumé">
            Resumé
          </S.with.ResumeButton>
        </S.layout.NavLinks>
        <S.layout.Hamburger
          className={cx(
            "button-outline",
            menuOpen && "on",
            "fadedown",
            mounted && "active"
          )}
          style={{
            transitionDelay: `${navDelayMisc}ms`,
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          scrollDirection={scrollDirection}>
          <S.with.HamburgerLine className={cx("line1", menuOpen && "on")} />
          <S.with.HamburgerLine className={cx("line2", menuOpen && "on")} />
          <S.with.HamburgerLine className={cx("line3", menuOpen && "on")} />
        </S.layout.Hamburger>
      </S.layout.MainNav>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </S.layout.Container>
  );
}

export default Navbar;
