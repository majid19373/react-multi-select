import React from 'react';

export const AngleIcon = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`__customSelectbox_angle ${isOpen ? '__customeSelectbox_rotate180' : '__customeSelectbox_rotate0'}`}
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
};

// CloseIcon component
export const CloseIcon = () => {
    return (
        <svg viewBox="0 0 24 24" width="14" height="14" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
    );
};
