import React from 'react';
import Name from './components/Name';
import Questions from './components/Questions';

class App extends React.Component{

  // 생성자 : 컴포넌트가 처음생길때 동작하는 함수 
  constructor(props){
    super(props)
    this.state ={
      isThereName: false,
      userName: ""
    }
  }

  setName = (name) => {
    this.setState({
      isThereName: true,
      userName: name
    })
  }
  resetName = () => {
    this.setState({
      isThereName: false,
      userName: ''
    })
  }
  render(){
    return <div>
      {this.state.isThereName ? <Questions resetName={this.resetName} userName={this.state.userName} /> :
      <Name setName={this.setName} />}
    </div>
  }
}

export default App;
