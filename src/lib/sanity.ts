import {
  createClient,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
  ProjectConfig,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { config } from "./config";
import { SanityClientLike, SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config as ProjectConfig);

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config as SanityClientLike).image(source);
// Helper function for using the current logged in user account


export const useCurrentUser = createCurrentUserHook(config as any);
