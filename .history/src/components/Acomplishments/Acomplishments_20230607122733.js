import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles'

const education = [
  {
    year: 2014,
    institution: 'International University of Sarajevo',
    department: 'Biological Sciences and Bioengineering',
  },
  { year: 1000, institution: 'Students' },
  { year: 1900, institution: 'Github Followers' },
  { year: 5000, institution: 'Github Stars' },
]

const Acomplishments = () => (
  <Section>
    <SectionTitle>Obtained Education</SectionTitle>
    <Boxes>
      {education.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.year}</BoxNum>
          <BoxText>{card.institution}</BoxText>
          <BoxTextSmall>{card.department}</BoxTextSmall>
        </Box>
      ))}
    </Boxes>
  </Section>
)

export default Acomplishments
