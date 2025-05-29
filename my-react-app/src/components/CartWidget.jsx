import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function CartWidget(){

    return(<IconButton aria-label="cart">
    <Badge badgeContent={2} color="secondary">
    <ShoppingCartIcon />
    </Badge>
</IconButton>);
}

export default CartWidget;