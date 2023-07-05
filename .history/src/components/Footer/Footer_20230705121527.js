import React from 'react'
import SocialIconsList from '../SocialIconsList'

import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:aminase991@gmail.com'>aminase991@gmail.com</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <SocialIconsContainer>
            {/* <LinkTitle /> */}
            <SocialIconsList />
          </SocialIconsContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  )
}

export default Footer
