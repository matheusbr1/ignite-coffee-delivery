import React from 'react'
import { ProductCounter } from "../../components/ProductCounter"
import { COFFEES } from "../../data/coffees"
import { defaultTheme } from "../../styles/theme"
import { currencyFormatter } from "../../utils/currencyFormatter"
import { Trash, CurrencyDollar, CreditCard, Bank, Money, MapPinLine } from '@phosphor-icons/react'
import {
  CheckoutContainer,
  CompleteYourOrder,
  ConfirmOrderButton,
  Divider,
  OrderAddress,
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