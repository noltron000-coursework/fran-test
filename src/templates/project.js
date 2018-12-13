import React from 'react';
import Helmet from 'react-helmet';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Overdrive from 'react-overdrive';
import styled from 'react-emotion';

import { Layout, ProjectHeader, ProjectPagination, SEO } from 'components';
import config from '../../config/site';

const OuterWrapper = styled.div`
  padding: 0;
`;

const InnerWrapper = styled.div`
  position: relative;
  max-width: ${props => `${props.theme.maxWidths.project}px`};
  margin: 0 auto;
`;

const Project = ({ pageContext: { slug, prev, next }, data: { project: postNode } }) => {
  const project = postNode.frontmatter;

  return (
    <Layout>
      <Helmet title={`${project.title} | ${config.siteTitle}`} />
      <SEO postPath={slug} postNode={postNode} postSEO />
      <ProjectHeader
        avatar={config.avatar}
        name={config.name}
        date={project.date}
        title={project.title}
        areas={project.areas}
        text={postNode.html}
      />
      <OuterWrapper>
        <InnerWrapper>
          <Overdrive id={`${slug}-cover`}>
            <Img fluid={project.cover.childImageSharp.fluid} />
          </Overdrive>
        </InnerWrapper>
        <ProjectPagination next={next} prev={prev} />
      </OuterWrapper>
    </Layout>
  );
};

export default Project;

Project.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    project: PropTypes.object.isRequired,
  }).isRequired,
};

Project.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
};

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    project: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        cover {
          childImageSharp {
            fluid(maxWidth: 1600, quality: 90, traceSVG: { color: "#328bff" }) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
            resize(width: 800) {
              src
            }
          }
        }
        date(formatString: "DD.MM.YYYY")
        title
        areas
      }
    }
  }
`;
