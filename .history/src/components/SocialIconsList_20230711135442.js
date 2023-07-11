import React from 'react'
import { SocialIcons } from '../components/Header/HeaderStyles'
import { AiFillGithub, AiFillMail } from 'react-icons/ai'
import { FaResearchgate } from 'react-icons/fa'

const SocialIconsList = () => {
  return (
    <>
      <SocialIcons href='https://github.com/aminase'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      {/* <SocialIcons href='https://www.linkedin.com/in/amina-selimovic-50990918a/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons> */}
      <SocialIcons href="mailto:aminase991@gmail.com?subject=Let\'s%20Connect&body=Hi,%0D%0A%0D%0A">
        <AiFillMail size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.researchgate.net/profile/Amina-Selimovic-4'>
        <FaResearchgate size='3rem' />
      </SocialIcons>
    </>
  )
}

export default SocialIconsList
