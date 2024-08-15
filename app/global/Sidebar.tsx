import React, { useState } from 'react';
import { useCommodityUpdates } from '~/app/global/hooks/useCommodityUpdates';

const Sidebar = () => {
    const updates = useCommodityUpdates();

    return (
        <aside className="bg-white shadow-lg rounded-lg sticky top-4 w-60.2"> {/* Adjusted width */}
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-4 text-center"> {/* Centered title */}
                    Commodity News Updates
                </h2>
                <ul className="space-y-4">
                    {updates.map((update, index) => (
                        <UpdateItem key={index} update={update} />
                    ))}
                </ul>
            </div>
        </aside>
    );
};

const UpdateItem = ({ update }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <li className="p-3 bg-gray-100 rounded hover:bg-gray-200">
            <h3 className="font-semibold">{update.title}</h3>
            <p className="text-sm">
                {isExpanded ? update.description : `${update.description.slice(0, 100)}...`}
            </p>
            {update.description.length > 100 && (
                <button
                    onClick={handleToggle}
                    className="text-blue-500 text-sm underline mt-2"
                >
                    {isExpanded ? 'Read less' : 'Read more'}
                </button>
            )}
        </li>
    );
};

export default Sidebar;
