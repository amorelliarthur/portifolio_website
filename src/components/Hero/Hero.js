import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection main center>
      <SectionTitle>
        Bem-vindo ao  <br />
        Meu Portfólio pessoal
      </SectionTitle>
      <SectionText>
      Meu objetivo é aprimorar cada vez mais, levar minhas habilidades de desenvolvimento para o próximo nível e criar aplicações incríveis!
      </SectionText>
      <Button onClick={() => window.location = '#about'}>Saber Mais</Button>
    </LeftSection>
  </Section>
);

export default Hero;