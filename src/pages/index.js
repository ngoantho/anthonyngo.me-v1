/* eslint-disable no-unused-vars */
import Head from "next/head";
import Landing from "@/components/templates/Landing";

// TODO Landing page
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
