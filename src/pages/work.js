import * as React from "react";
import { Layout, Link } from "../components/index";

const WorkPage = () => {
  return (
    <Layout pageTitle="Work">
      <title>Work</title>
      <h1>Work</h1>
      <Link href="/Works/Valice" target="_self">
        Valice
      </Link>
    </Layout>
  );
};

export default WorkPage;
