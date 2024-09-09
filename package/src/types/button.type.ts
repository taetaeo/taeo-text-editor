import type { DraftInlineStyle, DraftBlockType } from "draft-js";

export type ButtonGroupDataType = { label: string; eventLabel: string };

export type ButtonGroupListType = ButtonGroupDataType[];

export type ToggleInlineStyleType = (inlineStyle: DraftInlineStyle | string) => void;

export type toggleBlockType = (blockType: DraftBlockType) => void;
