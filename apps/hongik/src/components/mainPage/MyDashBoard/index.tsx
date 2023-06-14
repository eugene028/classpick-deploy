import { FlexBox } from "@hc/ui";
import { MiniProfile } from "./MiniProfile";
import { GraduationDashBoard } from "./GraduationDashboard";
export const MyDashBoard = () => {
    return (
        <FlexBox gap ={16} fullWidth={true}>
            <MiniProfile/>
            <GraduationDashBoard/>
        </FlexBox>
    )
}