import React from 'react'
import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

const SocialIcons = () => {
  return (
    <>
      <SocialIcons href='https://github.com/aminase'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/amina-selimovic-50990918a/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
    </>
  )
}

export default SocialIcons
