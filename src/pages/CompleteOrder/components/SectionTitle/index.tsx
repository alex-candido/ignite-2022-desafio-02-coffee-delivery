import React, { ReactNode } from 'react';
import { RegularText } from '../../../../components/Typography';
import { SectionTitleContainer } from './styles';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  icon,
}) => {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <RegularText color="subtitle">{title}</RegularText>
        <RegularText size="s">{subtitle}</RegularText>
      </div>
    </SectionTitleContainer>
  );
};

export default SectionTitle;
