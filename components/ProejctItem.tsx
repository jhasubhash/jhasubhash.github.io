import Link from "next/link";
import styled from "styled-components";
import { lighten, darken } from "polished";
import { getShadowColor } from "../config/themeConfig";

const ProjectCard = styled.a`
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px 0
    ${({ theme }) => getShadowColor(theme, 0.7, theme.text)};
  display: flex;
  justify-content: space-between;
  transition: 0.2s box-shadow;
  cursor: pointer;
  &:hover {
    box-shadow: 0 4px 8px 0
      ${({ theme }) => getShadowColor(theme, 0.6, theme.text)};
  }
`;

const ProjectCardBody = styled.div`
  padding-left: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProjectImage = styled.img`
  width: 20%;
  height: 100%;
  min-height: 50px;
`;

const ProjectTitle = styled.div`
  font-size: 1rem;
`;

const ProjectDesc = styled.div`
  font-size: 0.8rem;
  color: ${({ theme }) => getShadowColor(theme, 0.2, theme.text)};
  padding-top: 0.5rem;
`;

const TagContainer = styled.div`
  display: flex;
`;

const Tag = styled.div`
  margin-right: 0.3rem;
  margin-top: 0.6rem;
  font-size: 0.7rem;
  padding: 0.1rem 0.3rem 0.1rem 0.3rem;
  border-radius: 0.2rem;
  background: ${({ theme }) => getShadowColor(theme, 0.7, theme.text)};
  white-space: nowrap;
`;

function ProjectItem({ project }) {
  const tags = project.frontMatter.tags.length
    ? project.frontMatter.tags.split(",")
    : [];
  return (
    <ProjectCard href={project.frontMatter.web_url} target="__blank">
      <ProjectImage src={project.frontMatter.cover_image} alt=" " />
      <ProjectCardBody>
        <ProjectTitle>{project.frontMatter.title}</ProjectTitle>
        <ProjectDesc>{project.frontMatter.excerpt}</ProjectDesc>
        <TagContainer>
          {tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </TagContainer>
        {/** 
        <div style={{display:'flex', justifyContent:'space-between'}}>
        <a className="btn" style={{borderRadius: '5px'}} href={project.frontMatter.web_url} target="_blank"><code>Check it out</code></a>
        <a className="btn" style={{borderRadius: '5px'}} href={project.frontMatter.code_url} target="_blank"><code>source_code</code></a>
        </div>
        */}
      </ProjectCardBody>
    </ProjectCard>
  );
}

export default ProjectItem;
