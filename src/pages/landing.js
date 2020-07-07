import MDXContent from "@/assets/landing/index.mdx";
import { useTheme } from "@/utils";

const Landing = ({ frontMatter }) => {
  const theme = useTheme();
  console.log(theme);

  return (
    <section>
      <MDXContent />
    </section>
  );
};

Landing.getMetadata = async () => {
  const { metadata: landing } = await import("@/assets/landing/index.mdx");
  return {
    landing,
  };
};

export default Landing;
