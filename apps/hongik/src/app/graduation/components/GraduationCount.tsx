import { LecturesType } from "@store/LectureList";
import styled from "styled-components";
import { GraduationInfo, Text, FlexBox, DefaultModal} from "@hc/ui";
import { useState } from "react";
import { GeneralLecture} from './GeneralLecture';


export const GraduationCount = ({menuType} : {menuType: LecturesType}) => {
    const [open, setOpen] = useState<boolean>(false);
    const onClickToggle = () => {
        setOpen(open => !open);
    }
    return (
        <GradutionWrapper>
            {open && 
                <DefaultModal open={open} onDismiss={onClickToggle}><GeneralLecture/></DefaultModal>}
        {menuType === 'allLecture' ? 
        <FlexBox direction="column" gap ={10}>
            <GraduationInfo infoString={'총 취득한 학점을 나타냅니다'} label={'취득학점'} variant="basic" rightElement={<Text typo={'Subtitle1'}>30</Text>}/>
            <GraduationInfo infoString={'총 학점 중 졸업학점으로 인정'}  label={'졸업인정학점'} variant ="primary" rightElement={<Text typo={'Subtitle1'} color ={'white'}>30</Text>}/>
        </FlexBox>
        : (menuType === 'GELecture' ? 
            <FlexBox direction="column" gap ={10}>
                <GraduationInfo infoString={'총 취득한 학점을 나타냅니다'} label={'취득학점'} variant="basic" rightElement={<Text typo={'Subtitle1'}>30</Text>}/>
                <GraduationInfo infoString={'총 학점 중 졸업학점으로 인정'}  label={'졸업인정학점'} variant ="primary" rightElement={<Text typo={'Subtitle1'} color ={'white'}>30</Text>}/>
            </FlexBox>
             : (menuType === 'SWLecture' ? 
                <GraduationInfo infoString={'총 학점 중 졸업학점으로 인정'}  label={'졸업인정학점'} variant ="primary" rightElement={<Text typo={'Subtitle1'} color ={'white'}>30</Text>}/>
             :
             <FlexBox direction={'column'} gap={10}>
                <FlexBox gap={6}>
                    <GraduationInfo variant={'mini'} label ={'분류기준'} rightElement={'nnn'}/>
                    <GraduationInfo variant={'mini'} label ={'전공선택'} rightElement={'25'}/>
                    <GraduationInfo variant={'mini'} label ={'전공필수'} rightElement={'nnn'}/>
                </FlexBox>
                <GraduationInfo infoString={'전공학점 중 취득한 학점'}  label={'취득학점'} variant ="primary" rightElement={<Text typo={'Subtitle1'} color ={'white'}>31 / 48</Text>}/>
                <div onClick={onClickToggle}>
                    <GraduationInfo infoString={'총 취득한 학점을 나타냅니다'} label={'일반선택'} variant="basic" rightElement={<Text typo={'Subtitle1'}>30</Text>}/>
                </div>
             </FlexBox>
             ))}
        </GradutionWrapper>
    )
}

const GradutionWrapper = styled.div`
    margin-top:10px;
    margin-bottom: 50px;
`