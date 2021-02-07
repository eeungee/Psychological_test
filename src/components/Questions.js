import React from 'react';
import { myQ } from '../myQ';
import Result from './Result'
import '../styles/Questions.css'


const pages = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

class Questions extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 0,
      e: 0, s: 0, t: 0, j: 0
    }
  }

  changeStep = (num) => {
    if (this.state.number === 0 && num === -1) return
    if (this.state.number === 11 && num === 1) return

    this.setState({
      number: this.state.number + num
    })
  }

  handleClick = (no, character) => {
    if (no == 1) {
      switch (character) {
        case 'E':
          this.setState({
            number: this.state.number + 1,
            e: this.state.e + 1
          })
          break;
        case 'S':
          this.setState({
            number: this.state.number + 1,
            s: this.state.s + 1
          })
          break;
        case 'T':
          this.setState({
            number: this.state.number + 1,
            t: this.state.t + 1
          })
          break;
        case 'J':
          this.setState({
            number: this.state.number + 1,
            j: this.state.j + 1
          })
          break;
      }
    } else {
      switch (character) {
        case 'E':
          this.setState({
            number: this.state.number + 1,
            e: this.state.e - 1
          })
          break;
        case 'S':
          this.setState({
            number: this.state.number + 1,
            s: this.state.s - 1
          })
          break;
        case 'T':
          this.setState({
            number: this.state.number + 1,
            t: this.state.t - 1
          })
          break;
        case 'J':
          this.setState({
            number: this.state.number + 1,
            j: this.state.j - 1
          })
          break;
      }
    }
  }

  componentDidUpdate() {
    //console.log("현재 점수는 ", this.state)
  }

  render() {

    const { e, s, t, j } = this.state;

    return this.state.number < 12 ? <div class="q_container">
      {myQ.map((q, idx) => {
        return q.no == this.state.number && <div className="container" key={idx}>
          <div style={{ height: 180 }}>
            <div className="page_container">
              {/* <div className="move__pages">
                <img onClick={() => this.changeStep(-1)} src={"/images/back.png"} />
              </div> */}
              <div className="page">
                {pages.map((page, index) => {
                  return <div className={this.state.number == index ? "page__cur" : "page__each"}></div>
                })}
              </div>
              {/* <div className="move__pages">  
                <img onClick={() => this.changeStep(1)} src={"/images/right.png"} />
              </div> */}
            </div>
            <h1 className="question" >{q.q}</h1>
          </div>
          <section className="btn__container">
            <button onClick={() => this.handleClick(1, q.character)} className="button">{q.bt1}</button> <br />
            <button onClick={() => this.handleClick(2, q.character)} className="button">{q.bt2}</button>
          </section>
        </div>
      })}
    </div> : <Result resetName={this.props.resetName} userName={this.props.userName} points={{
      e, s, t, j
    }} />
  }
}

export default Questions;