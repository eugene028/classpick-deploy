import { media } from "@hc/ui";
import styled from "styled-components";
import { ReactNode } from "react";

const ContentLayout = ({children}: {
    children: ReactNode,
    fullWidth?: boolean;
}) => {
    return (
    <Wrapper>
        {children}
    </Wrapper>)
}

export default ContentLayout;

const Wrapper = styled.div`
  padding: 0px 20px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;
  ${media.pc} {
    max-width: var(--main-width);
    margin: 0 auto;
    position:relative;
    min-height: 100vh;
  }
`;