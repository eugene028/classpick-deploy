import { MdClear } from 'react-icons/md';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Spacing } from '../../layout';
import { Text } from '../Text';
import { FaCircle } from 'react-icons/fa';
export interface MenuOption {
    menu: string;
    id: number;
}

export interface MenuOptionProps {
    options:MenuOption[];
    openslide: boolean;
    selectedOption?: MenuOption;
    setSelectedOption?: React.Dispatch<React.SetStateAction<MenuOption>>;
}

export const MenuOption = ({
    options,
    selectedOption,
    setSelectedOption,
    openslide = true,
}: MenuOptionProps) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(openslide);
    const onClickButton = () => {
        setOpen(!open);
    }

    const onClickMenuOption = (domain: string) => {
        navigate(`/classpick/${domain}`);
        setOpen(!open);
    }
    return (
        <Container>
            <Wrapper className = {open? `open` : `close`}>
                <MdClear size={'1.5rem'} onClick ={() => onClickButton()} style ={{position: 'absolute', right: '15px', cursor:'pointer'}}/>
                <Spacing size ={90}/>
                <ListWrapper>
                    {options.map((option, index) => (
                        <ListElement key={index} onClick={() => onClickMenuOption(option.menu)}>
                            <Text typo = {'Headline1'}>{option.menu}</Text>
                        </ListElement>
                    ))}
                </ListWrapper>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    position: fixed;
    right: 20px;
    .close{
        transform: translateX(360px);
    }
    .open{
        transform: translateX(-500px);
    }
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    display: relative;
    transition: all 0.1s ease-in-out;
    overflow: hidden;
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