import type { ClientConfig } from '@sanity/client';

export const config : ClientConfig    = {
    projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion:process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: true,
}
