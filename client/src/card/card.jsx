import './Card.scss'

const Carta = props => {
  return (
    <div className='card'>
        {props.children}
    </div>
  )
}

export default Carta