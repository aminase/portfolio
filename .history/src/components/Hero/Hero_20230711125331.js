import React from 'react'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = props => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hey, it's Amina. A software developer with a demonstrated history of developing, testing,
        and maintaining web applications. Currently, I am developing web applications using the
        latest web technologies and frameworks. The use of these technologies has allowed me to
        build testable, responsive, and aesthetic user interfaces. My previous experience involved
        three years of dedicated research work in the field of molecular biology/nanomedicine, with
        a focus on gene silencing and drug delivery. Today, it has given me a solid basis and a
        distinctive viewpoint to combine science and technology by employing bioinformatics analysis
        using Python. Aside from technical skills, I am a great communicator and a team player.
      </SectionText>
      {/* <Button onClick={() => (window.location = 'www.google.com')}> Learn More</Button> */}
    </LeftSection>
  </Section>
)

export default Hero
