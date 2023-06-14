import { MdClear } from 'react-icons/md';
import styled from 'styled-components';
import { Spacing, Text } from "@hc/ui";
import Link from 'next/link';
import { css } from 'styled-components';
import { media } from "@hc/ui";


export interface MenuOptionProps {
    openMenu: boolean;
    onClickEvent : () => void;
}

export const SideMenuLayout = ({
    openMenu,
    onClickEvent
}: MenuOptionProps) => {
    return (
        <Container opencheck={openMenu}>
            <Wrapper>
                <MdClear size={'1.5rem'} onClick ={onClickEvent} style ={{position: 'absolute', right: '15px', cursor:'pointer'}}/>
                <Spacing size ={70}/>
                <ListWrapper>
                    <ListElement>
                        <Text typo = {'Headline1'} onClick={onClickEvent}>
                            <Link href="/">홈</Link>
                        </Text>
                    </ListElement>
                    <ListElement>
                        <Text typo = {'Headline1'} onClick={onClickEvent}>
                            <Link href="/">수강신청 매뉴얼</Link>
                        </Text>
                    </ListElement>
                    <ListElement>
                        <Text typo = {'Headline1'} onClick={onClickEvent}>
                            <Link href="/graduation">졸업 요건 조회하기</Link>
                        </Text>
                    </ListElement>
                    <ListElement>
                        <Text typo = {'Headline1'} onClick={onClickEvent}>
                            <Link href="/">시간표 만들기</Link>
                        </Text>
                    </ListElement>
                    <ListElement>
                        <Text typo = {'Headline1' } onClick={onClickEvent}>
                            <Link href="/">우선순위 설정하기</Link>
                        </Text>
                    </ListElement>
                    <ListElement>
                        <Text typo = {'Headline1'} onClick={onClickEvent}>
                            <Link href="/">나의 수강신청 결과보기</Link>
                        </Text>
                    </ListElement>
                </ListWrapper> 
            </Wrapper>
        </Container>
    )
}

const Container = styled.div<{ opencheck : boolean}>`
    width: 390px;
    right: 0px;
    height:100vh;
    background-color: #fff;
    position:absolute;
    transition: all 0.1s ease-in-out;
    z-index:2;
    ${({opencheck}) => 
        opencheck ?
        css`
            transform: translateX(0px);
        `:
        css`
            transform: translateX(390px);
        `
    }    
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    transition: all 0.1s ease-in-out;
    width: 100%;
    padding-top: 26px;
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 51px;
`

const ListElement = styled.div`
    display:flex;
    flex-direction: row;
    align-items: center;
    gap: 13px;
    padding: 0px 31px;
    cursor: pointer;
`