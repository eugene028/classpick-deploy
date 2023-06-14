import styled from "styled-components";
import { theme } from "../../theme";
import { Text } from "../Text";
import { FlexBox } from "../../layout";
import { ImageBox } from "../ImageBox";
import { Tag } from "../Tag";
export interface ProfileProps extends React.ComponentProps<'div'> {
    name: string;
    studentId: string;
    major : string;
    grade: string;
}

export const Profile = ({name, studentId, major, grade}: ProfileProps) => {
    return(
        <Wrapper>
            <FlexBox justify="flex-start" style={{padding: '0px 19px 6px 19px'}}>
                <Text typo={'Subtitle3'} color={'main_blue'}>{name}</Text>
                <Text typo ={'Body2_2'} color ={'black'}  style={{marginRight:'10px'}}>님의 졸업요건</Text>
                <Tag variant="keyword" color ='select'>교과과정 보기</Tag>
            </FlexBox>
            <FlexBox justify="flex-start" style={{padding: '0px 19px'}} gap={7}>
                <Text typo='Caption3_1' color ='black'>{studentId}</Text>
                <Tag variant="keyword" color ='key'>{major}</Tag>
                <Tag variant="keyword" color ='key'>{grade}</Tag>
            </FlexBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 360px;
    background-image: url('images/hongiklogo.png');
    background-position: 100% 100%;
    background-repeat: no-repeat;
    height: 95px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.1);
    border: 1px solid ${theme.palette.black_900};
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
`