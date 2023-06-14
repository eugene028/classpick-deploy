import { ReactNode } from "react";
import { KeyOfColor, KeyOfTypo } from "../../../theme";
import styled from "styled-components";
import { theme } from "../../../theme";
import { css } from "styled-components";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FlexBox } from "../../../layout";
import { Text } from "../../Text";

type GraduationInfoType = 'primary' | 'basic' | 'mini';

type GraduationInfoShape = {
    [keys in GraduationInfoType]:{
        backgroundColor: KeyOfColor;
        color: KeyOfColor;
        typo : KeyOfTypo;
        width: string;
        height: string;
        border?: KeyOfColor;
        radius: number;
    }
}
const GRADUATION_INFO_SHAPE: GraduationInfoShape = {
    primary: {
        backgroundColor:'black',
        color: 'white',
        typo :'Body2_2',
        width: '360px',
        height: '44px',
        radius: 10,
    },
    basic:{
        backgroundColor: 'white',
        color: 'black',
        typo: 'Subtitle1_1',
        width: '360px',
        height: '44px',
        radius: 10,
        border: 'black_800',
    },
    mini:{
        backgroundColor: 'white',
        color: 'black',
        typo: 'Subtitle1_1',
        width: '116px',
        height: '79px',
        radius: 10,
        border: 'black_800'
    }
}
/**
 * @param label 주로 들어갈 말
 * @param infoString 안내문구 필요한 경우 존재
 * @param leftElement 들어갈 우측 요소
 * @param variant info의 종류 'primary' | 'basic' | 'mini'
 */
export interface GraduationInfoProps extends React.ComponentProps<'div'>{
    label: string;
    infoString?: string;
    rightElement?: ReactNode;
    variant: GraduationInfoType;
}
export const GraduationInfo = ({label, infoString, rightElement, variant}: GraduationInfoProps) => {
    return(
        <Wrapper variant = {variant}>
            <FlexBox gap ={8}>
                <Text typo ={GRADUATION_INFO_SHAPE[variant].typo} color ={GRADUATION_INFO_SHAPE[variant].color}>
                    {label}</Text>
                {infoString ? (
                    <InfoWrapper variant={variant}>
                        <AiOutlineInfoCircle size={'1.2rem'}className ='infoIcon'/>
                        <Text typo ={'Caption3_1'} color ='black_700' className='infoString'>
                            {infoString}
                        </Text>
                    </InfoWrapper>
                ) : null
                }
    
            </FlexBox>
            <RightWrapper variant={variant}>
                {rightElement}
            </RightWrapper>
        </Wrapper>
    )
}

const InfoWrapper = styled.div<{variant: GraduationInfoType}>`
    display:flex;
    align-items: center;
    gap: 7px;
    .infoIcon{
        ${({variant, theme}) => (variant === 'primary' ? css`
            color: ${theme.palette.white};
        `: css`
            color: ${theme.palette.black_300};
        `
        )
    }
}
    .infoString{
        display: none;
    }
    .infoIcon:hover + .infoString {
        display: block;
    } 
`

const RightWrapper = styled.div<{variant: GraduationInfoType}>`
    position : absolute;
    ${({variant}) => (variant !== 'mini' ? css`
        right: 23px;
    ` : css`
        bottom: 13px;
        margin: 0 auto;
    `)}
`

const Wrapper = styled.div<{variant: GraduationInfoType}>`
    width : ${({variant}) => GRADUATION_INFO_SHAPE[variant].width};
    height: ${({variant}) => GRADUATION_INFO_SHAPE[variant].height};
    background-color: ${({variant}) => theme.palette[GRADUATION_INFO_SHAPE[variant].backgroundColor]};
    border-radius: ${({variant}) => (`${GRADUATION_INFO_SHAPE[variant].radius}px`)};
    display: flex;
    ${({variant}) => (variant !== 'mini' ? css`
        align-items: center;
        padding: 0px 17px; 
    ` : css`
        align-items: flex-start;
        padding: 14px 18px; 
    `)}
    position: relative;
    ${({variant, theme}) => variant !== 'primary' && 
        css`
            border: 1px solid ${theme.palette[GRADUATION_INFO_SHAPE[variant].border!]}
        `
     }
`;
