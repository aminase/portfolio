import React from 'react'

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from './ProjectsStyles'
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { projects } from '../../constants/constants'

const Projects = () => (
  <Section id='projects'>
    <SectionDivider />
    <br />
    <SectionTitle>Projects</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, source, alt }) => (
        <>
          <BlogCard key={id}>
            {/* {title} */}
            <Img alt={alt} src={image} />
            <TitleContent>
              <HeaderThree three>{title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
              {/* <TitleContent>Stack</TitleContent> */}
              <TagList>
                {tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={source}>Source Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        </>
      ))}
    </GridContainer>
  </Section>
)

export default Projects
