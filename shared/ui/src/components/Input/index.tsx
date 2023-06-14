import styled, { css } from 'styled-components';
import { forwardRef, InputHTMLAttributes } from 'react';
// import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import { FlexBox } from '../../layout';
import { Text } from '../Text';
// import { KeyOfPalette } from '../../../theme';
// import { calcRem } from '../../../theme/typo';
// import { Text } from '../../Text';
// export { Search } from 'react-bootstrap-icons';


export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    width?: number;
    height?: number;
    errorMessage ?: string;

}
/**
 * @param width : number (기본값: 360px)
 * @param height : number (기본값: 49px)
 * @param value : input값에 대한 value
 * @param errorMessage: error 메세지가 존재할 경우 그에 대한 내용 
 */


export const Input = forwardRef<HTMLInputElement, InputProps>(({
    value,
    height,
    width,
    errorMessage,
    ...props
}: InputProps, ref
) => {
        return (
            <FlexBox direction='column' gap ={7} style={{width:'360px'}}>
                <Wrapper width ={width} height ={height}>
                    <InputWrapper value={value} ref={ref} onClick={props.onClick} autoComplete="off" ></InputWrapper>
                </Wrapper>
                {errorMessage && (
                    <MessageWrapper>
                        <Text typo ='Caption1' color='main_red'>{errorMessage}</Text>
                    </MessageWrapper>
                )}
            </FlexBox>
        )
    }   
);

const Wrapper = styled.div<{width?: number, height?: number}>`
    box-sizing: border-box;
    background: ${({ theme }) => theme.palette.white};
    border-radius: 10px;
    padding: 16px;
    border: 1px solid ${({ theme }) => theme.palette.black_800};

    height: ${({ height }) => (height ? `${height}px` : `49px`)};
    width: ${({ width }) => (width ? `${width}px` : '360px')};

    display: flex;
    align-items: center;
    flex-direction: row;
`;

const InputWrapper = styled.input`
    box-sizing: border-box;
    border: none;
    background: transparent;
    padding: 0;
    width: 100%;
    line-height: 100%;
    ${({ theme }) => theme.typo.Body2_2};
    color: ${({ theme }) => theme.palette.black};
    ::placeholder {
        color: ${({ theme }) => theme.palette.black_500};
    }

   &:disabled {
    ::placeholder {
       color: ${({ theme }) => theme.palette.black_900} !important;
    }
}
`

const MessageWrapper = styled.div<{
  errorMessage?: string;
}>`
  padding-left: 16px;
`
