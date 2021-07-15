function Products({products, changeProductQty, removeProduct}) {
    let totalPrice = 0;

    let productRows = products.map((product, index) => {
        totalPrice += product.price * product.quantity;

        return (
            <tr key={index}>
                <td>
                    <img src={product.image} className="img-fluid" style={{maxHeight: '75px'}} />
                </td>
                <td>{product.title}</td>
                <td>
                    {product.quantity}
                    <button onClick={() => changeProductQty(1, index)} className="btn btn-sm btn-primary mr-3">+</button>
                    <button onClick={() => changeProductQty(-1, index)} className="btn btn-sm btn-primary">-</button>
                </td>
                <td>{product.price.toFixed(2)} Eur</td>
                <td>{(product.price * product.quantity).toFixed(2)} Eur</td>
                <td>
                    <button className="btn btn-danger" onClick={() => removeProduct(index)}>Remove</button>
                </td>
            </tr>
        )
    })


    return (
        <table style={{width: '100%'}}>
            <thead>
                <tr>
                    <th></th>
                    <th>Our best employee</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {productRows}
            </tbody>
        </table>
    )
}

export default Products;