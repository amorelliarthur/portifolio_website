import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Tecnologias</SectionTitle>
    <SectionText>
    Trabalho com diversas tecnologias no mundo do desenvolvimento Web.
    Do back-end ao front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          Experiencia com <br />
          HTML5, CSS3, JavaScript, TypeScript, React.js, Next.js, Styled Components
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3rem'/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          Experiencia com <br />
          Node.js, Express.js, TypeScript, Nest.js, PHP, APIs RESTful, MySQL, MongoDB, Docker
        </ListContainer>
      </ListItem>
      {/* <ListItem>
        <DiZend size='3rem'/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          Experience with <br />
          Tools like Figma
        </ListContainer>
      </ListItem> */}
    </List>
  </Section> 

);

export default Technologies;
