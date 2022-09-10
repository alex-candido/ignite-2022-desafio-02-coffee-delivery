import React, { ReactNode } from 'react';
import { IconContainer, InfoWithIconContainer } from './styles';

interface InfoWithIconProps {
  icon: ReactNode;
  text: string | ReactNode;
  iconBg: string;
}

const InfoWithIcon: React.FC<InfoWithIconProps> = ({ icon, text, iconBg }) => {
  return (
    <InfoWithIconContainer>
      <IconContainer iconBg={iconBg}>{icon}</IconContainer>
      {typeof text === 'string' ? <p>{text}</p> : text}
    </InfoWithIconContainer>
  );
};

export default InfoWithIcon;
