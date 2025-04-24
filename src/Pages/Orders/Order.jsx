import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Components/Cover';
import orderCover from '../../assets/shop/banner2.jpg';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import OrdersTab from './OrdersTab';
import { useParams } from 'react-router';


const Order = () => {

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex >= 0 ? initialIndex : 0);

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const offered = menu.filter(item => item.category === 'offered');
    const drinks = menu.filter(item => item.category === 'drinks');
    const allMenu = [...offered, ...pizza, ...salad, ...soup, ...dessert, ...drinks];


    return (
        <div>
            <Helmet>
                <title>FoodHut || Order</title>
            </Helmet>
            <section className="">
                <Cover image={orderCover} title={'Our Shop'} details={'would you like to try a dish ? '} />
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className={"flex justify-center items-center gap-5 my-5 "}>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                        <Tab>All </Tab>
                    </TabList>
                    <TabPanel>
                        <OrdersTab items={salad} />
                    </TabPanel>
                    <TabPanel>
                        <OrdersTab items={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <OrdersTab items={soup} />
                    </TabPanel>
                    <TabPanel>
                        <OrdersTab items={dessert} />
                    </TabPanel>
                    <TabPanel>
                        <OrdersTab items={drinks} />
                    </TabPanel>
                    <TabPanel>
                        <OrdersTab items={allMenu} />
                    </TabPanel>
                </Tabs>
            </section>
        </div>
    );
};

export default Order;