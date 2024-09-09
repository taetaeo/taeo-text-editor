import type { DraftStyleMap } from "draft-js";
import type { Coord } from "./coord.type";
import type { Direction } from "./direction.type";
import type { FontCSSType } from "./fonts.type";
import type { OffsetLength } from "./offset.type";
import type { Point } from "./point.type";
import type { Size } from "./size.type";
import type { Style, Styles } from "./style.type";
import type { KeyAbleType, NameType } from "./helper.type";
import type { ButtonGroupDataType, ButtonGroupListType, toggleBlockType, ToggleInlineStyleType } from "./button.type";
import type { SelectOptionListType, SelectOptionType } from "./select.type";
import type { ToolbarConfigObjectListType, ToolbarConfigObjectType } from "./object";
import type { AlignType, FontAlignType } from "./align.type";
import type { OptionsClassType } from "./cn.type";
import type { ButtonVariantType } from "./variant.type";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Any = any;

export type OriginInLineStyleType = OffsetLength & Style;

export type ReStructInLineStyleType = Point & Style;

export type ReStructInLineStylesType = Point & Styles;

export type ElementRectType = Direction & Size & Coord;

export type StyleMapOptionType = FontCSSType;

export type CustomStyleMapType = DraftStyleMap;

export type KeyAble = KeyAbleType;

export type Name = NameType;

export type ButtonGroupData = ButtonGroupDataType;

export type ButtonGroupList = ButtonGroupListType;

export type ToggleInlineStyle = ToggleInlineStyleType;

export type ToggleBlockType = toggleBlockType;

export type SelectOption = SelectOptionType;

export type SelectOptionList = SelectOptionListType;

export type ToolbarConfigObject = ToolbarConfigObjectType;

export type ToolbarConfigObjectList = ToolbarConfigObjectListType;

export type Align = AlignType;

export type FontAlign = FontAlignType;

export type OptionsClass = OptionsClassType;

export type ButtonVariant = ButtonVariantType;
