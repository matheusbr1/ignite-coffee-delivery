import React from 'react'
import { ProductCounter } from "../../components/ProductCounter"
import { COFFEES } from "../../data/coffees"
import { defaultTheme } from "../../styles/theme"
import { currencyFormatter } from "../../utils/currencyFormatter"
import { Trash, CurrencyDollar, CreditCard, Bank, Money } from '@phosphor-icons/react'
import {
  CheckoutContainer,
  CompleteYourOrder,
  ConfirmOrderButton,
  Divider,
  OrderPayment,
  SelectedCoffees
} from "./styles"

const SELECTED_COFFEES = COFFEES.slice(0, 3)

export function Checkout() {
  return (
    <CheckoutContainer>
      <CompleteYourOrder>
        <h1 className='title' >
          Complete seu pedido
        </h1>

        <OrderPayment>
          <div className='card' >
            <div className='titles'>
              <CurrencyDollar size={22} color={defaultTheme.colors.purple} />
              <div>
                <h2 className="payment-title" >Pagamento</h2>
                <h3 className="payment-subtitle" >O pagamento é feito na entrega. Escolha a forma que deseja pagar</h3>
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
      </CompleteYourOrder>
      <SelectedCoffees>
        <h1 className='title' >
          Cafés selecionados
        </h1>

        <div className="card">
          {SELECTED_COFFEES.map(product => {
            const price = currencyFormatter().format(product.price)

            return (
              <React.Fragment key={product.id} >
                <div className="selected-product-card" >
                  <img src={`coffees/${product.imageName}.png`} />

                  <div className="central-content" >
                    <h3 className="product-name" >{product.name}</h3>
                    <div className="product-actions" >
                      <ProductCounter />
                      <button className="remove-product-button" >
                        <Trash size={16} color={defaultTheme.colors.purple} />
                        <span>Remover</span>
                      </button>
                    </div>
                  </div>

                  <p className="product-price" >{price}</p>
                </div>

                <Divider />
              </React.Fragment>
            )
          })}

          <div className="summary">
            <div>
              <p className='info' >Total de itens</p>
              <p className='value' >R$ 29,70</p>
            </div>
            <div>
              <p className='info' >Entrega</p>
              <p className='value' >R$ 3,50</p>
            </div>
            <div>
              <p className='info total' >Total</p>
              <p className='value total' >R$ 33,20</p>
            </div>
          </div>

          <ConfirmOrderButton>
            Confirmar pedido
          </ConfirmOrderButton>
        </div>
      </SelectedCoffees>
    </CheckoutContainer >
  )
} 