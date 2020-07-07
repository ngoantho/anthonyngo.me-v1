import MDXContent from "./landing.mdx";
// import { useTheme } from "@/utils";

const Landing = ({ frontMatter }) => {
  // const theme = useTheme();
  console.log(frontMatter);

  return (
    <section>
      <MDXContent />
    </section>
  );
};

Landing.getMetadata = async () => {
  const { metadata } = await import("./landing.mdx");
  return {
    metadata,
  };
};

export default Landing;
