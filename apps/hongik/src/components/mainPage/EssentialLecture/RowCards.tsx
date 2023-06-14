import styled from "styled-components";
import { theme } from "@hc/ui";
import { ForwardedRef, forwardRef } from "react";
import { Tag, Text } from "@hc/ui";
import { IoIosArrowForward } from 'react-icons/io';

interface RowCardsProps extends React.ComponentProps<'div'>{
    onMouseDown: (e:any) => void, 
    onMouseMove: (e:any) => void | null, 
    onMouseUp: (e:any) => void,
    onMouseLeave: (e:any) => void,
    label: string;
    major: boolean;
}

const RowCards = (
    props: RowCardsProps,
    ref:ForwardedRef<HTMLDivElement>) => {
    
    return (
        <Wrapper ref={ref}>
            {props.major ?
                <Tag variant={'keyword'} color={'select'}>전공필수</Tag>
            :  <Tag variant = {'keyword'} color ={'alert'}>교양필수</Tag>
            }
            <Text typo={'Subtitle1'}>{props.label}</Text>
            <Text typo={'Caption2_1'}>3학점</Text>
            <BottomButton>
                <Text typo ={'Caption2_1'}>강의정보 확인</Text>
                <IoIosArrowForward size={'0.8rem'} />
            </BottomButton>
        </Wrapper>
    )
}

const Wrapper= styled.div`
    height: 137px;
    min-width: 102px;
    border-radius: 5px;
    background-color: ${theme.palette.black_1100};
    padding: 11px 9px;
    display:flex;
    flex-direction:column;
    gap: 8px;
    position:relative;
`

const BottomButton = styled.button`
    position: absolute;
    border-top: 1px solid ${theme.palette.black_900};
    border-radius: 0px 0px 10px 10px;
    bottom:0px;
    display: flex;
    align-items: center;
    height: 30px;
    width:85px;
    justify-content: flex-end;
`

export default forwardRef(RowCards);