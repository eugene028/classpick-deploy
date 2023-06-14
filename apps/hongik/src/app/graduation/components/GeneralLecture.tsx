import { FlexBox, Text } from "@hc/ui"
export const GeneralLecture = () => {
    return(
        <FlexBox direction ={'column'} justify={'flex-start'} align={'flex-start'} gap={20}>
            <Text typo={'Headline1'}>일반선택</Text>
            <Text typo={'Body1_1'}> 일반선택은 본인의 주전공 혹은 복/부전공 아닌 타 과의 <br/>전공 교과목 혹은 전공 기초 교과목을 의미합니다. 교양과 다르게 최대 인정 학점이 따로 존재하지 않으며, <br/>학생의 전공 평점에는 포함되지 않습니다.</Text>
        </FlexBox>
    )
}