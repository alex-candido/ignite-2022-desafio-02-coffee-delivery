import React from 'react';
import introImg from '../../../../assets/intro-img.png';
import { IntroContainer, IntroContent } from './styles';

const Intro: React.FC = () => {
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div />

        <img src={introImg} alt="introImg" />
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;
