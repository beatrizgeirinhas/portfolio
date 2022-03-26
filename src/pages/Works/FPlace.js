import * as React from "react";
import { navigate } from "gatsby";
import { styled } from "../../../stitches.config";
import {
  Layout,
  Title,
  Paragraph,
  Button,
  NextProject,
  Footer,
} from "../../components/index";
import Image1 from "../../images/Test/1.jpg";
import Image2 from "../../images/Test/2.jpg";
import Image3 from "../../images/Test/3.jpg";
import Image4 from "../../images/Test/4.jpg";

const PageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "5rem 0rem",
});

const RowContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  "@bp2": { flexDirection: "row" },
});

const ColumnContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
});

const StyledLeft = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  paddingRight: "6rem",
  "@bp2": { width: "50%" },
});

const StyledRight = styled("div", {
  fontSize: "14px",
  paddingTop: "3rem",
});

const ImagesContainer = styled("div", {
  display: "flex",
  flexDirection: "row",
  padding: "4rem 0rem",
});

const ValicePage = () => {
  const work = () => {
    navigate("/work");
  };
  const Dodoc = () => {
    navigate("/Works/Dodoc");
  };
  return (
    <div>
      <Layout pageTitle="FPlace">
        <title>FPlace</title>
        <PageContainer>
          <RowContainer>
            <StyledLeft>
              <Button onClick={work}> ← Back to works</Button>
              <Title>FPlace</Title>
              <Paragraph>
                FPlace is a system that detects the movement in a room, and in
                each specific place through Processing. <br /> <br />
                What happens is that the program uses the camera and detects if
                there is a difference in pixels at each frame. If there is, it
                means that there is movement and the program considers the place
                occupied. However, this condition is not straightforward. What
                do I mean by this? That the place will only be occupied after x
                minutes of movement, and will only be vacant after x more
                minutes.
                <br />
                <br />
                This data is all passed to the web via JavaScript. <br />
                The Processing generates some txt documents and through
                JavaScript, I read these documents and perform actions on them.
                <br /> <br />
                In addition to the program providing the capacity of each room
                and the number of free seats (all variables that come directly
                from the processing), I chose to have a specific page of the
                room with a heatmap of the same. I thought it was important
                because many times we don't go to study alone, and in this way
                we can understand, inside the room, where the places are
                located.
              </Paragraph>
            </StyledLeft>
            <StyledRight>
              <Paragraph>
                <b>Branding, Service Design, UI/UX</b>
              </Paragraph>
              <Paragraph>June 2020</Paragraph>
              <Paragraph>
                <b>Platforms:</b> JavaScript, HTML, CSS, Processing
              </Paragraph>
            </StyledRight>
          </RowContainer>
          <ColumnContainer>
            <ImagesContainer>
              <img src={Image1} width="50%" alt="Image1" />
              <img src={Image2} width="50%" alt="Image2" />
            </ImagesContainer>
            <br />
            <br />
            <Paragraph>
              Being a platform for students, it was an important point for me
              ensure it was quick to learn. what do i mean by this? There are
              platforms that are so complex that it almost takes a manual to
              know how to handle them. I didn't want this at all happened so
              what I did was play with simplicity. I also tried to go get some
              references of applications of data and list visualization, in
              order to make the similar user experience.
            </Paragraph>
            <ImagesContainer>
              <img src={Image3} width="50%" alt="Image3" />
              <img src={Image4} width="50%" alt="Image4" />
            </ImagesContainer>
          </ColumnContainer>
        </PageContainer>
      </Layout>
      <NextProject title="Dodoc" onClick={Dodoc} />
      <Footer />
    </div>
  );
};

export default ValicePage;
