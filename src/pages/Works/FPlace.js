import * as React from "react";
import { navigate } from "gatsby";
import { styled } from "../../../stitches.config";
import { Layout, Title, Paragraph, Button } from "../../components/index";
import Image1 from "../../images/FPlace/1.jpg";

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
  return (
    <Layout pageTitle="FPlace">
      <title>FPlace</title>
      <PageContainer>
        <RowContainer>
          <StyledLeft>
            <Button onClick={work}>Go Back</Button>
            <Title>FPlace</Title>
            <Paragraph>
              A system that detects the movement in a room, and in each specific
              place through Processing. What happens is that the program uses
              the camera and detects if there is a difference in pixels at each
              frame. If there is, it means that there is movement and the
              program considers the place occupied. However, this condition is
              not straightforward. What do I mean by this? That the place will
              only be occupied after x minutes of movement, and will only be
              vacant after x more minutes. By doing this, my idea was to prevent
              cases of leaving the room that do not mean that the person has
              actually left. This data is all passed to the web via javascript.
              The processing generates some txt documents and through
              javascript, I read these documents and perform actions on them. In
              addition to the program providing the capacity of each room and
              the number of free seats (all variables that come directly from
              the processing), I chose to have a specific page of the room with
              a heatmap of the same. I thought it was important because many
              times we don't go to study alone, and in this way we can
              understand, inside the room, where the places are located.
            </Paragraph>
            <Paragraph>
              Being a platform for students, it was an important point for me
              ensure it was quick to learn. what do i mean by this? There are
              platforms that are so complex that it almost takes a manual to
              know how to handle them. I didn't want this at all happened so
              what I did was play with simplicity. I also tried to go get some
              references of applications of data and list visualization, in
              order to make the similar user experience.
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
          </ImagesContainer>
        </ColumnContainer>
      </PageContainer>
    </Layout>
  );
};

export default ValicePage;
