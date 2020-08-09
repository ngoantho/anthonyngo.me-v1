import { colors, config } from "theme";
import { css, styled } from "goober";
import { getProjectByFile, getProjectsFrom } from "../lib/api";

import Head from "next/head";
import { Layout } from "components";
import { join } from "path";
import { lighten } from "polished";

const {
  site: { url },
} = config;

const S = {
  MainContainer: styled("section")`
    display: flex;
    flex-direction: column;
    margin: auto 0 auto;
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
    margin: 7.5rem 1rem;
    @media (min-width: 40rem) {
      margin: 7.5rem 2rem;
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

    tbody tr {
      &:hover,
      &:focus {
        background-color: ${lighten(0.05, "#2c2f34")};
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
        color: var(--colors-accent);
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

export default function Archive({ projects, footerData }) {
  return (
    <Layout footerData={footerData}>
      <Head>
        <title>Archive | Anthony Ngo</title>
        <link rel="canonical" href={`${url}/archive`} />
      </Head>
      <S.MainContainer>
        <header
          className={css`
            margin-left: 2rem;
          `}>
          <S.BigTitle>Archive</S.BigTitle>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <S.BigSubtitle>A list of things I've worked on</S.BigSubtitle>
        </header>
        <S.TableContainer>
          <S.Table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Title</th>
                <th className="mobile-hide">Made at</th>
                <th className="mobile-hide">Built with</th>
                <th>Link</th>
              </tr>
            </thead>
            <tbody>
              {projects.map(({ frontMatter }, i) => {
                const {
                  date,
                  title,
                  tags,
                  company,
                  github,
                  external,
                } = frontMatter;
                return (
                  <tr key={i}>
                    <td className="year">{`${new Date(
                      date
                    ).getFullYear()}`}</td>
                    <td className="title">{title}</td>
                    <td className="company mobile-hide">
                      {company ? (
                        <span data-type="regular">{company}</span>
                      ) : (
                        <span data-type="noop">-</span>
                      )}
                    </td>
                    <td className="tags mobile-hide">
                      {tags.map((tag, i) => (
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
                          <a
                            href={`//github.com/ngoantho/${github}`}
                            target="_blank"
                            rel="nofollow noopener noreferrer">
                            <img
                              src={require("public/icons/github-mark-light.png")}
                              alt={github}
                            />
                          </a>
                        )}
                        {external && (
                          <a
                            href={`//${external}`}
                            target="_blank"
                            rel="nofollow noopener noreferrer">
                            <img
                              src={require("public/icons/external.png")}
                              alt={external}
                            />
                          </a>
                        )}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </S.Table>
        </S.TableContainer>
      </S.MainContainer>
    </Layout>
  );
}

export async function getStaticProps() {
  const projectsDir = join(process.cwd(), "src/assets/projects");

  return {
    props: {
      projects: await getProjectsFrom(projectsDir),
      footerData: await getProjectByFile("src/assets/sections/footer.md"),
    },
  };
}
