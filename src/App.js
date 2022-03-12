import { useEffect, useState } from 'react';
import './App.css'
import Cart from './components/Cart';
import Protoducts from './components/Products'

import axiosInstance from './helpers/Axios';
import { Grid } from '@mui/material';
function App() {
  const [allProducts, setAllProducts] = useState([])
  const [cart, setTocart] = useState([])

  const callApi = async () => {
    const url = 'products/'
    const req = await axiosInstance.get(url)
    setAllProducts(req.data)
  }
  useEffect(() => {
    callApi()
  }, [])
  return (
    <div className="App">
      <Grid container>
        <Grid item xs={8}>
          <Protoducts data={allProducts} />
        </Grid>
        <Grid item xs={2}>
          <Cart cart={cart} />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;


