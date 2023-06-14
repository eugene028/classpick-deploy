import { LectureList } from "@store/LectureList";
import { PassedLectures } from "@store/PassNonPass";
import styled from "styled-components";
import  AccordionContent from "./AccordionContent";
import { Text, FlexBox, Spacing, TableHeader, List, Accordion } from "@hc/ui";

export const ModalContent = ({lec}: {lec:string}) => {
    const modalLectureInfo = LectureList.filter(lecture => lecture.lecture === lec);
    const {category, lectureDetail, isPassed} = modalLectureInfo[0];
    const passedLectureInfo = PassedLectures.filter(lecture => lecture.lecture === lec);
    return(
        <>  
            <ModalHead>
                <Text typo ={'Body1_2'} color ={'black_500'}>{category}</Text>
                <FlexBox justify={'space-between'}>
                    <Text typo={'Headline1'}>{lec}</Text>
                    {isPassed === 'Passed' ? (
                        <Text typo={'Subtitle2'} color={'main_blue'}>이수</Text>
                        ):(<Text typo={'Subtitle2'} color ={'main_red'}>미이수</Text>)}
                </FlexBox>
            </ModalHead>
            <Spacing size ={30} />
            <ModalWrapper>
            {isPassed === 'Passed' ? (
                <FlexBox direction={'column'}>
                    <TableHeader width={340} tablelabel={['강의명','학점']}/>
                    {passedLectureInfo.length > 0 && 
                        passedLectureInfo.map((lecDetail,idx) => {
                            return(
                                <Accordion key={idx} title={lecDetail.lectureLabel} 
                                    rightElement={lecDetail.grade}
                                    contentHeight={218}
                                    option={lecDetail.etc}
                                    content={< AccordionContent lecDetail={lecDetail}/>}/>
                            )
                        })}
                    
                </FlexBox>
            ): (
                <FlexBox direction={'column'}>
                    <TableHeader width={340} tablelabel={['강의명','개설학기','학점']}/>
                    <ListWrapper>
                        {lectureDetail &&
                            lectureDetail.map((lecDetail,idx) => { return(
                                <List key={idx} 
                                    first={<Text typo={'Subtitle1'}>{lecDetail.lectureLabel}</Text>}
                                    second={<Text typo={'Body1_2'}>{lecDetail.term}</Text>}
                                    third={<Text typo={'Body1_1'}>{lecDetail.grade}</Text>}/>
                        )}) }
                    </ListWrapper>
                </FlexBox>)}
            </ModalWrapper>
        </>
    )
}

const ListWrapper = styled.div`
    margin: 0px 20px;
`

const ModalHead = styled.div`
    display: flex;
    flex-direction: column;
`
const ModalWrapper= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`


