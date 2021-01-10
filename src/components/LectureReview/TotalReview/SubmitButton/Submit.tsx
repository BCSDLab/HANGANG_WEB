import React from 'react';
import { SubmitButton } from './Submit.style';

type PropType ={
  isComplete : boolean;
}

const Submit = ({ isComplete } : PropType) => (
  <SubmitButton type="submit" isComplete={isComplete}>작성완료 (+10p)</SubmitButton>
);

export default Submit;
