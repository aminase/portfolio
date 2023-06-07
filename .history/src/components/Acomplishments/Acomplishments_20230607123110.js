import React from 'react'

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents'
import { Box, Boxes, BoxNum, BoxText, BoxTextSmall } from './AcomplishmentsStyles'

const education = [
  {
    year: 2014,
    institution: 'International University of Sarajevo, B&H',
    department: 'Bachelor of Biological Sciences and Bioengineering',
  },
  {
    year: 2015,
    institution: 'Hacettepe University TOMER, Türkiye',
    department: 'Turkish and Foreign Language Teaching',
  },
  {
    year: 2017,
    institution: 'Hacettepe University TOMER, Türkiye',
    department: 'Master of Bioengineering',
  },
  { year: 2018, institution: 'Mistral Ltd', department: 'Gigi School of Coding, Sarajevo, B&H' },
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
