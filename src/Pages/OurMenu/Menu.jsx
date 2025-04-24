import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Components/Cover';
import menuImg from '../../assets/menu/banner3.jpg';
import menuImg01 from '../../assets/menu/dessert-bg.jpeg';
import menuImg02 from '../../assets/menu/pizza-bg.jpg';
import menuImg03 from '../../assets/menu/salad-bg.jpg';
import menuImg04 from '../../assets/menu/soup-bg.jpg';
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle';
import MenuCategory from './MenuCategory';


const Menu = () => {

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
                <title>FoodHut || Our Menu</title>
            </Helmet>
            <section className="">
                <Cover title={'Our Menu'} details={'would you like to try a dish ? '} image={menuImg} />
                <SectionTitle subHeading={"Don't Miss"} heading={"today's offer"} />
                <MenuCategory items={offered} />
                <Cover title={'SWEET desserts AT FOODHUT'} details={'Indulge your sweet tooth with our handcrafted desserts, made fresh daily at FoodHut. From rich chocolate cakes to creamy cheesecakes and delicate pastries, every bite is a celebration of flavor. Come treat yourself to something truly special—you deserve it!'} image={menuImg01} />
                <MenuCategory items={dessert} />
                <Cover title={'SAVORY PIZZA AT FOODHUT'} details={'Savor the taste of our handcrafted pizzas, made with the freshest ingredients and baked to perfection. From classic margherita to gourmet toppings, each slice is a delicious experience. Join us at FoodHut for a pizza that will leave you craving more!'} image={menuImg02} />
                <MenuCategory items={pizza} />
                <Cover title={'FRESH SALADS AT FOODHUT'} details={'Experience the vibrant flavors of our fresh salads, made with seasonal ingredients and bursting with color. From classic Caesar to creative combinations, each bite is a refreshing delight. Join us at FoodHut for a salad that nourishes your body and soul!'} image={menuImg03} />
                <MenuCategory items={salad} />
                <Cover title={'SOUPS AT FOODHUT'} details={'Warm up with our comforting soups, made from scratch with wholesome ingredients. From hearty classics to seasonal specials, each bowl is a hug in a mug. Join us at FoodHut for a soup that warms your heart and soul!'} image={menuImg04} />
                <MenuCategory items={soup} />
            </section>
        </div>
    );
};

export default Menu;