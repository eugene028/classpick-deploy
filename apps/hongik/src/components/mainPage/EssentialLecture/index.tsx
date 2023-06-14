import styled from "styled-components";
import { theme, FlexBox, Text } from "@hc/ui";
import { LectureContainer } from "./LectureContainer";
export const EssentialLecture = () => {
    return (
        <>
            <Wrapper>
                <FlexBox align='flex-start' justify="flex-start">
                    <FlexBox direction={'column'} justify='space-between' fullWidth={false}
                        align='flex-start' style={{paddingLeft:'16px', flex:'1 1 0', minWidth:'130px'}}>
                        <Text typo='Subtitle2' color='white'>2023-1</Text>
                        <Text typo='Subtitle2' color='white'>수강 필수강의</Text>
                    </FlexBox>
                    <LectureContainer/>
                </FlexBox>
                <GradiantDiv/>
            </Wrapper>
            <MinorContainer>
                <FlexBox direction={'column'} justify='space-between' fullWidth={false}
                        align='flex-start' style={{paddingLeft:'16px', flex:'1 1 0', minWidth:'130px'}}>
                        <Text typo='Subtitle2'>전체</Text>
                        <Text typo='Subtitle2' >졸업요건</Text>
                </FlexBox>
            </MinorContainer>
        </>
    )
}
const Wrapper = styled.div`
    margin: 17px 0px;
    padding: 19px 0px;
    width: 100%;
    background-color: ${theme.palette.black_200};
    border-radius: 10px;
    height: 174px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    position: relative;
    box-sizing: border-box;
`
const GradiantDiv = styled.div`
    background: linear-gradient(-90deg, #333333 0%, rgba(51, 51, 51, 0) 100%);
    opacity: 0.5;
    height: 174px;
    width: 60px;
    position: absolute;
    bottom:0px;
    box-sizing: border-box;
    right:0px;
    z-index:1;
    border-radius:10px;
`

const MinorContainer = styled.div`
    padding: 19px 0px;
    width: 100%;
    height: 174px;
    border-radius: 10px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid ${theme.palette.black_900};
`