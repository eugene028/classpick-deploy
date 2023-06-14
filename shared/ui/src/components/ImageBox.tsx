import { css } from "styled-components";
import styled from "styled-components";

export interface LogoImageProps {
    size: [number, number];
    imageUrl: string;
}
/**
 * 
 * @param size [width, height]
 * @param imageUrl 이미지 링크를 주세요
 */

export const ImageBox = ({
    size,
    imageUrl,
}: LogoImageProps) => {
    return (
        <Wrapper size ={size}>
            <ImgBox imageUrl = {imageUrl}/>
        </Wrapper>
    )
}

const Wrapper = styled.div<{size: [number, number]}>`
    width: ${(props) => `${props.size[0]}px`};
    height: ${(props) => `${props.size[1]}px`};
`

const ImgBox = styled.div<{imageUrl: string}>`
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-color: '#ccc'; //제대로 랜더링이 안될 때를 방지하기 위함임.
    width: 100%;
    height: 100%;
`