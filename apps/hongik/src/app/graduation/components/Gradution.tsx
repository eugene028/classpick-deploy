import { FlexBox, Text, Profile, Spacing, GraduationInfo } from "@hc/ui";
import { Lectures } from "./Lectures";

export default function Graduation() {
    return (
      <>
        <FlexBox justify='flex-start' align='flex-start' fullWidth={true}>
          <Text typo='Headline1'>졸업 요건 조회하기</Text>
        </FlexBox>
        <Spacing size={17}/>
        <Profile name={'홍시디'} studentId={'C123456'} major={'시각디자인과'} grade={'3학년'}/>
        <Spacing size={17}/>
        <GraduationInfo variant={'primary'} 
          infoString={'최대 50학점 인정'} label={'전체 졸업인정학점'}
          rightElement={<>
            <Text typo ={'Subtitle2'} color={'blue_700'}>72 </Text>
            <Text typo ={'Subtitle2'} color={'white'}>/ 132</Text>
          </>}/>
        <Lectures/>
      </>
    )
  }