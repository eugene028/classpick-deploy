import styled from "styled-components";
import { theme } from "../../../theme";
import { Text } from "../../Text";
export interface TableHeaderProps extends React.ComponentProps<'div'>{
    tablelabel: string[];
    width?: number;
}
    

export const TableHeader = ({
    tablelabel, 
    width = 360 }: TableHeaderProps) => {
    let labelcnt = tablelabel.length;
    return (
        <Wrapper width ={width}>
            {labelcnt === 4 ? 
            <>
                <div style={{flex: '1 1 0', textAlign: 'center'}}><Text typo='Body1_2'>{tablelabel[0]}</Text></div>
                <div style={{flex: '2 1 0', textAlign: 'center'}}><Text typo='Body1_2'>{tablelabel[1]}</Text></div>
                <div style={{flex: '1 1 0', textAlign: 'center'}}><Text typo='Body1_2'>{tablelabel[2]}</Text></div>
                <div style={{flex: '1 1 0', textAlign: 'center'}}><Text typo='Body1_2'>{tablelabel[3]}</Text></div>
            </>
            : (labelcnt === 3 ? 
                <>
                     <div style={{flex: '2 1 0', textAlign: 'center'}}><Text typo ='Body1_2'>{tablelabel[0]}</Text></div>
                     <div style={{flex: '2 1 0', textAlign: 'center'}}><Text typo ='Body1_2'>{tablelabel[1]}</Text></div>
                     <div style={{flex: '1 1 0', textAlign: 'center'}}><Text typo ='Body1_2'>{tablelabel[2]}</Text></div>
                </>
            :   <>
                    <div style={{flex: '1 1 0', textAlign: 'center'}}><Text typo ='Body1_2'>{tablelabel[0]}</Text></div>
                    <div style={{flex: '1 1 0', textAlign: 'center'}}><Text typo ='Body1_2'>{tablelabel[1]}</Text></div>
                </>)
            }
        </Wrapper>
    )
}

const Wrapper = styled.div<{width: number}>`
    width: ${({width}) => `${width}px`};
    height: 46px;
    border-radius: 10px;
    background-color: ${theme.palette.black_1000};
    color: ${theme.palette.black};
    display: flex;
    align-items: center;
    padding: 0px 7px;
`