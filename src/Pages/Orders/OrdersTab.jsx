import React from 'react';
import Card from '../../Components/Card';

const OrdersTab = ({items}) => {
    return (
        <div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7 mb-16">
                {
                    items.map(item => <Card key={item._id} item={item} />)
                }
            </section>
        </div>
    );
};

export default OrdersTab;