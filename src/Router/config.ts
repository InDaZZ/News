export enum EAppRoutes {
  MAIN = "main",
  NEWS = "news",
}

export const routePaths: Record<EAppRoutes, string> = {
  [EAppRoutes.MAIN]: "/",
  [EAppRoutes.NEWS]: "/news",
};
