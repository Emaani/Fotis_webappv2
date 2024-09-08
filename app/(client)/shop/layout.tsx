import React from 'react';

const ShopLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="shop-layout">
            <header>
                <h1>Shop</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>© 2024 Fotis Agro</p>
            </footer>
        </div>
    );
};

export default ShopLayout;
