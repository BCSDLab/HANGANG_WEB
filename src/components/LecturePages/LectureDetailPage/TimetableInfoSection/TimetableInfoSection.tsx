import React from 'react';
import useToggle from '@utils/hooks/useToggle';
import Modal from '@components/Shared/Modal';
import Select from '@components/Shared/Select';
import * as S from './TimetableInfoSection.style';

interface IProps {
  credit?: number;
  timetable?: Array<{
    timeInfo: string;
    division: number;
  }>;
}

const useDivision = (initialDivision: Array<number>) => {
  const [currentDivision, setCurrentDivision] = React.useState(initialDivision);
  const [targetAddDivision, setTargetAddDivision] = React.useState(0);
  const handleDivisionButton = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetValue = Number(event.currentTarget.value);
    const division = Number.isNaN(targetValue) ? 0 : targetValue;
    if (currentDivision.includes(division)) {
      const newDivision = Array.from(currentDivision);
      const deleteIndex = newDivision.findIndex((value) => value === division);
      newDivision.splice(deleteIndex, 1);
      setCurrentDivision(newDivision);
    } else if (currentDivision.length === 0) {
      setTargetAddDivision(division);
    }
    // Add for second modal
  };

  const onCancelSelectTimetable = () => {
    setTargetAddDivision(0);
  };

  return {
    currentDivision,
    targetAddDivision,
    handleDivisionButton,
    onCancelSelectTimetable,
  };
};

const TimetableInfoSection: React.FC<IProps> = ({
  credit,
  timetable,
}) => {
  const [isCollapsed, toggleIsCollapsed] = useToggle(true);
  const {
    currentDivision,
    targetAddDivision,
    handleDivisionButton,
    onCancelSelectTimetable,
  } = useDivision([]);
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
            <S.TimeInfoToggleButtonIcon />
          </S.TimeInfoToggleButton>
          <S.TimeInfoContainer collapse={isCollapsed}>
            {timetable ? timetable.map((info) => (
              <S.TimeInfo key={info.division}>
                {info.timeInfo}
                &nbsp;
                (
                {info.division}
                )
                <S.TimetableButton
                  value={info.division}
                  buttonType={currentDivision.includes(info.division) ? 'remove' : 'add'}
                  onClick={handleDivisionButton}
                >
                  담기
                </S.TimetableButton>
              </S.TimeInfo>
            )) : null}
          </S.TimeInfoContainer>
          <Modal
            visible={false}
            title="시간표 중복"
            cancelText="해당 시간표 빼기"
            confirmText="중복 담기"
          >
            중복된 시간표가 있습니다.
            <br />
            중복 담기를 클릭하시면 담고 싶은 시간표로
            <br />
            따로 저장할 수 있습니다.
          </Modal>
          <Modal
            visible={!!targetAddDivision}
            title="시간표 선택"
            confirmText="담기"
            cancelText="취소"
            onCancel={onCancelSelectTimetable}
          >
            <Select
              fill
              options={['시간표 1', '시간표 2', '시간표 3']}
            />
          </Modal>
        </S.Content>
      ) : <S.EmptyInfo>시간표 정보가 없습니다</S.EmptyInfo>}
    </S.Container>
  );
};

export default TimetableInfoSection;
