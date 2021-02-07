import React from 'react';
import { myAnsw } from '../myAnsw';
import '../styles/Result.css'

class Result extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            result: "",
            you: "", 
            descrip: "",
            effect: ""
        }
    }

    componentDidMount(){
        const { e,s,t,j } = this.props.points
        let merge = ""

        merge += e > 0 ? "e":"i";
        merge += s > 0 ? "s":"n";
        merge += t > 0 ? "t":"f";
        merge += j > 0 ? "j":"p";

        const resultArr = myAnsw.filter((ans) => ans.mbti === merge)

        console.log("RESULT : ", resultArr)
        this.setState({
            result: merge,
            you: resultArr[0].you, 
            descrip :resultArr[0].descrip, 
            effect: resultArr[0].effect
        })
        
    }

    render(){
        return <div className="result">
            <img />
            <p className="character">{this.state.result}</p>
            <p className="you">{this.props.userName} <br /><br /> 
            <span className="user_type">가장 잘 어울리는 차는</span> {this.state.you} !</p>
            <div className="type"><p className="type_title">성격특징</p>{this.state.descrip}</div>
            <div className="type"><p className="type_title">효능</p>{this.state.effect}</div>
            <button onClick={this.props.resetName}>다시하기</button>
        </div>
    }
}

export default Result;