import * as React from "react";
import { styled } from "../../stitches.config";
import {
  Layout,
  Title,
  Subtitle,
  Link,
  Paragraph,
  Footer,
  Navbar,
} from "../components/index";
import Yo from "../images/eu.jpeg";

const StyledContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  "@bp2": { width: "40%" },
});

const RowContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@bp2": { flexDirection: "row" },
});

const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "5rem 0rem",
});

const AboutPage = () => {
  return (
    <div>
      <Navbar variant2="active" />
      <Layout pageTitle="About Me">
        <title>About Me</title>
        <PageContainer>
          <RowContainer>
            <StyledContainer>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </Paragraph>
            </StyledContainer>
            <img src={Yo} width="50%" alt="Yo" />
          </RowContainer>
          <Paragraph>download</Paragraph>
          <Link>pt CV</Link>
          <br />
          <br />
          <Subtitle>Let's talk 😊</Subtitle>
          <Paragraph>geirinhas.beatriz@gmail.com</Paragraph>
        </PageContainer>
      </Layout>
      <Footer />
    </div>
  );
};

export default AboutPage;
