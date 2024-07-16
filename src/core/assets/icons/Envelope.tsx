import React from 'react';

interface EnvelopeProps {
}

const Envelope: React.FC<EnvelopeProps> = (
) => {
    return (
        <>
            <svg width="22"
                height="18" viewBox="0 0 22 18"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.7055 3.29452C17.2618 1.99044 14.8298 1.5 11 1.5C7.1702 1.5 4.73816 1.99044 3.29452 3.29452M18.7055 3.29452C20.0003 4.46413 20.5 6.28823 20.5 9C20.5 14.7353 18.2647 16.5 11 16.5C3.73529 16.5 1.5 14.7353 1.5 9C1.5 6.28823 1.99972 4.46413 3.29452 3.29452M18.7055 3.29452L12.4142 9.58577C11.6331 10.3668 10.3668 10.3668 9.58577 9.58577L3.29452 3.29452"
                    stroke="#939E99"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
            </svg>
        </>
    );
};

export default Envelope

