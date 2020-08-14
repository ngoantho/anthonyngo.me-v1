import { ExtPage, Icon, Link } from "styles";
import { colors, config } from "theme";
import { cx, useOnScreen } from "utils/index";
import { useEffect, useRef, useState } from "react";

import Head from "next/head";
import { getProjectsFrom } from "../lib/api";
import { join } from "path";
import { lighten } from "polished";
import { styled } from "goober";

const {
  site: { url },
  commonTransition,
  commonMargin,
  navDelay,
  delayTr = 100,
  delayEntry = 25,
} = config;

const S = {
  MainContainer: styled(ExtPage)`
    header {
      margin: 0 auto;
    }
  `,
  BigTitle: styled("h1")`
    font-weight: 500;
    line-height: 1.1;
    @media (min-width: 40rem) and (max-width: 80rem) {
      font-size: 5.75rem;
    }
    @media (min-width: 80rem) {
      font-size: 6.9rem;
    }
  `,
  BigSubtitle: styled("h2")`
    margin-top: -1rem;
    line-height: 1.5;
    font-size: 100%;
    font-weight: 400;
    color: ${lighten(0.35, colors.quaternary)};
    @media (min-width: 40rem) and (max-width: 80rem) {
      font-size: 125%;
    }
    @media (min-width: 80rem) {
      font-size: 150%;
    }
  `,
  TableContainer: styled("div")`
    margin: 0 auto;
    @media (min-width: 40rem) {
      padding-left: ${commonMargin * 1.25}rem;
    }
  `,
  Table: styled("table")`
    display: table;
    border-collapse: collapse;

    .mobile-hide {
      @media (max-width: 40rem) {
        display: none;
      }
    }

    thead tr {
      transition-delay: ${delayTr}ms;
    }

    tbody tr {
      transition: ${commonTransition};
      &:hover,
      &:focus {
        background-color: ${colors.tintLight};
      }
    }

    th,
    td {
      cursor: default;
    }

    td {
      border-style: hidden;
      &.year {
        font-family: "mono", monospace;
        color: ${colors.secondary};
      }
      &.title {
        font-weight: 700;
      }
      &.company {
        span[data-type="regular"] {
          font-weight: 400;
        }
        span[data-type="noop"] {
          font-family: "mono", monospace;
        }
      }
      &.tags {
        font-family: "mono", monospace;
        span {
          display: inline-block;
          font-size: smaller;
        }
        .separator {
          margin: 0 0.5rem;
        }
      }
      &.links {
        span {
          display: flex;
          align-items: center;

          a img {
            width: 50%;
            height: auto;
          }
        }
      }
    }
  `,
};

function ArchiveEntry({ frontMatter, index }) {
  const { date, title, tags, company, github, external } = frontMatter;

  const ref = useRef(null);
  const visible = useOnScreen(ref);

  return (
    <tr
      tabIndex="0"
      ref={ref}
      className={cx("fadeup", visible && "active")}
      style={{
        transitionDelay: `${(index + 1) * delayEntry}ms`,
      }}>
      <td className="year">{`${new Date(date).getFullYear()}`}</td>
      <td className="title">{title}</td>
      <td className="company mobile-hide">
        {company ? (
          <span data-type="regular">{company}</span>
        ) : (
          <span data-type="noop">-</span>
        )}
      </td>
      <td className="tags mobile-hide">
        {tags &&
          tags.map((tag, i) => (
            <span key={i}>
              {tag}
              {""}
              {i !== tags.length - 1 && (
                <span className="separator">&middot;</span>
              )}
            </span>
          ))}
      </td>
      <td className="links">
        <span>
          {github && (
            <Link
              href={`//github.com/ngoantho/${github}`}
              target="_blank"
              rel="nofollow noopener noreferrer">
              <Icon
                src={require("public/icons/github-mark-light.png")}
                alt={github}
              />
            </Link>
          )}
          {external && (
            <Link
              href={`//${external}`}
              target="_blank"
              rel="nofollow noopener noreferrer">
              <Icon src={require("public/icons/external.png")} alt={external} />
            </Link>
          )}
        </span>
      </td>
    </tr>
  );
}

export default function Archive({ projects }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const mountId = setTimeout(() => {
      setMounted(true);
    }, navDelay / 4);
    return () => clearTimeout(mountId);
  }, []);

  return (
    <>
      <Head>
        <title>Archive | Anthony Ngo</title>
        <link rel="canonical" href={`${url}/archive`} />
      </Head>
      <S.MainContainer>
        <header className={cx("fadeup", mounted && "active")}>
          <S.BigTitle>Archive</S.BigTitle>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <S.BigSubtitle>A list of things I've worked on</S.BigSubtitle>
        </header>
        <S.TableContainer>
          <S.Table>
            <thead>
              <tr className={cx("fadeup", mounted && "active")}>
                <th>Year</th>
                <th>Title</th>
                <th className="mobile-hide">Made at</th>
                <th className="mobile-hide">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(({ frontMatter }, i) => (
                <ArchiveEntry frontMatter={frontMatter} key={i} index={i} />
              ))}
            </tbody>
          </S.Table>
        </S.TableContainer>
      </S.MainContainer>
    </>
  );
}

export async function getStaticProps() {
  const projectsDir = join(process.cwd(), "src/assets/projects");

  return {
    props: {
      projects: await getProjectsFrom(projectsDir),
    },
  };
}
