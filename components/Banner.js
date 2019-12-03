import React from 'react';
import styled from 'styled-components';

import { Title, Subtitle, Body } from './Typography';
import { Logo } from './Logo';
import { SectionWrapper } from './SectionWrapper';
import { PrimaryCTA } from './Buttons';

const BannerWrapper = styled.section`
  display: grid;
  grid-row-gap: 10px;
  margin-top: 20px;
  text-align: center;
  justify-items: center;
`;

const ImageWrapper = styled.div`
  margin-top: 10px;
`;

const CTAWrapper = styled.div`
  display: grid;
  grid-row-gap: 15px;
  margin-top: 10px;
  padding-bottom: 10px;
  padding-top: 10px;
`;

export function Banner() {
  return (
    <SectionWrapper>
      <BannerWrapper>
        <Title>React La Conferencia</Title>
        <Subtitle>
          The First React conference for Spanish speakers in Latin America
        </Subtitle>
        <Body>
          Medellín
          <br />
          July 17 - 18, 2020
        </Body>
        <ImageWrapper>
          <Logo width={128} />
        </ImageWrapper>
        <Body>
          Complejo Ruta N Calle 67 Nº 52-20
          <br /> Piso 2 Torre A. Medellín - Colombia
        </Body>
      </BannerWrapper>
      <CTAWrapper>
        <PrimaryCTA>call for speakers</PrimaryCTA>
        <PrimaryCTA>get tickets</PrimaryCTA>
      </CTAWrapper>
    </SectionWrapper>
  );
}
