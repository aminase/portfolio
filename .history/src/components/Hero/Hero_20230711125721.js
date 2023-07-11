import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = props => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hey, it's Amina. A software developer skilled in HTML/CSS/JavaScript's ecosystem
        ME(R/V)N(MongoDB, Express.js, React.js /Vue.js, Nodejs), ReactNative. My previous experience
        involved three years of research work in the field of molecular biology, with a focus on
        gene silencing. Today, it has given me a solid basis and a distinctive viewpoint to combine
        science and technology by employing bioinformatics analysis using Python. Aside from
        technical skills, I am a great communicator and a team player.
      </SectionText>
      {/* <Button onClick={() => (window.location = 'www.google.com')}> Learn More</Button> */}
    </LeftSection>
  </Section>
)

export default Hero
