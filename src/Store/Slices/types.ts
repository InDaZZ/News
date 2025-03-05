export interface Multimedia {
  rank: number;
  subtype: string;
  caption: string | null;
  credit: string | null;
  type: string;
  url: string;
  height: number;
  width: number;
  subType: string;
  crop_name: string;
  legacy: {
    xlarge: string;
    xlargewidth: number;
    xlargeheight: number;
  };
}

export interface News {
  abstract: string;
  web_url: string;
  headline: { main: string };
  pub_date: string;
  source: string;
  multimedia: Multimedia[];
}
