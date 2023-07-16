import React from 'react'
import { DiFirebase, DiReact, DiTerminalBadge } from 'react-icons/di'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have been able to create user interfaces that are tested, responsive, and aesthetically
      pleasing by utilizing the most recent web technologies and JavaScript frameworks.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem' />
        <ListContainer>
          <ListTitle>Frontend</ListTitle>
          <ListParagraph>
            Experience with <br /> JavaScript, React.js, Vue.js, ReactNative
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem' />
        <ListContainer>
          <ListTitle>Backend</ListTitle>
          <ListParagraph>
            Experience with <br /> Python, Node.js, SQL, NoSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminalBadge size='3rem' />
        <ListContainer>
          <ListTitle>QA testing</ListTitle>
          <ListParagraph>
            Experience with <br /> manual testing, Cypress
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
)

export default Technologies
