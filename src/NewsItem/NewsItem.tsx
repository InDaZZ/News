import { FC, memo, useEffect, useState } from "react";
import "./NewsItem.css";
import { News } from "../Store/Slices/types";
import LazyImage from "../LazyImage/LazyImage";

import { formatDate } from "../utils/formatDate";
import DefaultImage from "../images/default_news.webp";
import { getImageUrl } from "../utils/getImageUrl";

interface INewsItemProp {
  news: News;
  screenWidth: number;
  size: string;
}

const NewsItem: FC<INewsItemProp> = (props) => {
  const { news, screenWidth, size } = props;
  const imageUrl = getImageUrl(news, screenWidth);

  return (
    <a
      href={news.web_url}
      target="_blank"
      rel="noopener noreferrer"
      className="newsitem__link"
    >
      <li className="newsitem">
        <p className="newsitem__source">{news.source}</p>
        <LazyImage
          src={imageUrl ? `https://www.nytimes.com/${imageUrl}` : DefaultImage}
          alt="image"
          loading="lazy"
          className={`newsitem__image newsitem__image${size}`}
        ></LazyImage>
        <div className="newsitem__text-wraper">
          <p className="newsitem__title">{news.abstract}</p>
          <time className="newsitem__date">{formatDate(news.pub_date)}</time>
        </div>
      </li>
    </a>
  );
};

export default memo(NewsItem);

//   <a
//         href={news.web_url}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="newsitem__link"
//       >
//         {news.headline.main}
//       </a>
