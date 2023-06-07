import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have worked with a range of technologies in the web development world. From backend to
      frontend.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size='3rem' />
      </ListItem>
    </List>
  </Section>
)

export default Technologies
