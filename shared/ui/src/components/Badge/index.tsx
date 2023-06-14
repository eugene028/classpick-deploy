import { KeyOfColor } from "../../theme";
import styled from "styled-components";
import { Text } from '../Text/index';
export type BadgeType= 'main' | 'high' | 'medium' | 'low';

type BadgeColor = {
    [key in BadgeType]: KeyOfColor;
}

const BADGE_COLOR: BadgeColor = {
    main: 'main_blue',
    high: 'main_red',
    medium: 'yellow',
    low: 'green'
}

export interface BadgeProps extends React.ComponentProps<'div'> {
    variant: BadgeType;
}

export const Badge = ({children, variant} : BadgeProps) => {
    return (
        <Wrapper variant = {variant}>
            <Text typo ={'Caption3_3'} color ={'white'}>{children}</Text>
        </Wrapper>
    )
}

const Wrapper = styled.div<{variant: BadgeType}>`
    height: 20px;
    display: flex;
    padding: 0px 7px;
    flex-direction: center;
    align-items: center;
    border-radius: 5px;
    background-color: ${({ theme, variant }) =>
    theme.palette[BADGE_COLOR[variant]]};
    display:inline-block;
`
