import React from 'react';
import '../styles/Name.css';

class Name extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          name: ""
        }
      }
    
    render(){
        return <div className="Name_container">
            <h1 className="title">나에게<br />필요한<br />TEA 찾기 </h1>
            <input onChange={e => {this.setState({name:e.target.value})}} type="text" placeholder="이름을 입력하세요." className="name" /><br />
            <button onClick={() => this.props.setName(this.state.name)} className="start" >시작하기</button>
        </div>
    }
}

export default Name;