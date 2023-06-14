import styled, { css } from 'styled-components';
import { Text } from '../Text';

interface ProgressProps {
  step: 1 | 2 | 3 | 4 ;
  currentStep: 1 | 2 | 3 | 4;
}

function Progress({ step, currentStep }: ProgressProps) {
  const fill = [false, false, false, false].map((v, i) =>
    i < step ? true : false,
  );
  const current = [false, false, false, false].map((v, i) =>
    i === currentStep ? true : false,
  );

  return (
    <Wrapper>
      <Circle isFilled={fill[0]} currentNum ={current[0]}><Text typo ={'Subtitle2'} color={fill[0] ? (current[0] ? 'white' : 'main_blue') : 'black_800'}>1</Text></Circle>
      <Circle isFilled={fill[1]} currentNum ={current[1]}><Text typo ={'Subtitle2'} color={fill[1] ? (current[1] ? 'white' : 'main_blue') : 'black_800'}>2</Text></Circle>
      <Circle isFilled={fill[2]} currentNum ={current[2]}><Text typo ={'Subtitle2'} color={fill[2] ? (current[2] ? 'white' : 'main_blue') : 'black_800'}>3</Text></Circle>
      <Circle isFilled={fill[3]} currentNum ={current[3]}><Text typo ={'Subtitle2'} color={fill[3] ? (current[3] ? 'white' : 'main_blue') : 'black_800'}>4</Text></Circle>
    </Wrapper>
  );
}

export default Progress;

const Wrapper = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Circle = styled.div<{ currentNum: boolean, isFilled: boolean }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.palette.black_800};
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.palette.white};
  position: relative;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  :not(:first-of-type)::before{
    content: '';
    width: 44px;
    height: 5px;
    background-color: ${({ theme }) => theme.palette.black_800};
    position: absolute;
    right: 42px;
    top: 18px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  }

  ${({ isFilled }) =>
    isFilled &&
    css`
      border: 4px solid ${({ theme }) => theme.palette.main_blue};
      :not(:first-of-type)::before{
          content: '';
          width: 45px;
          height: 5px;
          background-color: ${({ theme }) => theme.palette.main_blue};
          position: absolute;
          right: 43px;
          top: 18px;
          box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      }
    `}
  ${({ currentNum}) => 
    currentNum && 
      css`
        background-color: ${({ theme }) => theme.palette.main_blue};
        color : ${({ theme }) => theme.palette.white};
      `}
`;
