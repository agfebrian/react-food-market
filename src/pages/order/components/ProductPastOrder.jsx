import React from 'react'
import { NavLink } from 'react-router-dom'
import { CardProductFlex } from '../../../components/ui'
import { formatCurrency } from '../../../utils/numbers'

export const ProductPastOrder = ({products}) => {
  return (
    <div className="flex flex-col gap-4">
      {products.map((product, i)=>(
        <NavLink key={i} to={`/order/${product.id}`}>
          <CardProductFlex
            image={product.food.image}
            title={product.food.name}
            subtitle={`${product.food.quantity} items ${formatCurrency(product.food.total)}`}
          >
            <p className='text-xs text-brand-secondary'>{product.food.updated_at}</p>
            <p className='text-xs capitalize'>{product.food.status}</p>
          </CardProductFlex>
        </NavLink>
      ))}
    </div>
  )
}
