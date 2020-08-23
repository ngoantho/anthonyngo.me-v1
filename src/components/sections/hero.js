/* eslint-disable react/prop-types */

import { commonMargin, commonTransition, navDelay } from "theme";
import { useEffect, useState } from "react";

import { cx } from "utils";
import { styled } from "goober";

const StyledContainer = styled("div")`
  @media (min-width: 40rem) {
    padding-right: ${commonMargin * 1.25}rem !important;
  }
`;

const StyledBlurb = styled("blockquote")`
  strong {
    line-height: 2.5;
    @media (min-width: 80rem) {
      font-size: x-large;
    }
    @media (min-width: 40rem) and (max-width: 80rem) {
      font-size: large;
    }
  }
  div > p {
    @media (min-width: 80rem) {
      font-size: x-large;
    }
    @media (min-width: 40rem) and (max-width: 80rem) {
      font-size: large;
    }
    a {
      transition: ${commonTransition};
    }
  }
`;

const Hero = ({ data, ...props }) => {
  const { html } = data;
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountId = setTimeout(() => {
      setMounted(true);
    }, navDelay / 2);
    return () => clearTimeout(mountId);
  }, []);

  return (
    <StyledContainer className="row">
      <StyledBlurb
        {...props}
        className={cx("column", "fadeup", mounted && "active")}>
        <strong>{"Hi, I'm Anthony Ngo."}</strong>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </StyledBlurb>
    </StyledContainer>
  );
};

export default Hero;
