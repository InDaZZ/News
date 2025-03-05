import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../Store/Slices/News";
import { AppDispatch, RootState } from "../Store/types/reduxTypes";
import NewsItem from "../NewsItem/NewsItem";
import { debounce } from "../utils/debounce";
import Loader from "../Loader/Loader";

import { EImageSize } from "./model/ImageSaze";
import "./News.css";

const News = () => {
  const dispatch: AppDispatch = useDispatch();
  const { newsList, loading, error } = useSelector(
    (state: RootState) => state.News
  );
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [size, setSize] = useState<EImageSize | undefined>(undefined);

  useEffect(() => {
    const updateSize = () => {
      if (screenWidth <= 375) {
        setSize(EImageSize["mobile_small"]);
      } else {
        setSize(EImageSize["mobile_medium"]);
      }
    };

    updateSize();
  }, [screenWidth]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setScreenWidth(window.innerWidth);
    }, 200);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Загружаем новости при монтировании компонента
  useEffect(() => {
    const currentYear = new Date().getFullYear(); // Пример текущего года
    const currentMonth = new Date().getMonth() + 1; // Пример текущего месяца (январь)

    dispatch(fetchNews({ year: currentYear, month: currentMonth }));

    // Устанавливаем таймер для подгрузки новостей каждые 30 секунд
    const intervalId = setInterval(() => {
      dispatch(fetchNews({ year: currentYear, month: currentMonth }));
    }, 30000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <div className="newspage">
      {loading && <Loader className="newspage__loader"></Loader>}

      {error && <p>{error}</p>}
      {Object.entries(newsList).map(([date, newsItems]) => (
        <div key={date}>
          <h2 className="newspage__date">News for {date}</h2>

          <ul className="newspage__tape">
            {newsItems.map((news) => (
              <NewsItem
                news={news}
                key={news.web_url}
                screenWidth={screenWidth}
                size={size as string} // Теперь size будет задано при первом рендере
              ></NewsItem>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default News;
