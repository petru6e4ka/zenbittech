import { IFeedback } from "src/redux/feedback/store";
import { post } from "./api";

export const create = (body: IFeedback) => post({ url: "/feedbacks/", body });
