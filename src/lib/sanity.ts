import {
  createClient,
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
import { config } from "./config";
import {  SanityImageSource } from "@sanity/image-url/lib/types/types";

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source: SanityImageSource) =>
  createImageUrlBuilder(config).image(source);
// Helper function for using the current logged in user account


export const useCurrentUser = createCurrentUserHook(config);
