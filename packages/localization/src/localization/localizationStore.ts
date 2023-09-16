import {atom} from "jotai";
import { translationMap } from './localization.types';

export const currentLangAtom = atom<string>('')
export const translationMapAtom = atom<translationMap | null>(null)
