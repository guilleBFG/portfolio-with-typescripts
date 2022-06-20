
interface SanityConfig{
    projectId:string,
    dataset:string,
    apiVersion:string | undefined,
    useCdn:boolean
}

export const config : SanityConfig    = {
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion:process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: true
}
