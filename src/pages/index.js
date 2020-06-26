/* eslint-disable no-unused-vars */
import Head from "next/head";
import Landing from "@/components/templates/Landing";

/**
 * @todo Landing Page
 * @body Grab metadata from dynamic imports of templates, push metadata to global React context, populate Header list
 */
const Home = () => {
  return (
    <div className="container">
      <main>
        <Landing />
      </main>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: {},
  };
}

export default Home;
