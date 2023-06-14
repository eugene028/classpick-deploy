import { NavBar, media } from "@hc/ui";
import styled from "styled-components";
import Image from "next/image";
import { ReactNode } from "react";
import { useState, useCallback, useEffect } from "react";
import { SideMenuLayout  } from "./SideMenuLayout";

export const NavLayout = () => {
    const [open, setOpen] = useState(false);
    const onClickToggle = () => {
        setOpen(open => !open)
    }

    return (
        <SideContainer>
            <NavCotainer>
                <NavBar 
                    leftElement = {<Image src={'/images/classpick_logo.png'}alt={'로고이미지'} width={27} height={27}/>}
                    label ={<Image src={'/images/classpick_header.png'} width={100} height={20} alt ={'헤더'}/>}
                    onClickEvent={onClickToggle}
                />
            </NavCotainer>
            <SideMenuLayout openMenu={open} onClickEvent={() => onClickToggle()}/>
        </SideContainer>
    )
}

const NavCotainer = styled.div`
    top:0;
    width: 100%;
    height:60px;
    max-width:600px;
    position:fixed;
    z-index: 2;
    overflow-x:hidden
`

const SideContainer= styled.div`
    max-width:600px;
    position:relative;
`