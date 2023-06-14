import styled from "styled-components";
import { useRef, useState } from "react";
import RowCards from "./RowCards";

export const LectureContainer = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isDrag, setIsDrag] = useState(false);
    const [startX, setStartX] = useState();

    const onDragStart = (e: any) => {
        e.preventDefault();
        setIsDrag(true);
        if (scrollRef.current)
            setStartX(e.pageX + scrollRef.current.scrollLeft);
    }
    const onDragEnd = (e: any) => {
        setIsDrag(false);
    }
    const onDragMove = (e: any) => {
        if(isDrag){
            if(scrollRef.current)
                scrollRef.current.scrollLeft = startX! - e.pageX;
        }
    }
    const throttle = (func:(e:any)=>void, ms:number) => {
        let throttled = false;
        return (e:any) => {
            if(!throttled){
                setTimeout(()=> {
                    func(e);
                    throttled = false;
                }, ms);
            }
        }
    };
    const delay = 100;
    const onThrottleDragMove = throttle(onDragMove, delay);

    return (
        <Wrapper>
            <RowCards ref={scrollRef}
                onMouseDown={onDragStart}
                onMouseMove={onThrottleDragMove}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                label={'커뮤니케이션디자인(1)'}
                major={true}
            />
            <RowCards ref={scrollRef}
                onMouseDown={onDragStart}
                onMouseMove={onThrottleDragMove}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                label={'논리적사고와글쓰기'}
                major={false}
            />
            <RowCards ref={scrollRef}
                onMouseDown={onDragStart}
                onMouseMove={onThrottleDragMove}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                label={'디자인리서치(1)'}
                major={true}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    width: 500px;
    flex-direction: row;
    gap: 9px;
    overflow-x: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`