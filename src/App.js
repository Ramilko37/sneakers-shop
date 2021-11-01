import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import {logDOM} from "@testing-library/react";



function App() {
    const [items, setItems] = React.useState([]);
    const [cartItems, setCardItems] = React.useState([]);
    const [cartOpened, setCardOpened] = React.useState(false);

    React.useEffect(() => {
        fetch('https://617f8efc055276001774fb13.mockapi.io/items')
            .then((res) => {
                return res.json();
            })
            .then((json) => {
                setItems(json)
            });
    }, []);


    const onAddToCart = (obj) => {
        setCardItems(prev => [...prev, obj]);
        console.log(cartItems)
    };


  return (
    <div className="wrapper clear">
        {cartOpened && <Drawer items={cartItems} onClick={() => setCardOpened(false)} /> }
        <Header onClickCart={() => setCardOpened(true)}/>
        <div className="content p-40">
            <div className="d-flex align-center justify-between mb-40">
                <h1 className="mb-40">Все кроссовки</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="search"/>
                    <input placeholder="Поиск..."/>
                </div>
            </div>
            <div className="d-flex flex-wrap">
                {items.map((item) => (
                    <Card
                        title={item.title}
                        price={item.price}
                        imgUrl={item.imgUrl}
                        onPlus={onAddToCart}
                    />
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
