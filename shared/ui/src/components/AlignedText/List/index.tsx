import styled from "styled-components"
import { theme } from "../../../theme";
import { ReactNode } from "react";
import { Text } from '../../Text';

export interface ListProps extends React.ComponentProps<'div'>{
    first: ReactNode;
    second: ReactNode;
    third: ReactNode;
    width?: number;
}

export const List = ({first, second, third, width=360}: ListProps) => {
    return (
        <Wrapper width ={width}>
            <div style={{flexGrow: '2', maxWidth:'150px'}}>{first}</div>
            <div style={{flexGrow: '3', maxWidth:'120px' }}>{second}</div>
            <div style={{flexGrow: '1', }}>{third}</div>
        </Wrapper>
    )
}
const Wrapper = styled.div<{width: number}>`
    width: ${({width}) =>`${width}px`};
    background-color: #fff;
    height: 51px;
    border-bottom: 1px solid ${theme.palette.black_900};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 15px 19px;
    gap: 8px;
`