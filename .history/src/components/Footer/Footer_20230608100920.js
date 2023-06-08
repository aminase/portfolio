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
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:111-111-1111'>111-111-1111</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:aminase991@gmail.com'>aminase991@gmail.com</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <SocialIconsContainer>
            <SocialContainer>
              <SocialIconsList />
            </SocialContainer>
          </SocialIconsContainer>
        </LinkColumn>
      </LinkList>
    </FooterWrapper>
  )
}

export default Footer
