import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Soon Wee's Portfolio
      </SectionTitle>
      <SectionText>
        I am an individual who believes a lot in tech and enjoys exploring it as the boundaries are limitless. I am currently a student in NUS pursuing a Bachelor in Computer Science. <br/>
        <br/>I believe that IT will be a driving economic factor, as we strives towards a smart nation. As such, I am open to any opportunities available to enhance
        my skillset. 
      </SectionText>
      <Button onClick = {() => window.location = "#projects"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;