import '../styles/Card.scss'

const CardKanban = props => {
  return (
    <div className='card'>
        {props.children}
    </div>
  )
}

export default CardKanban