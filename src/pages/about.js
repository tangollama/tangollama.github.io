import React from "react";
import { PageLayout, PageTitle } from "../components";
import { Container, Image } from "react-bootstrap";
import { Link, graphql } from "gatsby";
import { SEO } from "../utils";

export default ({ data }) => {
  const { unemployed } = data.site.siteMetadata;

  return (
    <PageLayout>
      <SEO title="About Me" />
      <PageTitle title="About">Me</PageTitle>
      <Container>
        <Image
          width="600"
          fluid
          src={`../../imgs/bg02.jpg`}
          alt="The worst of us are a long drawn out confession. The best of us are geniuses of compression."
        />
        <article className="w-75 m-auto pt-2 text-justify">
          <p>Hello. My name is Joel.</p>
          <p>
            I'm a technologist and GM with a background in the software and
            social sectors, today focused on helping:
            <br />
            <ul>
              <li>
                organizations express and extend their unique value(s) in code
              </li>
              <li>software companies improve their product strategies</li>
              <li>
                tech companies make sustainable contributions to social causes
              </li>
              <li>and nonprofits navigate digital transformation</li>
            </ul>
            Currently, I'm part of the Developer Products leadership team at{" "}
            <a target="_blank" href="https://stripe.com/docs" rel="noreferrer">
              Stripe
            </a>
            .
          </p>
          <p>
            Previously, I served as the head of Open Source at{" "}
            <a
              target="_blank"
              href="https://opensource.newrelic.com"
              rel="noreferrer"
            >
              New Relic
            </a>
            . Before that, I led technology and marketing for{" "}
            <a href="http://cure.org" target="_blank" rel="noreferrer">
              CURE International
            </a>
            , where I helped to reshape their brand and created{" "}
            <a target="_blank" href="http://cure.org/curekids" rel="noreferrer">
              CUREkids
            </a>
            . I'm also the co-founder of the{" "}
            <a href="http://hospitalrun.io" target="_blank" rel="noreferrer">
              HospitalRun
            </a>{" "}
            open source project and have been an{" "}
            <a
              target="_blank"
              href="https://www.messiah.edu/computer-science-concentration-and-minor-pennsylvania"
              rel="noreferrer"
            >
              adjunct instructor
            </a>{" "}
            in Computer Science at Messiah University. You can track with my
            entire work history <a href="/resume.pdf">here</a> and{" "}
            <a
              href="http://linkedin.com/in/jworrall"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
          <p>
            With a bachelor's in computer science, a master's in religion, and
            twenty years of leadership experience in the tech and nonprofit
            sectors, I'm a tough person to <em>categorize</em>. I like it that
            way.
          </p>
          <p>
            If you're interested in talking more,{" "}
            <a
              class="contact-link"
              target="_blank"
              href="mailto:joel@joelworrall.com"
              title="Email me"
              rel="noreferrer"
            >
              email me
            </a>
            .
          </p>
        </article>
        <article className="w-75 m-auto">
          {unemployed && (
            <>
              <hr />
              <p className="unemployed">
                <small>
                  I am <b>currently looking for new opportunities</b>! If you
                  like what you <Link to="/resume">see</Link>, let's get
                  in&nbsp;
                  <a
                    href="mailto:red.five@rebellion.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    touch
                  </a>
                  !
                </small>
              </p>
            </>
          )}
        </article>
      </Container>
    </PageLayout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        unemployed
        occupation
        author
        designations
      }
    }
  }
`;
