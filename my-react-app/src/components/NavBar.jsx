import CartWidget from './CartWidget';
import './NavBar.css';
function NavBar(){
    return (   <header>
        <h1>Hamburgueseria Tisman</h1>
        <section class="grid">
            <div >Hamburguesas</div>
            <div >Tragos</div>
            <div >Loaded Fries</div>
            <div><CartWidget/></div>
        </section>
    </header>
    );

}

export default  NavBar;