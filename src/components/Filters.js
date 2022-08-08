import React from 'react'
import { Form, Button } from 'react-bootstrap'
import Rating from './Rating'
import { CartState } from '../context/Context';

const Filters = () => {
    const { productState: { byStock, byFastDelivery, byRating, sort, searchQuery }, productDispatch } = CartState()
    console.log(byStock, byFastDelivery, byRating, sort, searchQuery);
    return (
        <div className="filters">
            <span className="title">Filter Products</span>
            <span>
                <Form.Check
                    inline
                    label="Assending"
                    name="group1"
                    type="radio"
                    id={'inline-1'}
                    onChange={() => productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "lowToHight"
                    })}
                    checked={sort === "lowToHight" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Decending"
                    name="group1"
                    type="radio"
                    id={'inline-2'}
                    onChange={() => productDispatch({
                        type: "SORT_BY_PRICE",
                        payload: "highToLow"
                    })}
                    checked={sort === "highToLow" ? true : false}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Include Out of Stock"
                    name="group1"
                    type="checkbox"
                    id={'inline-3'}
                    onChange={() => productDispatch({
                        type: "FILTER_BY_STOCK",
                    })}
                    checked={byStock}
                />
            </span>
            <span>
                <Form.Check
                    inline
                    label="Fast Delivery"
                    name="group1"
                    type="checkbox"
                    id={'inline-4'}
                    onChange={() => productDispatch({
                        type: "FILTER_BY_DELIVERY",
                    })}
                    checked={byFastDelivery}
                />
            </span>
            <span>
                <label style={{ paddingRight: 10 }}>Rating:</label>
                <Rating onClick={(i) =>
                    productDispatch({
                        type: "FILTER_BY_RATING",
                        payload: i + 1,
                    })
                }
                    style={{ cursor: "pointer" }} rating={byRating} />
            </span>
            <Button variant="light"
                onClick={() => productDispatch({
                    type: "CLEAR_FILTERS"
                })}>Clear Filters</Button>
        </div>
    )
}

export default Filters
