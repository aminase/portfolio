import React from 'react'
import SocialIconsList from '../SocialIconsList'

import {
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  CopyRight,
  SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          {/* <LinkTitle>Email</LinkTitle> */}
          {/* <LinkItem href='mailto:aminase991@gmail.com'>aminase991@gmail.com</LinkItem> */}
        </LinkColumn>
        <LinkColumn>
          <SocialIconsContainer>
            <SocialIconsList />
          </SocialIconsContainer>
        </LinkColumn>
      </LinkList>
      <CopyRight>Copyright 2023 © All rights Reserved. aminase </CopyRight>
    </FooterWrapper>
  )
}

export default Footer
