import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Multimedia, News } from "./types";

// Интерфейс для данных новостей
const apiKey = process.env.REACT_APP_DEFAULT_API_KEY;
interface NewsState {
  newsList: { [date: string]: News[] };
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  newsList: {},
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async ({ year, month }: { year: number; month: number }) => {
    const response = await fetch(
      `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`
    );
    const data = await response.json();
    return data.response.docs;
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        const newNews: News[] = action.payload;

        newNews.sort(
          (a, b) =>
            new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime()
        );

        const groupedNews: { [date: string]: News[] } = {};
        newNews.forEach((newsItem) => {
          const date = newsItem.pub_date.split("T")[0];
          if (!groupedNews[date]) {
            groupedNews[date] = [];
          }
          groupedNews[date].push(newsItem);
        });

        Object.keys(groupedNews).forEach((date) => {
          const newsForDay = groupedNews[date].filter(
            (newsItem) =>
              !state.newsList[date]?.some(
                (existing) => existing.web_url === newsItem.web_url
              )
          );
          if (newsForDay.length > 0) {
            state.newsList[date] = [
              ...(state.newsList[date] || []),
              ...newsForDay,
            ];
          }
        });

        state.loading = false;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.error.message ||
          "Что-то пошло не так, попробуйте презагрузить";
      });
  },
});

export const { actions, reducer } = newsSlice;
