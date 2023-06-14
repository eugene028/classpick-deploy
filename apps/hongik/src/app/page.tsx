'use client'
import styled from "styled-components";
import { Text, FlexBox, DefaultButton } from "@hc/ui";
import { MyDashBoard, ProgressBarSection, EssentialLecture } from "../components/mainPage";

export default function Page() {
    return (
      <>
        <FlexBox justify='flex-start' align='flex-start' fullWidth={true}>
          <Text typo='Headline1'>홈</Text>
        </FlexBox>
        <ProgressBarSection/>
        <MyDashBoard/>
        <EssentialLecture/>
        <Wrapper>
          <BtnWrapper>
            <DefaultButton className="bounceBtn" variant={'md'} color={'normal'} style={{width:'194px'}}>우선순위 설정하러가기</DefaultButton>
          </BtnWrapper>
        </Wrapper>
      </>
    )
  }

const BtnWrapper = styled.div`
  width :194px;
  height: 100px;
  .bounceBtn{
    @keyframes bounce {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-5px);
      }
    }
  }
  animation: bounce 500ms infinite alternate ease-in;
`
const Wrapper = styled.div`
  background: linear-gradient(0deg, #e2e2e2 6.22%, rgba(217, 217, 217, 0) 79.81%);
  height: 150px;
  width: 100%;
  position: absolute;
  bottom:0px;
  box-sizing: border-box;
  right:0px;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;
  .bounceBtn{
    @keyframes bounce {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-5px);
      }
    }
    animation: bounce 500ms infinite alternate ease-in;
  }
`
