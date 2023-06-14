import { TableHeader, List, FlexBox, theme, TextButton, Text, DefaultModal } from "@hc/ui";
import styled from "styled-components";
import { LecturesType } from "@store/LectureList";
import { LectureList } from "@store/LectureList";
import { ModalContent } from "./ModalContent";
import { MdClear } from 'react-icons/md';
import { TbCircle } from 'react-icons/tb';
import { useState } from 'react';

export const LectureTable = ({menuType} : {menuType: LecturesType})  => {
    const [open, setOpen] = useState<boolean>(false);
    const [lec, setLecture] = useState<string>("");
    const onClickToggle = () => {
        setOpen(open => !open);
    }
    var returnTable = LectureList;
    if (menuType !== 'allLecture'){
        returnTable = LectureList.filter(lecture => lecture.key === menuType)
    }
    return (
        <TableContainer>
            {open && 
                <DefaultModal open={open} onDismiss={onClickToggle}><ModalContent lec={lec}/></DefaultModal>}
            <TableHeader tablelabel={['이수구분', '과목/분류', '학점', '수강여부']}/>
            {returnTable.map((lecture, idx) => (
                <FlexBox key={idx} style={{width: '360px', padding:'0px 10px'}}>
                    <List
                        first ={<Text typo={'Body1_1'} color ={'black_500'}>{lecture.category}</Text>}
                        second = {<TextButton onClickEvent={() => {onClickToggle(); setLecture(lecture.lecture);}} color={'black'}>{lecture.lecture}</TextButton>}
                        third={<Text typo={'Body1_1'} color ={'black'}>{lecture.grade}</Text>}
                    />
                    <PassContainer>
                        {lecture.isPassed === 'Passed' ? 
                        <TbCircle style={{color:`${theme.palette.main_blue}` }}/> 
                        : <MdClear style={{color:`${theme.palette.main_red}`}}/>}
                    </PassContainer>
                </FlexBox>))}
        </TableContainer>
    )
}

const TableContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`
const PassContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.palette.black_1100};
    width: 65px;
    height: 47px;
    border-radius: 8px;
`