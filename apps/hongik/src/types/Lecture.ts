export type LecturesType = 'allLecture' | 'GELecture' | 'SWLecture' | 'MJLecture';

export interface LectureInfo {
    key: LecturesType;
    lecture: string;
    category: '교필' | '공교' | '전기' | '전필' | '전선'
    grade: 3 | 4 | 0 | 2;
    isPassed : 'Passed' | 'Failed' | 'Notyet'
    lectureDetail?: LectureInfoDetail[];
}

export interface LectureInfoDetail {
    lectureLabel: string;
    term: string;
    grade:  0 | 2 | 3 | 4;
}

export interface PassedLecture {
    lecture: string;
    lectureLabel: string;
    lectureId: string;
    professor: string;
    when: string;
    myGrade: 'A+' | 'A0' | 'B+' | 'B0' | 'C+' | 'C0' | 'D+' | 'D0' | 'F';
    grade: 0 | 2 | 3 | 4;
    cyber: boolean;
    retry: true | false;
    etc?: string;
}
