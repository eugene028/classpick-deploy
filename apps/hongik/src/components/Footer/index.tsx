import styled from "styled-components";
import { theme } from "@hc/ui";

export const Footer = () => {
    return (
        <FooterContainer>
           홍익대학교 홈페이지
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    box-sizing: border-box;
    width: 100%;
    height: 188px;
    bottom: 0px;
    padding: 25px;
    background: ${theme.palette.black_1100};
    border-top: 1px solid ${theme.palette.black_900};

`