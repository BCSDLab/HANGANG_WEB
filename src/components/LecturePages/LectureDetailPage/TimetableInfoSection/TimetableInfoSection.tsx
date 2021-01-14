import React from 'react';
import * as S from '@components/LecturePages/LectureDetailPage/TimetableInfoSection/TimetableInfoSection.style';
import DownPointingPathSVG from '@assets/svg/down_pointing_path.svg';

interface IProps {
  credit?: number;
  timetable?: Array<{
    timeInfo: string;
    division: number;
  }>;
}

const useToggle = (): [boolean, () => void] => {
  const [toggle, setToggle] = React.useState(true);
  return [toggle, () => setToggle((state) => !state)];
};

const TimetableInfoSection: React.FC<IProps> = ({
  credit,
  timetable,
}) => {
  const [isCollapsed, toggleIsCollapsed] = useToggle();
  return (
    <S.Container>
      <S.Title>
        시간표 정보
      </S.Title>
      {credit ? ( // TODO: change to fit API
        <S.Content>
          <S.BaseInfoContent>
            <S.ContentRow>
              <S.ContentTitle>학점</S.ContentTitle>
              {credit}
              학점
            </S.ContentRow>
            <S.ContentRow>
              <S.ContentTitle>시간</S.ContentTitle>
              분반과 시간을 확인하세요.
            </S.ContentRow>
          </S.BaseInfoContent>
          <S.TimeInfoToggleButton onClick={toggleIsCollapsed}>
            <DownPointingPathSVG />
          </S.TimeInfoToggleButton>
          <S.TimeInfoContainer collapse={isCollapsed}>
            {timetable ? timetable.map((info) => (
              <S.TimeInfo key={info.division}>
                {info.timeInfo}
                &nbsp;
                (
                {info.division}
                )
                <S.TimetableButton buttonType="add">담기</S.TimetableButton>
              </S.TimeInfo>
            )) : null}
          </S.TimeInfoContainer>
        </S.Content>
      ) : <S.EmptyInfo>시간표 정보가 없습니다</S.EmptyInfo>}
    </S.Container>
  );
};

export default TimetableInfoSection;
