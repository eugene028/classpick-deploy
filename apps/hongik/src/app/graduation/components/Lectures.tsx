import { TapBar } from "@hc/ui"
import { useState } from "react";
import { LectureTable } from './LectureTable';
import { LecturesType } from "src/types/Lecture";
import { GraduationCount } from './GraduationCount';

const menus: { title: string; key: LecturesType }[] = [
    { title: '전체', key: 'allLecture' },
    { title: '교양', key: 'GELecture' },
    { title: 'SW', key: 'SWLecture' },
    { title: '전공', key: 'MJLecture' }
  ];


export const Lectures = () => {
    const [menu, setMenu] = useState<number>(0);
    return (
        <>
            <TapBar menus={menus.map((menu) => menu.title)} 
                currentmenu={menu} setCurrentMenu={setMenu}/>
            <LectureTable menuType={menus[menu].key}/>
            <GraduationCount menuType={menus[menu].key}/>
        </>
    )
}