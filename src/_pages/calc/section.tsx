import { Container, Title, Header, Body, Subtitle } from 'layout/section-content';
import NavSection from 'layout/nav-section';
import React from 'react';

import Calc from './component';

interface Props {
  title?: string;
  subtitle?: string;
  initialProductType?: number;
}

const CalcSection: React.FC<Props> = ({
  title = 'Рассчет стоимости',
  subtitle = 'Выберите изделие, чтобы рассчитать стоимость',
  initialProductType,
}) => {
  return (
    <NavSection title={title} bgPaper>
      <Container>
        <Header>
          <Title variant="h2">{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </Header>
        <Body>
          <Calc initialProductType={initialProductType} />
        </Body>
      </Container>
    </NavSection>
  );
};

export default CalcSection;
