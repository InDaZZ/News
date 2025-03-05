import { News } from "../Store/Slices/types";

export const getImageUrl = (
  news: News,
  screenWidth: number
): string | undefined => {
  if (screenWidth <= 375) {
    return news.multimedia.find((item) => item.subtype === "thumbnail")?.url;
  } else {
    return news.multimedia.find((item) => item.subtype === "thumbLarge")?.url;
  }
};
