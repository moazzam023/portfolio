export interface IExperience {
    startDate: string;
    endDate: string;
    designation: string;
    companyName: string;
    workDtl: string;
    techUsed: string[];
}

export interface IProject {
    imgUrl?: string;
    title: string;
    description: string;
    additionalInfo: string;
    techUsed: string[]
}
