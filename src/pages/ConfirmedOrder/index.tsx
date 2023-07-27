import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react"
import {
  ConfirmedOrderContainer,
  OrderInfoContainer,
} from "./styles"
import deliveryImage from '../../assets/delivery.svg'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

export function ConfirmedOrder() {
  const { address } = useContext(CartContext)

  return (
    <ConfirmedOrderContainer>
      <div>
        <div className="titles" >
          <h1 className="title" >Uhu! Pedido confirmado</h1>
          <h2 className="subtitle" >Agora é só aguardar que logo o café chegará até você</h2>
        </div>

        <OrderInfoContainer>
          <div className='order-address order-info'>
            <div className="icon-circle" >
              <MapPin size={16} color="#fff" weight="fill" />
            </div>
            <div>
              <p className="info-title" >Entrega em <strong>{address.street}, {address.number}</strong></p>
              <p className="info-title" >{address.neighborhood} - {address.city}, {address.state}</p>
            </div>
          </div>

          <div className='order-forecast order-info'>
            <div className="icon-circle" >
              <Timer size={16} color="#fff" weight="fill" />
            </div>
            <div>
              <p className="info-title" >Previsão de entrega</p>
              <p className="info-title" ><strong>20 min - 30 min</strong></p>
            </div>
          </div>

          <div className='order-payment order-info'>
            <div className="icon-circle" >
              <CurrencyDollar size={16} color="#fff" weight="fill" />
            </div>
            <div>
              <p className="info-title" >Pagamento na entrega</p>
              <p className="info-title" ><strong>Cartão de Crédito</strong></p>
            </div>
          </div>
        </OrderInfoContainer>
      </div>
      <div>
        <img src={deliveryImage} alt='Um homem em uma moto indo entregar uma encomenda' />
      </div>
    </ConfirmedOrderContainer>
  )
} 