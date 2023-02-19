import store from "./store";
import { createSelector } from "@reduxjs/toolkit";

const self = (state: Record<string, any>) => state?.[store.name];

export const getName = createSelector(self, ({ name }) => name);

export const getEmail = createSelector(self, ({ email }) => email);

export const getMessage = createSelector(self, ({ message }) => message);
