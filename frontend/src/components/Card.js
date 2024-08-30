import React, { useEffect, useRef, useState } from 'react';
import { useDispatchCart, useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let options = props.options;
    let priceOptions = Object.keys(options);
    let data = useCart();
    const priceRef = useRef();

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");

    // let finalPrice = qty * parseInt(options[size]); // Calculate final price based on qty and size

    // useEffect(() => {
    //     setSize(priceRef.current.value);
    // }, []);

    const handleAddToCart = async () => {
        let food = null;  // Change 1: Initialize food as null
        for (const item of data) {
            if (item.id === props.foodItem._id) {
                food = item;
                break;
            }
        }

        if (food) {  // Change 2: Check if food is found in data
            if (food.size === size) {
                await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty });
                return;
            } else {  // Change 3: Else condition added to handle size mismatch
                await dispatch({
                    type: "ADD",
                    id: props.foodItem._id,
                    name: props.foodItem.name,
                    price: parseInt(options[size]), // Ensure price is a number
                    qty: qty,
                    size: size
                });
                return;
            }
        }

        await dispatch({  // Change 4: This will handle the case where food is null (i.e., not found in data)
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: parseInt(options[size]), // Ensure price is a number
            qty: qty,
            size: size
        });

        console.log(data);  // Change 5: Ensure console log happens after dispatch
    };
    useEffect(() => {
        setSize(priceRef.current.value)
      }, [])
    
      // useEffect(()=>{
      // checkBtn();
      //   },[data])
    
      let finalPrice = qty * parseInt(options[size]);

    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem", maxHeight: "360px" }}>
                <img alt="card" src={props.foodItem.img} className="card-img-top" style={{ height: "120px", objectFit: "fill" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <div className="container w-100">
                        <select className='m-2 h-100 bg-success rounded' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100 bg-success rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline h-100'>${finalPrice}/-</div>
                    </div>
                </div>
                <hr />
                <button className={"btn btn-success justify-center ms-2"} onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
}
