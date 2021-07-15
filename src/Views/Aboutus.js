import Breadcrumbs from '../Components/Breadcrumbs';
import Products from '../Components/Cart/Products';
import Vacancies from '../Components/Cart/Vacancies';
import Summary from '../Components/Cart/Summary';
import {useState} from 'react';


function Aboutus() {

    const bredcrumbPaths = [
        { link: '/', title: 'Home' },
        { title: 'About us' },
    ]
    const [activeTab, setActiveTab] = useState('products');
    const [products, setProducts] = useState([
        {image: 'https://placebeard.it/500x500', price: 20, title: 'John Doe', quantity: 3},
    
    ]);
    const [billingAddress, setBillingAddress] = useState('');
    const [shippingAddress, setShippingAddress] = useState('');

    const changeProductQty = (change, index) => {
        const newProducts = [...products];
        newProducts[index].quantity += change;
        if (newProducts[index].quantity <= 0) {
            newProducts[index].quantity = 1;
        }

        setProducts(newProducts);
    }

    const removeProduct = (index) => {
        const newProducts = [...products];
        newProducts.splice(index, 1);
        setProducts(newProducts);
    }

    let tabContent = '';
    if (activeTab === 'products') {
        tabContent = <Products products={products} changeProductQty={changeProductQty} removeProduct={removeProduct} />
    } else if (activeTab === 'address') {
        tabContent = <Vacancies />
    } else if (activeTab === 'summary') {
        tabContent = <Summary billingAddress={billingAddress} shippingAddress={shippingAddress} products={products} />
    }




    return (
        <div className="container">
            <div className="row">
            <div className="col">
                    <Breadcrumbs paths={bredcrumbPaths} />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h5>About us</h5>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab === 'products' ? ' active' : '')} onClick={() => setActiveTab('products')}>Products</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab === 'address' ? ' active' : '')} onClick={() => setActiveTab('address')}>Vacancies</button>
                        </li>
                        <li class="nav-item">
                            <button class={'nav-link' + (activeTab === 'summary' ? ' active' : '')} onClick={() => setActiveTab('summary')}>Summary</button>
                        </li>
                    </ul>
                    {tabContent}
                </div>
            </div>
        </div>
    )
}

export default Aboutus;