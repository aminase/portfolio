import React from 'react'
import { SocialIcons } from '../components/Header/HeaderStyles'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const SocialIconsList = () => {
  return (
    <>
      <SocialIcons href='https://github.com/aminase'>
        <AiFillGithub size='2rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/amina-selimovic-50990918a/'>
        <AiFillLinkedin size='2rem' />
      </SocialIcons>
    </>
  )
}

export default SocialIconsList
