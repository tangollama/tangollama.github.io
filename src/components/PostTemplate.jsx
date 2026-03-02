import React from "react";
import { Container, Image } from "react-bootstrap";
import PageLayout from "./PageLayout.jsx";
import PageTitle from "./PageTitle.jsx";
import SubTitle from "./SubTitle.jsx";
import pkg from 'disqus-react';
const {Disqus} = pkg;

export default ({
  title,
  subTitle,
  pubDate,
  featuredImage,
  disqusConfig,
}) => (
  <PageLayout>
    <Container className="text-center" fluid>
      <PageTitle title={title} />
      <SubTitle subTitle={subTitle} pubDate={pubDate} disqusConfig={disqusConfig} />
      <Image fluid src={featuredImage} alt={title} />
      <Container style={{ marginTop: "20px" }} className="text-justify">
        {disqusConfig && <Disqus config={disqusConfig} />}
      </Container>
    </Container>
  </PageLayout>
);
