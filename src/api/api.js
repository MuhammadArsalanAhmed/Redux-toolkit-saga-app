import { AxiosClient } from "./client";

export const getCats = () => AxiosClient.get("/breeds");
