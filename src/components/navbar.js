/* eslint-disable react/prop-types */
import {
  borderRadius,
  colors,
  commonMargin,
  commonTransition,
  navDelay,
  navHeight,
  navLinks,
  navScrollHeight,
} from "theme";
import { useEffect, useState } from "react";

import { Link as BaseLink } from "styles";
import Menu from "./mobmenu";
import NextLink from "next/link";
import { cx } from "utils/index";
import { styled } from "goober";

const S = {
  BaseHeader: styled("header")`
    top: 0;
    right: ${commonMargin / 2}rem;
    z-index: 2;
    position: fixed;
    transition: ${commonTransition};
    @media (min-width: 40rem) {
      right: ${commonMargin * 1.25}rem;
    }
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
    height: ${(props) =>
      props.scrollDirection === "none"
        ? `${props.isMobile ? navHeight : 0}px`
        : `${navScrollHeight}px`};
    transform: translateY(
      ${(props) =>
        props.scrollDirection === "down" ? `-${navScrollHeight}px` : "0px"}
    );
    &.lift {
      z-index: 99;
    }
  `,
  NavLinks: styled("div")`
    display: flex;
    align-items: center;
    z-index: 3;
    transition: ${commonTransition};
    padding: ${commonMargin / 2}rem;
    background: ${(props) =>
      props.scrollDirection === "none" ? "transparent" : "white"};
    box-shadow: ${(props) =>
      props.scrollDirection === "up"
        ? "-2px 2px 5px 0px rgba(0, 0, 0, 0.25)"
        : "none"};
    @media (max-width: 40rem) {
      display: none;
    }
  `,
  Hamburger: styled(S.BaseHamburger)`
    height: calc(
      ${(props) => (props.scrollDirection !== "none" ? "35%" : "25%")} + 1rem
    );
    @media (min-width: 40rem) {
      display: none;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    --base-width: 3rem;
    &.on {
      padding-right: 12px;
    }
  `,
};
S.with = {
  HamburgerLine: styled("div")`
    background: ${colors.tertiary};
    height: 0.2rem;
    border-radius: ${borderRadius};
    transition: ${commonTransition};
    &.line1 {
      width: calc(var(--base-width) + 0.5rem);
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
      width: calc(var(--base-width) - 0.5rem);
      transform-origin: 100% 0;
      &.on {
        width: var(--base-width);
        transform: rotate(45deg);
      }
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
    }
  `,
  ResumeButton: styled(BaseLink)`
    font-family: "Roboto", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    margin-bottom: 0px !important;
  `,
};

const DELTA = 5;

function Navbar({ homePage, menuOpen, setMenuOpen, mobile }) {
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
    <>
      <S.layout.Container
        scrollDirection={scrollDirection}
        isMobile={mobile}
        className={menuOpen ? "lift" : ""}>
        <S.layout.NavLinks scrollDirection={scrollDirection}>
          <S.with.NavLinksList>
            {navLinks.map(([name, hash], i) => (
              <S.with.NavLinksItem
                key={i}
                className={cx("fadedown", mounted && "active")}
                style={{
                  transitionDelay: `${(i + 1) * 25}ms`,
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
              transitionDelay: `${(navLinks.length + 1) * 25}ms`,
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
            transitionDelay: `${100}ms`,
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          scrollDirection={scrollDirection}>
          <S.with.HamburgerLine className={cx("line1", menuOpen && "on")} />
          <S.with.HamburgerLine className={cx("line2", menuOpen && "on")} />
          <S.with.HamburgerLine className={cx("line3", menuOpen && "on")} />
        </S.layout.Hamburger>
      </S.layout.Container>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </>
  );
}

export default Navbar;
