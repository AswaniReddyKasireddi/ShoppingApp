import React from 'react'
import { Navbar, Container, FormControl, Nav, Dropdown, Badge, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
const Header = () => {
    const {state:{cart},dispatch,productDispatch}=CartState()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        style={{ width: 500 }}
                        placeholder="Search a Product"
                        className="m-auto"
                        onChange={(e)=>{productDispatch({
                            type:"FILTER_BY_SEARCH",
                            payload:e.target.value
                        })}}
                    />
                </Navbar.Text>
                <Nav>
                    <Dropdown align="right">
                        <Dropdown.Toggle variant="success">
                            <FaShoppingCart color="white" fontSize="25px" />
                            <span style={{marginLeft:10}}>{cart.length}</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{ minWidth: 370 }}>
                            {cart.length>0?(
                                <>
                                {cart.map((prod)=>(
                                    <span className="cartItem" key={prod.id}>
                                        <img src={prod.image} 
                                        className="cartItemImg"
                                        alt={prod.name}/>
                                        <div className="cartItemDetail">
                                            <span>{prod.name}</span>
                                            <span>${prod.price.split(".")[0]}</span>
                                        </div>
                                        <AiFillDelete
                                        fontSize="20px"
                                        style={{cursor:"pointer"}}
                                        onClick={()=>dispatch({
                                            type:"REMOVE_FROM_CART",
                                            payload:prod
                                        })}
                                        />
                                    </span>
                                ))}
                                <Link to="/cart">
                                    <Button style={{width:"95%" ,margin:"0 10px"}}>Go to Cart</Button>
                                </Link>
                                </>
                            )
                            :(<span style={{ padding: 10 }}>cart Is Empty</span>)}

                        </Dropdown.Menu>

                    </Dropdown>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
