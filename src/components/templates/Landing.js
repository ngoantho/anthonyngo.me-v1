import MDXContent from "./Landing.mdx";
import styles from "@/styles/Section.module.scss";
import styled from "@emotion/styled";

const Intro = styled.h3``;
const Title = styled.h1``;
const Subtitle = styled.h2``;
const Description = styled.p``;

const Landing = () => {
  return (
    <section className={styles.landing}>
      <MDXContent
        components={{
          h3: Intro,
          h1: Title,
          h2: Subtitle,
          p: Description,
        }}
      />
    </section>
  );
};

export default Landing;
