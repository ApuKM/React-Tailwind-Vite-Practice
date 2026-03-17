import React from 'react';

const Link = ({link}) => {
    return (
        <div>
            <li className='hover:bg-blue-900/30 p-2 rounded-md transition-all duration-300'><a href={link.path}>{link.name}</a></li>
        </div>
    );
};

export default Link;