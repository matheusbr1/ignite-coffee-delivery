import React, { useContext, useCallback } from 'react'
import { defaultTheme } from "../../styles/theme"
import { CurrencyDollar, CreditCard, Bank, Money, MapPinLine } from '@phosphor-icons/react'
import {
  CheckoutContainer,
  CompleteYourOrder,
  ConfirmOrderButton,
  Divider,
  OrderAddress,
  OrderPayment,
  SelectedCoffees
} from "./styles"
import { CartContext } from '../../context/CartContext'
import { CheckoutProductCard } from '../../components/CheckoutProductCard'
import { useNavigate } from 'react-router-dom'
import { currencyFormatter } from '../../utils/currencyFormatter'

const DELIVERY_TAX = 3.50

export function Checkout() {
  const { products, cartQuantity, productsTotal } = useContext(CartContext)

  const navigate = useNavigate()

  const handleNavigateToConfirmedOrder = useCallback(() => {
    navigate('/order-confirmation')
  }, [])

  const formatedDeliveryTax = currencyFormatter().format(DELIVERY_TAX)
  const formatedProductsTotal = currencyFormatter().format(productsTotal)
  const formatedTotal = currencyFormatter().format(productsTotal + DELIVERY_TAX)

  return (
    <CheckoutContainer>
      <CompleteYourOrder>
        <h1 className='title' >
          Complete seu pedido
        </h1>

        <div>
          <OrderAddress>
            <div className='card' >
              <div className='titles'>
                <MapPinLine size={22} color={defaultTheme.colors['yellow-dark']} />
                <div>
                  <h2 className="complete-order-title" >Endereço de Entrega</h2>
                  <h3 className="complete-order-subtitle" >Informe o endereço onde deseja receber seu pedido</h3>
                </div>
              </div>

              <form action="">
                <div>
                  <input type="text" placeholder='CEP' />
                </div>
                <div>
                  <input type="text" placeholder='Rua' className='full' />
                </div>
                <div>
                  <input type="text" placeholder='Número' />
                  <input type="text" placeholder='Complemento (opcional)' className='full' />
                </div>
                <div>
                  <input type="text" placeholder='Bairro' />
                  <input type="text" placeholder='Cidade' className='full' />
                  <input type="text" placeholder='UF' className='w60' />
                </div>
              </form>
            </div>
          </OrderAddress>

          <OrderPayment>
            <div className='card' >
              <div className='titles'>
                <CurrencyDollar size={22} color={defaultTheme.colors.purple} />
                <div>
                  <h2 className="complete-order-title" >Pagamento</h2>
                  <h3 className="complete-order-subtitle" >O pagamento é feito na entrega. Escolha a forma que deseja pagar</h3>
                </div>
              </div>

              <div className='payment-methods' >
                <button>
                  <CreditCard size={16} color={defaultTheme.colors.purple} />
                  <span>Cartão de crédito</span>
                </button>
                <button>
                  <Bank size={16} color={defaultTheme.colors.purple} />
                  <span>Cartão de débito</span>
                </button>
                <button>
                  <Money size={16} color={defaultTheme.colors.purple} />
                  <span>Dinheiro</span>
                </button>
              </div>
            </div>
          </OrderPayment>
        </div>
      </CompleteYourOrder>
      <SelectedCoffees>
        <h1 className='title' >
          Cafés selecionados
        </h1>

        <div className="card">
          {
            !cartQuantity
              ? <p>Selecione produtos e continue a sua compra!</p>
              : <React.Fragment>
                {products.map(product => {
                  return (
                    <React.Fragment key={product.id} >
                      <CheckoutProductCard product={product} />
                      <Divider />
                    </React.Fragment>
                  )
                })}

                <div className="summary">
                  <div>
                    <p className='info' >Total de itens</p>
                    <p className='value' >{formatedProductsTotal}</p>
                  </div>
                  <div>
                    <p className='info' >Entrega</p>
                    <p className='value' >{formatedDeliveryTax}</p>
                  </div>
                  <div>
                    <p className='info total' >Total</p>
                    <p className='value total' >{formatedTotal}</p>
                  </div>
                </div>

                <ConfirmOrderButton onClick={handleNavigateToConfirmedOrder} >
                  Confirmar pedido
                </ConfirmOrderButton>
              </React.Fragment>
          }
        </div>
      </SelectedCoffees>
    </CheckoutContainer>
  )
} 