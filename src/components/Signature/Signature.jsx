import React from 'react';
import './Signature.css';

const signature = () => {
    return (
        <div className="signature__container">
            <p className="signature__text">made by
                <a className="signature__link" href="https://github.com/manuhdez" target="_blank" rel="noopener noreferrer"> manuhdez </a>
                with
            </p>
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" className="signature__logo" title="and hooks">
                    <i className="fab fa-react signature__logo--icon"></i>
            </a>
        </div>
    );
};

export default signature;
