import { store } from "../Store";

export type AppStore = typeof store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

// export interface IbasketAction {
//     type: string;
//     payload: IproductType;
// }

// export interface ImodalState {
//     modalMainState: boolean;
// }

// export interface ImodalAction {
//     type: string;
//     payload: ImodalState;
// }
