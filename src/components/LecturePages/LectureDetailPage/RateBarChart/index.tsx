import React from 'react';
import { AxisBottom } from '@visx/axis';
import { scaleBand, scaleLinear } from '@visx/scale';
import { Group } from '@visx/group';
import { Bar } from '@visx/shape';

import { defaultFontFamily, greyFontColor, yellowColor } from '@utils/css-util';
import * as S from './RateBarChart.style';

const tempData = [0, 2, 6, 100, 50, 23, 16, 40, 50, 41];
const axisData = Array.from({ length: 10 }, (_, index) => (index + 1) * 0.5);

const xMobileMax = 209;
const barYMobileMax = 130;

const axisScale = scaleBand({
  range: [0, xMobileMax],
  domain: axisData,
  paddingInner: 0.05,
});

const formatAxis = (x: number): string => (x % 1 === 0 ? `${x}.0` : '');

const RateBarChart: React.FC = () => {
  const dataScale = scaleLinear({
    domain: [0, Math.max(...tempData)],
    range: [barYMobileMax - 1, 0],
    round: true,
  });
  const participant = tempData.reduce((acc, cur) => (acc + cur), 0);

  return (
    <S.Container>
      <S.Rate>
        <S.RateDesc>평점</S.RateDesc>
        3.4
      </S.Rate>
      <S.ChartContainer>
        <Group top={16} left={0}>
          {tempData.map((data, index) => {
            const barHeight = barYMobileMax - (dataScale(data) ?? 0);
            const barY = barYMobileMax - barHeight;
            return (
              <Bar
                key={`bar-${axisData[index]}`}
                x={index ? (20 * index + (index)) : 0}
                y={barY}
                width={20}
                height={barHeight}
                fill={yellowColor}
              />
            );
          })}
        </Group>
        <AxisBottom
          top={barYMobileMax + 8}
          left={0}
          scale={axisScale}
          tickFormat={formatAxis}
          tickLabelProps={() => ({
            fill: greyFontColor,
            fontSize: 11,
            fontFamily: defaultFontFamily,
            textAnchor: 'middle',
          })}
          hideTicks
          hideAxisLine
        />
      </S.ChartContainer>
      <S.Participant>
        전체 평가 수
        <br />
        {participant}
        명
      </S.Participant>
    </S.Container>
  );
};

export default RateBarChart;
