import { SanityImageSource } from "@sanity/image-url/lib/types/types"


export interface Props{
    data?:{
      user?:User,
      resume?: Resume,
    }
  }

export interface User{
    profilePicture?: any,
    fullName?:string,
    jobTitle?:stringLocale,
    email?:string,
    linkedIn?:string,
    telephone?:string,
    github?:string,
    nftWallet?:string,
    introduction?:BlockLocale,
    coverLetter?:BlockLocale,   
}
export interface Workhistory{
    companyName:string,
    companyLogo:SanityImageSource,
    fromDate:Date,
    toDate:Date,
    jobTitle:StringLocale,
    jobDescription:BlockLocale
}
export interface Education{
    institutionName:string,
    institutionImage:SanityImageSource,
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
    en:[any],
    es:[any],
    pt:[any],
}
export interface StringLocale{
    en:string,
    es:string,
    pt:string
}

export interface AdditionalTraining{
    date:Date,
    institutionName: string,
    institutionImage:SanityImageSource,
    degreeTitle:StringLocale,
    degreeDescription:BlockLocale,
}
export interface Resume{
    user:User,
    workhistorys:Workhistory[],
    educations:Education[],
    additionalTrainings:AdditionalTraining[],
}