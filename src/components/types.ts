export type OptionsType = {
    value: string | number;
    label: string;
};

export type Props = {
    options: OptionsType[];
    onChange: (e: any) => void;
    firstOptionDefault?: OptionsType;
    defaultValue?: number | string;
    defaultArrayValue?: number[] | string[];
    isMulti?: boolean;
    isSearchable?: boolean;
    placeholder?: string;
    searchPlaceholder?: string;
    backgroundColor?: string;
    backgroundColorItem?: string;
    borderColor?: string;
    borderHoverColor?: string;
    borderFocusColor?: string;
    textColor?: string;
    textColorActiveItem?: string;
    placeholderColor?: string;
    borderRadius?: string;
    borderRadiusItem?: string;
    borderWidth?: string;
    padding?: string;
    inputHeight?: string;
};
