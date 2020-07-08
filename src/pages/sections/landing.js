import MDXContent from "./landing.mdx";
import { styled } from "linaria/react";
import { useTheme } from "@/utils";

const Landing = ({ frontMatter }) => {
  const theme = useTheme();
  console.log(frontMatter)

  return (
    <section>
      <MDXContent />
    </section>
  );
};

Landing.getServerData = async () => {
  const { metadata } = await import("./landing.mdx");
  return {
    metadata,
  };
};

export default Landing;
