import React from "react";
import ChildComponent from './ChildComponent';

function ParentComponent(){
  const products=[
      {
          id: '1',
          name: 'Product 1',
          price: '30'

      },
      {
          id: '2',
          name: 'Product 2',
          price: '90'

      },
      {
          id: '3',
          name: 'Product 3',
          price: '3870'

      }
  ]
    return(
        <div>
            <ChildComponent products={
                products.map((product =>(
                    <li key={product.id}>
                        <p1>{'Ürün Adı ' + ' '  + ' : ' + product.name}</p1>
                        <br/>
                        <p1>{'Ürün Fiyat ' + product.price}</p1>
                    </li>
                )))

            }/>
        </div>
    )
};

export default ParentComponent;
