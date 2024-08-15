import { useState } from 'react';

export const useCommodityUpdates = () => {
    const [updates] = useState([
        { title: 'Coffee Exports Reach Record-Breaking US$1.14 Billion, Highest in Value in 30 Years.', 
            description: 'In 2023/24, coffee exports were 6.13 million bags valued at US$ 1.144 Billion in 2023/24. This was an increase of 6.33% in volume and 35.29% in value compared to FY 2022/23 when exports were 5.8 million bags valued at US$846 million. With the current trajectory, the Coffee Roadmap target of 20 million 60 kg bags produced by 2030 is achievable. ' },
        { title: 'Sesame Seed Prices lowest since First Quarter 2024.', description: 'Sesame seed prices have plunged significantly due to a low demand. This has been caused by a reduced deamn from the Asian market because of stringent policy measures applied on exporters.' },
        { title: 'Soybean Prices on the Decline.', description: 'Soybean prices have dropped due to increased stocks and relatively low demand due to decreased quality specifications.' },
        // Add more updates as needed
    ]);

    return updates;
};
