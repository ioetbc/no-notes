import {Dimensions} from "react-native";

export const SCREEN_WIDTH = Dimensions.get("screen").width;
export const SCREEN_HEIGHT = Dimensions.get("screen").height;

export const THUMBNAIL_WIDTH = 40;
export const THUMBNAIL_HEIGHT = 40;
export const THUMBNAIL_GAP = 10;
export const THUMBNAIL_WIDTH_AND_GAP = THUMBNAIL_WIDTH + THUMBNAIL_GAP;

export const HERO_IMAGE_HEIGHT = SCREEN_HEIGHT - THUMBNAIL_HEIGHT - 200;
