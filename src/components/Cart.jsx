import Card from '@mui/material/Card'
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import { Typography } from "@mui/material"
function Cart({ cart }) {
    return (<><h1>Checkout</h1>
        {cart.map((element) => {
            return (<p>{element.title}<h4>QTT={element.quantity}</h4> <h4>price {element.price}</h4> </p>)
            //productname+price+quantity
        })}
    </>)
}
export default Cart