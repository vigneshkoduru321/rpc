import {Component} from 'react'
import {RiCloseLine} from 'react-icons/ri'
import Popup from 'reactjs-popup'
import Coin from '../Coin'
import './index.css'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class Game extends Component {
  state = {score: 0, isPlaying: true, match: '', clicked: '', opponent: ''}

  onPlayAgain = () => {
    this.setState({isPlaying: true})
  }

  onClick = id => {
    const clickedId = id
    const opp = Math.floor(Math.random() * 3)
    const oppId = choicesList[opp].id
    this.setState({clicked: id, opponent: oppId})
    const {clicked} = this.state

    if (id === 'ROCK') {
      if (id === oppId) {
        this.setState({match: 'IT IS DRAW', isPlaying: false})
      }
      if (oppId === 'SCISSORS') {
        this.setState(prevState => ({
          match: 'YOU WON',
          isPlaying: false,
          score: prevState.score + 1,
        }))
      }
      if (oppId === 'PAPER') {
        this.setState(prevState => ({
          match: 'YOU LOSE',
          isPlaying: false,
          score: prevState.score - 1,
        }))
      }
    }

    if (id === 'PAPER') {
      if (id === oppId) {
        this.setState({match: 'IT IS DRAW', isPlaying: false})
      }
      if (oppId === 'ROCK') {
        this.setState(prevState => ({
          match: 'YOU WON',
          isPlaying: false,
          score: prevState.score + 1,
        }))
      }
      if (oppId === 'SCISSORS') {
        this.setState(prevState => ({
          match: 'YOU LOSE',
          isPlaying: false,
          score: prevState.score - 1,
        }))
      }
    }

    if (id === 'SCISSORS') {
      if (id === oppId) {
        this.setState({match: 'IT IS DRAW', isPlaying: false})
      }
      if (oppId === 'ROCK') {
        this.setState(prevState => ({
          match: 'YOU LOSE',
          isPlaying: false,
          score: prevState.score - 1,
        }))
      }
      if (oppId === 'PAPER') {
        this.setState(prevState => ({
          match: 'YOU WON',
          isPlaying: false,
          score: prevState.score + 1,
        }))
      }
    }
  }

  render() {
    const {score, match, isPlaying, clicked, opponent} = this.state
    const Clicked = choicesList.filter(each => each.id === clicked)
    const Clickedurl = Clicked.length > 0 ? Clicked[0].imageUrl : null
    const {details} = this.props
    const Opponent = choicesList.filter(each => each.id === opponent)
    const Opponenturl = Opponent.length > 0 ? Opponent[0].imageUrl : null
    return (
      <div className="main-background">
        <div className="score-con">
          <div>
            <h1>ROCK</h1>
            <h1>PAPER</h1>
            <h1>SCISSORS</h1>
          </div>
          <div className="score">
            <p>Score</p>
            <p className="scoree">{score}</p>
          </div>
        </div>
        <div className="play-con">
          {isPlaying ? (
            <div className="cards-con">
              {details.map(each => (
                <Coin onClick={this.onClick} key={each.id} details={each} />
              ))}
            </div>
          ) : (
            <div className="conn">
              <div className="img-con">
                <div>
                  <h1>YOU</h1>
                  <img className="result-imgs" src={Clickedurl} alt="" />
                </div>
                <div>
                  <h1>OPPONENT</h1>
                  <img className="result-imgs" src={Opponenturl} alt="" />
                </div>
              </div>
              <div>{match}</div>
              <button onClick={this.onPlayAgain}>PLAY AGAIN</button>
            </div>
          )}
        </div>
        <Popup
          modal
          trigger={
            <button type="button" className="trigger-button">
              Trigger
            </button>
          }
        >
          {close => (
            <div className="container">
              <img
                className="rules"
                src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                alt="rules"
              />
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                <RiCloseLine />
              </button>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default Game
