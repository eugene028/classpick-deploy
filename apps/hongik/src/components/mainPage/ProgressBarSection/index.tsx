import Progress from "@hc/ui/src/components/Progress"
import { FlexBox } from "@hc/ui"
import { ProgressBarCaption } from "./ProgressBarCaption";
import styled from 'styled-components';

export const ProgressBarSection = () => {
    return (
        <Wrapper>
            <FlexBox direction="column" gap={12}>
                <Progress step={3} currentStep={2} />
                <ProgressBarCaption/>
            </FlexBox>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 16px 0px;
    width: 100%;
`