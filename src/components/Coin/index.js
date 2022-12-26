import './index.css'

const Coin = props => {
  const {details, onClick} = props
  const {id, imageUrl} = details
  const onClickCoin = () => {
    onClick(id)
  }
  return (
    <button onClick={onClickCoin} className="coin">
      <img src={imageUrl} alt="" className="image" />
    </button>
  )
}

export default Coin
