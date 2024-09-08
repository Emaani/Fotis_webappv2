// pages/index.tsx
import type { NextPage } from 'next';
import LiveStockSection from '~/app/(client)/dashboard/Livestock/components/LivestockDetailsCard'
import LivestockChart from '~/app/(client)/dashboard/Livestock/components/LivestockChart'

const Home: NextPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Livestock Commodities Dashboard</h1>

            {/* Live Stock Section */}
            <LiveStockSection />

            {/* Livestock Chart */}
            <h2 className="text-2xl font-medium mt-8 mb-2">Livestock Price Trend</h2>
            <div className="bg-white rounded-lg shadow-md p-4">
                <LivestockChart data={{
                    labels: [],
                    datasets: []
                }} />
            </div>
        </div>
    );
};

export default Home;
