import { media } from "@hc/ui";
import styled from "styled-components";
import { ReactNode } from "react";
import useWindowSizeCustom from '../../hooks/useResize';


const MainLayout = ({children}: {
    children: ReactNode,
    fullWidth?: boolean;
}) => {
  const {width, height} = useWindowSizeCustom();
    return (
    <Wrapper width ={width}>
        {children}
    </Wrapper>)
}

export default MainLayout;

const Wrapper = styled.div<{width: number}>`
    max-width: 600px;
    margin: 0 auto;
    min-height: calc(var(--vh, 1vh) * 100);
    
    background-color: #ffffff;
    overflow-x:hidden
    
`;