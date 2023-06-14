import styled from 'styled-components';
import { PassedLecture } from "src/types/Lecture";
import {  FlexBox, Text} from "@hc/ui"



export default function AccordionContent ({ lecDetail }:{lecDetail:PassedLecture }){
    const {lectureId, professor, when, myGrade, cyber ,etc} = lecDetail;
    return (
        <Wrapper>
            <FlexBox gap={10} direction={'column'} align={'flex-start'}>
                    <Text typo={'Body1_2'}>학수번호</Text>
                    <Text typo={'Body1_2'}>담당교수</Text>
                    <Text typo={'Body1_2'}>취득 연도-학기</Text>
                    <Text typo={'Body1_2'}>성적</Text>
                    <Text typo={'Body1_2'}>사이버강의 여부</Text>
                    <Text typo={'Body1_2'}>비고</Text>
            </FlexBox>
            <FlexBox gap={10} direction={'column'} align={'flex-start'}>
                <Text typo={'Body1_1'}>{lectureId}</Text>
                <Text typo={'Body1_1'}>{professor}</Text>
                <Text typo={'Body1_1'}>{when}</Text>
                <Text typo={'Body1_1'}>{myGrade}</Text>
                <Text typo={'Body1_1'}>{cyber ? 'O' : 'X'}</Text>
                <Text typo={'Body1_1'}>{etc? etc : '-'}</Text>
            </FlexBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: ${({theme}) => theme.palette.black_1100};
    border-radius:10px;
    padding: 18px;
    width: 100%;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content:center;
`