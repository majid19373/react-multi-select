import React, { useEffect, useRef, useState } from 'react';
import { AngleIcon, CloseIcon } from './Icon';
import '../../assets/styles.css';
import { OptionsType, Props } from './types';
import { v4 as uuidv4 } from 'uuid';

export const CustomSelectBox = (props: Props) => {
    const {
        onChange,
        options,
        defaultArrayValue = [],
        defaultValue = 0,
        firstOptionDefault,
        isMulti = false,
        isSearchable = false,
        placeholder = 'Select...',
        searchPlaceholder = 'Search...',
        backgroundColor = '',
        backgroundColorItem = '',
        borderColor = '',
        borderHoverColor = '',
        borderFocusColor = '',
        textColor = '',
        textColorActiveItem = '',
        placeholderColor = '',
        borderRadius = '',
        borderRadiusItem = '',
        borderWidth = '',
        inputHeight = '',
        padding = ''
    } = props;

    // State variables using React hooks
    const [showMenu, setShowMenu] = useState<boolean>(false); // Controls the visibility of the dropdown menu
    const [selectedValue, setSelectedValue] = useState<(number | string) | (number | string)[]>(isMulti ? defaultArrayValue : defaultValue); // Stores the selected value(s)
    const [searchValue, setSearchValue] = useState<string>(''); // Stores the value entered in the search input
    const searchRef = useRef<any>(); // Reference to the search input element
    const inputRef = useRef<any>(); // Reference to the custom select input element
    const [isOpenUp, setIsOpenUp] = useState<boolean>(false);

    const uniqueId = uuidv4();

    useEffect(() => {
        const rootVariable: HTMLElement | null = document.getElementById(`__customSelectbox-${uniqueId}`);
        if (rootVariable) {
            if (backgroundColor) {
                rootVariable.style.setProperty('--background-color', backgroundColor);
            }
            if (backgroundColorItem) {
                rootVariable.style.setProperty('--background-hover-color', backgroundColorItem);
            }
            if (borderColor) {
                rootVariable.style.setProperty('--border-color', borderColor);
            }
            if (borderHoverColor) {
                rootVariable.style.setProperty('--border-hover-color', borderHoverColor);
            }
            if (borderFocusColor) {
                rootVariable.style.setProperty('- --background-hover-color', borderFocusColor);
            }
            if (textColor) {
                rootVariable.style.setProperty('--text-color', textColor);
            }
            if (textColorActiveItem) {
                rootVariable.style.setProperty('--text-hover-color', textColorActiveItem);
            }
            if (placeholderColor) {
                rootVariable.style.setProperty('--placeholder-color', placeholderColor);
            }
            if (borderRadius) {
                rootVariable.style.setProperty('--border-radius', borderRadius);
            }
            if (borderRadiusItem) {
                rootVariable.style.setProperty('--border-radius-select', borderRadiusItem);
            }
            if (borderWidth) {
                rootVariable.style.setProperty('--border-width', borderWidth);
            }
            if (padding) {
                rootVariable.style.setProperty('--padding', padding);
            }
            if (inputHeight) {
                rootVariable.style.setProperty('--height-input', inputHeight);
            }
        }
    }, []);

    useEffect(() => {
        setSearchValue('');
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
        if (showMenu && inputRef.current) {
            const spaceBelow = window.innerHeight - inputRef.current.getBoundingClientRect().bottom;
            if (spaceBelow < 200) {
                setIsOpenUp(true);
            } else {
                setIsOpenUp(false);
            }
        }
    }, [showMenu]);

    useEffect(() => {
        const handler = (e: any) => {
            if (inputRef.current && !inputRef.current.contains(e.target)) {
                if (!searchRef.current) {
                    setShowMenu(false);
                } else if (!searchRef.current.contains(e.target)) {
                    setShowMenu(false);
                }
            }
        };

        window.addEventListener('click', handler);
        return () => {
            window.removeEventListener('click', handler);
        };
    });

    useEffect(() => {
        onChange(isMulti ? defaultArrayValue : defaultValue);
    }, []);

    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (isMulti && Array.isArray(selectedValue) && selectedValue.length) {
            const optionsSelected: OptionsType[] = [];
            options.forEach((option) => {
                if (selectedValue.includes(option.value)) {
                    optionsSelected.push(option);
                }
            });
            return (
                <div className={'__isMulti'}>
                    {optionsSelected.map((option: OptionsType, index: number) => (
                        <div key={`${option.value}-${index}`} className="__selectedItems">
                            {option.label}
                            <span onClick={(e) => onTagRemove(e, option.value)} className="p-1">
                                <CloseIcon />
                            </span>
                        </div>
                    ))}
                </div>
            );
        } else if (isMulti) {
            return (
                <div className="__isMulti">
                    <div className="__isPlaceholder">{placeholder}</div>
                </div>
            );
        }
        const optionSelected: OptionsType = options?.find((option) => option.value === selectedValue) as OptionsType;
        if (optionSelected) {
            return optionSelected?.label;
        }
        return firstOptionDefault?.label;
    };

    const removeOption = (optionValue: number | string) => {
        if (Array.isArray(selectedValue)) {
            return selectedValue.filter((item: number | string) => item != optionValue);
        }
        return [];
    };

    const onTagRemove = (e: any, optionValue: number | string) => {
        e.stopPropagation();
        const newValue = removeOption(optionValue);
        setSelectedValue(newValue);
        onChange(newValue);
    };

    const onItemClick = (optionValue: number | string) => {
        let newValue;
        if (isMulti) {
            if (Array.isArray(selectedValue)) {
                if (selectedValue.findIndex((item: number | string) => item === optionValue) >= 0) {
                    newValue = removeOption(optionValue);
                } else {
                    newValue = [...selectedValue, optionValue];
                }
                setSelectedValue(newValue);
            }
        } else {
            newValue = optionValue;
            setSelectedValue(newValue);
        }
        onChange(newValue);
    };

    const isSelected = (optionValue: number | string) => {
        if (isMulti && Array.isArray(selectedValue)) {
            return selectedValue.filter((item: number | string) => item === optionValue).length > 0;
        }

        if (!selectedValue) {
            return false;
        }

        return selectedValue === optionValue;
    };

    const onSearch = (e: any) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if (!searchValue) {
            return options;
        }

        return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };

    return (
        <div id={`__customSelectbox-${uniqueId}`} className="__customSelectbox">
            <div ref={inputRef} onClick={handleInputClick} className={`${showMenu ? '__showSelectbox' : ''} __customSelectbox_main __customInput`}>
                <div className={`${!selectedValue || (Array.isArray(selectedValue) && selectedValue.length === 0) ? 'placeholder' : ''}`}>{getDisplay()}</div>
                <div className="__customSelectbox_angleMain">
                    <AngleIcon isOpen={showMenu} />
                </div>
            </div>
            {showMenu && (
                <div className={`${isOpenUp ? '__bottomOpen' : ''} __customeSelectbox_dropContents`}>
                    {isSearchable && (
                        <div className="__searchMain">
                            <input dir="auto" className="__customInput" placeholder={searchPlaceholder} onChange={onSearch} value={searchValue} ref={searchRef} />
                        </div>
                    )}
                    {firstOptionDefault && (
                        <div className="__itemMain" key={firstOptionDefault.value}>
                            <div onClick={() => onItemClick(firstOptionDefault.value)} className={`__item ${isSelected(firstOptionDefault.value) ? '__isSelect' : ''}`}>
                                {firstOptionDefault.label}
                            </div>
                        </div>
                    )}
                    {getOptions().map((option) => (
                        <div className="__itemMain" key={option.value}>
                            <div onClick={() => onItemClick(option.value)} className={`__item ${isSelected(option.value) ? '__isSelect' : ''}`}>
                                {option.label}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
