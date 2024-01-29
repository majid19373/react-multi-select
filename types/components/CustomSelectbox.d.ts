import React from 'react';
import './styles.css';
type OptionsType = {
    value: string | number;
    label: string;
};
type Props = {
    options: OptionsType[];
    onChange: (e: any) => void;
    firstOptionDefault?: OptionsType;
    defaultValue?: number | string;
    defaultArrayValue?: number[] | string[];
    isMulti?: boolean;
    isSearchable?: boolean;
    placeholder?: string;
};
export declare const CustomSelectBox: (props: Props) => React.JSX.Element;
export {};
