import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link legacyBehavior href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white", marginBottom: "20px"}}>
          <DiCssdeck size="3rem" /> <Span>Portfólio</Span>
        </a>
      </Link>
    </Div1>
    
    <Div2>
      <li>
        <Link legacyBehavior href="#projects">
          <NavLink>Projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="#tech">
          <NavLink>Tecnologias</NavLink>
        </Link>
      </li>        
      <li>
        <Link legacyBehavior href="#about">
          <NavLink>sobre</NavLink>
        </Link>
      </li>        
    </Div2>

    <Div3>
      <SocialIcons href="https://github.com/amorelliarthur">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/arthur-amorelli-92ba58b3/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;