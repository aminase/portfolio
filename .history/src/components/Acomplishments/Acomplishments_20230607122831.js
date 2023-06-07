import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText, BoxTextSmall } from './AcomplishmentsStyles'

const education = [
  {
    year: 2014,
    institution: 'International University of Sarajevo, B&H',
    department: 'Biological Sciences and Bioengineering',
  },
  {
    year: 2017,
    institution: 'Hacettepe University, Turkey',
    department: 'Bioengineering',
  },
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
