import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection main center>
      <SectionTitle>
        Welcome to  <br />
        My personal Portifolio
      </SectionTitle>
      <SectionText>
        Aqui vai ter um texto sobre o que eu estou fazendo.....
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;