import { SanityImageSource } from "@sanity/image-url/lib/types/types"


export interface User{
    profilePicture:SanityImageSource,
    fullName:string,
    jobTitle:stringLocale,
    email:string,
    linkedIn:string,
    telephone:string,
    github:string,
    nftWallet:string,
    introduction:BlockLocale,
    coverLetter:BlockLocale,   
}
export interface Workhistory{
    companyName:string,
    companyLogo:string,
    fromDate:Date,
    toDate:Date,
    jobTitle:StringLocale,
    jobDescription:BlockLocale
}
export interface Education{
    institutionName:string,
    institutionImage:string,
    fromDate:Date,
    toDate:Date,
    degreeTitle:StringLocale,
    degreeDescription:BlockLocale
}
export interface Project{
    projectName:string,
    projectSlug:{
        current:string,
    },
}
export interface BlockLocale{
    en:object[],
    es:object[],
    pt:object[],
}
export interface StringLocale{
    en:string,
    es:string,
    pt:string
}
export interface Resume{
    user:User,
    workhistorys:[Workhistory],
    educations:[Education],
    additionalTrainings:[AdditionalTraining]
}