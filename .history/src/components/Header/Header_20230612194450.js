import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { DiCssdeck } from 'react-icons/di'
import { SocialIconsContainer } from '../Footer/FooterStyles'
import SocialIconsList from '../SocialIconsList'
import { logo } from '../../pages/log.png'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <div
          style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}
        >
          <img src={logo} size='3rem' /> <span>Portfolio</span>
        </div>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIconsList />
    </Div3>
  </Container>
)

export default Header
