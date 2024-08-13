import React from 'react';
import { useCommodityUpdates } from '~/app/global/hooks/useCommodityUpdates';


const Sidebar = () => {
    const updates = useCommodityUpdates();

    return (
        <aside
            className="p-4 bg-white shadow-lg"
            style={{
                width: '20%', // Adjust the width to extend the sidebar further to the left
                marginLeft: '6%', // Align the sidebar to the right
                marginRight: '6%', // Add a little margin to the right to detach it from the edge of the screen
position: 'left',


overflowY: 'hidden',

                borderRadius: '20px',

                top: '100px', // Adjust to align with the "Commodity Prices" section
                height: 'calc(100vh - 140px)',
                bottom: '20px', // Ensure it doesn't overlap with the footer or bottom banner
            }}
        >
            <h2 className="text-lg font-semibold mb-4 text-center">New Updates</h2>
            <ul className="space-y-4">
                {updates.map((update, index) => (
                    <li
                        key={index}
                        className="p-3 bg-gray-100 rounded hover:bg-gray-200"
                    >
                        <h3 className="font-semibold">{update.title}</h3>
                        <p className="text-sm">{update.description}</p>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
