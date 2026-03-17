import React from 'react';

const Link = ({link}) => {
    return (
        <div>
            <li><a href={link.path}>{link.name}</a></li>
        </div>
    );
};

export default Link;