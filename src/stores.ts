// stores.ts
import { TFile } from "obsidian";
import { writable } from "svelte/store";

export const fileStore = writable<TFile[]>([]);
