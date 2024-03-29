import {Dimensions, NativeModules} from "react-native";

export const STATUS_BAR_HEIGHT = NativeModules.StatusBarManager.HEIGHT;
export const SCREEN_WIDTH = Dimensions.get("screen").width;

export const SCREEN_HEIGHT =
  Dimensions.get("screen").height - STATUS_BAR_HEIGHT;

export const THUMBNAIL_WIDTH = 40;
export const THUMBNAIL_HEIGHT = 40;
export const THUMBNAIL_GAP = 10;
export const THUMBNAIL_WIDTH_AND_GAP = THUMBNAIL_WIDTH + THUMBNAIL_GAP;

export const BOTTOM_SHEET_DEFAULT_HEIGHT = SCREEN_HEIGHT * 0.2;

export const HERO_IMAGE_HEIGHT = SCREEN_HEIGHT * 0.8;
