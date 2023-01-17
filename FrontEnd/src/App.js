import NavBar from './Component/NavBar/NavBar'

import Products from './Component/Products/Products';
import { useSelector, useDispatch } from 'react-redux'
import { productAction } from './Store/Product-Store';
import { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import CartProducts from './Component/Carts/CartProducts';


function App() {
  const dispatch = useDispatch()
  const fetchedData = useRef(false)
  //const isCartItemFetched = useRef(false)
  //const isCartItemChanged = useSelector(state => state.cart.chnagedCartItem)
  // const x=useSelector(state=>state.)
  let cartProducts = useSelector(state => state.cart)
  //console.log(cartProducts.cartProducts)
  useEffect(() => {
    if (fetchedData.current) return
    fetchedData.current = true
    dispatch(productAction.addDiscount())
  }, [dispatch])
  // useEffect(() => {
  //   if(cartProducts.chnagedCartItem){
  //     cartProducts = useSelector(state => state.cart)
  //   }

  // })
  return (
    <>
      <NavBar />

      <Routes>
        <Route path='/' element={<Products />}></Route>
        <Route path='/cartitems' element={<CartProducts cartProducts={cartProducts.cartProducts} />} />
      </Routes>

      {/* <CartProducts cartProducts={cartProducts.cartProducts} /> */}

    </>

  )
}

export default App;
