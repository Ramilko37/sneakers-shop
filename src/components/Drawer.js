import React from "react";


function Drawer({ onClose, items = [] }) {
    console.log(items);

    return (
        <div  className="overlay">
            <div className="drawer">
            <h3 className="d-flex justify-between mb-30">
                Корзина <img onClick={onClose} className="cu-p" src="/img/btn-remove.svg" alt="btn-close" />
            </h3>

            <div className="items">
                {items.map((obj) =>
                        <div className="cartItem d-flex align-center mb-20">
                            <div
                                style={{ backgroundImage: `url(${obj.imgUrl})` }}
                                className="cartItemImg">

                            </div>

                            <div className="mr-20 flex">
                                <p className="mb-5">{obj.title}</p>
                                <b>{obj.price}</b>
                            </div>
                            <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                        </div>
                        )
                }
            </div>

            <div className="cartTotalBlock">
                <ul>
                    <li className="d-flex">
                        <span>Итого:</span>
                        <div></div>
                        <b>21 498 руб.</b>
                    </li>
                    <li className="d-flex">
                        <span>Налог 5%</span>
                        <div></div>
                        <b>1 074 руб.</b>
                    </li>
                </ul>
                <button className="greenButton">Оформить заказ <img src="/img/arrow.svg" alt="arrow"/> </button>
            </div>

        </div>
        </div>
    )
}

export default Drawer;
