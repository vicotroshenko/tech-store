import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AddDispatch } from "../redux/store";

export const useAppDispatch = () => useDispatch<AddDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;