import * as React from "react";
import { styled } from "../../stitches.config";
import { Layout, Footer, Subtitle } from "../components/index";

const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
});

const ContactPage = () => {
  return (
    <PageContainer>
      <Layout pageTitle="Contact">
        <title>Contact</title>
        <Subtitle>
          Hello there! <br /> How can I help you?
        </Subtitle>
      </Layout>
      <Footer />
    </PageContainer>
  );
};

export default ContactPage;
