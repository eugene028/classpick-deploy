import { FlexBox } from "@hc/ui"
import { Text } from "@hc/ui"
export const ProgressBarCaption = ({}) => {
    return(
            <FlexBox gap={28}>
                <FlexBox direction="column">
                    <Text typo ={'Caption3_2'}>강의 담아두기</Text>
                    <Text typo ={'Caption2_1'} color ={'main_blue'}>6/11 09:00</Text>
                </FlexBox>
                <FlexBox direction="column">
                    <Text typo ={'Caption3_2'}>우선순위 설정</Text>
                    <Text typo ={'Caption2_1'} color ={'main_blue'}>6/17 24:00</Text>
                </FlexBox>
                <FlexBox direction="column">
                    <Text typo ={'Caption3_2'}>강의 담아두기</Text>
                    <Text typo ={'Caption2_1'} color ={'main_blue'}>6/19 24:00</Text>
                </FlexBox>
                <FlexBox direction="column">
                    <Text typo ={'Caption3_2'}>수강신청</Text>
                    <Text typo ={'Caption2_1'} color ={'main_blue'}>6/20 09:00</Text>
                </FlexBox>
            </FlexBox>
    )
}
