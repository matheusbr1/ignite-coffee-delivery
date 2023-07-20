import React, { useContext, useCallback, useState } from 'react'

import { CurrencyDollar, CreditCard, Bank, Money, MapPinLine } from '@phosphor-icons/react'
import {
  CheckoutContainer,
  CompleteYourOrder,
  ConfirmOrderButton,
  Divider,
  FieldError,
  InputContainer,
  OrderAddress,
  OrderPayment,
  SelectedCoffees
} from "./styles"
import { CartContext } from '../../context/CartContext'
import { CheckoutProductCard } from '../../components/CheckoutProductCard'
import { useNavigate } from 'react-router-dom'
import { currencyFormatter } from '../../utils/currencyFormatter'
import { useForm } from 'react-hook-form'
import { api } from '../../lib/axios'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { ErrorMessage } from "@hookform/error-message"

import { Loading } from '../../components/Loading'
import { defaultTheme } from '../../styles/theme'

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}


const DELIVERY_TAX = 3.50

const addressSchema = z.object({
  CEP: z.string(),
  street: z.string(),
  number: z.number(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
})

type Address = z.infer<typeof addressSchema>

export function Checkout() {
  const { products, cartQuantity, productsTotal } = useContext(CartContext)

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: {
      errors,
    },
  } = useForm<Address>({
    resolver: zodResolver(addressSchema),
  })

  React.useEffect(() => {
    console.log(errors)
  }, [errors])

  const navigate = useNavigate()

  const handleNavigateToConfirmedOrder = useCallback(() => {
    navigate('/order-confirmation')
  }, [])

  const formatedDeliveryTax = currencyFormatter().format(DELIVERY_TAX)
  const formatedProductsTotal = currencyFormatter().format(productsTotal)
  const formatedTotal = currencyFormatter().format(productsTotal + DELIVERY_TAX)

  const [isFetchingAddress, setIsFetchingAddress] = useState(false)

  const handleFormSubmit = (fields: Address) => {
    console.log(fields)
  }

  interface AddressResponse {
    bairro: string
    localidade: string
    uf: string
    logradouro: string
  }

  async function fetchAddress(CEP: string): Promise<AddressResponse> {
    await sleep(3000)
    const response = await api.get(`https://viacep.com.br/ws/${CEP}/json/`)
    return response.data
  }

  const handleFillAddress = async () => {
    try {
      setIsFetchingAddress(true)
      const fields = getValues()
      if (!fields.CEP) return

      const { bairro, localidade, logradouro, uf } = await fetchAddress(fields.CEP)

      console.log('fields', fields)

      setValue('neighborhood', bairro)
      setValue('city', localidade)
      setValue('state', uf)
      setValue('street', logradouro)
    } catch (error) {
      console.error(error)
    } finally {
      setIsFetchingAddress(false)
    }
  }

  return (
    <CheckoutContainer>
      {isFetchingAddress && <Loading />}

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

              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <div>
                  <InputContainer>
                    <input
                      type="number"
                      placeholder='CEP'
                      {...register('CEP', {
                        required: 'Campo Obrigatório',
                        onBlur: handleFillAddress
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="CEP"
                      render={({ message }) => (
                        <FieldError>{message}</FieldError>
                      )}
                    />
                  </InputContainer>
                </div>
                <div>
                  <InputContainer>
                    <input
                      type="text"
                      placeholder='Rua'
                      className='full'
                      {...register('street', {
                        required: 'Campo Obrigatório',
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="street"
                      render={({ message }) => (
                        <FieldError>{message}</FieldError>
                      )}
                    />
                  </InputContainer>
                </div>
                <div>
                  <InputContainer>
                    <input
                      type="number"
                      placeholder='Número'
                      {...register('number', {
                        required: 'Campo Obrigatório',
                        valueAsNumber: true
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="number"
                      render={({ message }) => (
                        <FieldError>{message}</FieldError>
                      )}
                    />
                  </InputContainer>
                  <InputContainer>
                    <input
                      type="text"
                      placeholder='Complemento (opcional)'
                      className='full'
                      {...register('complement')}
                    />
                  </InputContainer>
                </div>
                <div>
                  <InputContainer>
                    <input
                      type="text"
                      placeholder='Bairro'
                      {...register('neighborhood', {
                        required: 'Campo Obrigatório',
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="neighborhood"
                      render={({ message }) => (
                        <FieldError>{message}</FieldError>
                      )}
                    />
                  </InputContainer>
                  <InputContainer>
                    <input
                      type="text"
                      placeholder='Cidade'
                      className='full'
                      {...register('city', {
                        required: 'Campo Obrigatório',
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="city"
                      render={({ message }) => (
                        <FieldError>{message}</FieldError>
                      )}
                    />
                  </InputContainer>
                  <InputContainer>
                    <input
                      type="text"
                      placeholder='UF'
                      className='w60'
                      {...register('state', {
                        required: 'Campo Obrigatório',
                      })}
                    />
                    <ErrorMessage
                      errors={errors}
                      name="state"
                      render={({ message }) => (
                        <FieldError>{message}</FieldError>
                      )}
                    />
                  </InputContainer>
                </div>
                <input type="submit" hidden />
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