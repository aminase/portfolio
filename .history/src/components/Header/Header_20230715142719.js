import Link from 'next/link'
import React from 'react'
import { DiCssdeck } from 'react-icons/di'
import SocialIconsList from '../SocialIconsList'

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles'

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <div
          style={{ display: 'flex', alignItems: 'center', color: 'white', marginBottom: '20px' }}
        >
          <DiCssdeck size='3rem' /> <span>Portfolio</span>
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
      <li>
        <Link href='#education'>
          <NavLink>Education</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIconsList />
    </Div3>
  </Container>
)

export default Header
