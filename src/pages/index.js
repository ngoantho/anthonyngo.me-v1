import { Layout } from "@/components";
import { Main } from "@/styles";
import dynamic from "next/dynamic";
import { hash } from "@/utils";
import { useState, useEffect } from "react";

const Index = ({ metadata }) => {
  const [sectionHolders, setSectionHolders] = useState([]);
  useEffect(() => {
    const componentPromises = metadata.map(async ({ bind }) => {
      const View = dynamic(() =>
        import(`../components/sections/${bind}`)
          // eslint-disable-next-line max-nested-callbacks
          .catch(() => console.error(`Binder '${bind}' not found!`))
      );
      return <View key={hash(bind)} />;
    });
    Promise.all(componentPromises).then(setSectionHolders);
  }, [metadata]);

  return (
    <Layout>
      {/* header */}
      <Main>
        {sectionHolders}
        {/* sections */}
      </Main>
      {/* footer */}
    </Layout>
  );
};

export async function getStaticProps() {
  const { metadata } = await import("@/components/sections/index");

  return {
    props: {
      metadata,
    },
  };
}

export default Index;
