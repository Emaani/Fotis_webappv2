import React from 'react';
import { useCommodityUpdates } from '~/app/global/hooks/useCommodityUpdates';

const Sidebar = () => {
    const updates = useCommodityUpdates();

    return (
        <aside
            className="p-4 bg-white shadow-lg sticky"
            style={{
                width: '100%', // Sidebar width
                top: '6rem', // Offset from the top of the viewport (adjust this to align with other cards)
                marginTop: '1rem', // Small margin at the top to align with cards
                height: 'calc(100vh - 8rem)', // Adjust height relative to the top offset
                overflowY: 'auto', // Enable scrolling if content overflows
                borderRadius: '0 20px 20px 0', // Rounded corners on the right side
                zIndex: 50, // Ensure it is above other content
            }}
        >
            <h2 className="text-lg font-semibold mb-4 text-center">New Updates</h2>
            <ul className="space-y-4">
                {updates.map((update, index) => (
                    <li
                        key={index}
                        className="p-3 bg-gray-100 rounded hover:bg-gray-200 transition-colors duration-200"
                    >
                        <h3 className="font-semibold">{update.title}</h3>
                        <p className="text-sm">{update.description}</p>
                    </li>
                ))}
            </ul>

            {/* Links to update the hardcoded data */}
            <div className="mt-8">
                <h3 className="font-semibold mb-2 text-center">Quick Links</h3>
                <ul className="space-y-2">
                    <li className="text-blue-500 hover:underline text-center">
                        <a href="#update-commodities">Update Commodities Data</a>
                    </li>
                    <li className="text-blue-500 hover:underline text-center">
                        <a href="#update-livestock">Update Livestock Data</a>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
