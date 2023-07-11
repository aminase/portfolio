import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = props => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome
      </SectionTitle>
      <SectionText>
        I am Amina. A software developer skilled in HTML/CSS/JavaScript's ecosystem
        ME(R/V)N(MongoDB, Express.js, React.js /Vue.js, Node.js), ReactNative. The use of these
        technologies allowes me to build testable, responsive, and aesthetic user interfaces. My
        previous experience involved three years of research work in the field of molecular biology,
        with a focus on gene silencing. Today, it has given me a solid basis and a distinctive
        viewpoint to combine science and technology by employing bioinformatics analysis using
        Python.
      </SectionText>
      {/* <Button onClick={() => (window.location = 'www.google.com')}> Learn More</Button> */}
    </LeftSection>
  </Section>
)

export default Hero
