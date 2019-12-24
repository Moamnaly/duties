import React, { Component } from "react";
import ReactDOM from 'react-dom';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
      
      options: [],
      option: '',
      'From': '',
      'To':'',
      Type:'',
      str:''
     
    }
    this.OnAddItem = this.OnAddItem.bind(this);
 

  }
  

 



    getData = ((e)=>{
      
      this.setState({[e.target.name]:e.target.value})
    })

  onChangeItem = (e) => {
   localStorage.setItem('option',this.state.option );
   this.setState({option:e.target.value})  
  }
onMark(){
alert('Task Done Successfully')
} 
  OnAddItem = (e) => {
  e.preventDefault()
        var options = JSON.parse(localStorage.getItem('options'));
        var DandT={
          option:this.state.option,
          time:new Date().toLocaleTimeString(),
          date:new Date().toDateString(),
          Type:this.state.Type,
          From:this.state.From,
          To:this.state.To

      };
      options.push(DandT)
      localStorage.setItem('options', JSON.stringify(options))
     this.setState({
       options:JSON.parse(localStorage.getItem('options'))
    })
      document.getElementById('in').value = '';
    
    
  };
  onRemoveAll = (e) => {
    e.preventDefault();
   var options = JSON.parse(localStorage.getItem('options'))
    options.splice(this.options)
    this.setState({options:options})
    localStorage.setItem('options', JSON.stringify(options))
  }

  delete = (value)=>{ 

    var list = JSON.parse(localStorage.getItem('options'));
    list.splice((value),1)
  this.setState({options:list})
  localStorage.setItem('options', JSON.stringify(list))
  }

  componentWillMount(){
 
    this.state.options=JSON.parse(localStorage.getItem('options'))
    localStorage.setItem('options', JSON.stringify(this.state.options))
    };

  render() {
    if(this.state.Type=="Today"){
      this.state.str="Today"
    }else if(this.state.Type=="Tomorrow"){
      this.state.str="Tomorrow"
    }else if(this.state.Type=="UpComing"){
      this.state.str="UpComing"
    }
  
    return (    
<div className="center">

      <div className="container">
      <div className="form-group">
      <div className="col-md-4 mb-3"> 
      <h1 className = "h1"><span className="t">D        </span>U        <span >T</span> <span className="i">I</span>       <span>E        S</span></h1>
      <input type="text" id="in" class="form-control is-valid"  onChange={this.onChangeItem} value={this.state.name} name='option'/>
      <div class="valid-feedback">
      <button type="button" onClick={this.OnAddItem.bind(this)} class="btn btn-warning" >ADD</button>
      <button  className ="btn-Add" onClick={this.onRemoveAll} type="button" class="btn btn-danger">CLEAR</button>

      <br/>  
  
    <div className="col-lg-6">
      <input className="Datee" type="date" onChange={this.getData} value={this.state.name} name="To" min="2000-01-02" />
      </div>
     
      <select value={this.state.Type} name="Type" className="select" id="inputGroupSelect01" onChange={this.getData} >
      
      <option className="option">Duration</option>
      <option value='Today' name="Today" >Today</option>
      <option value='Tomorrow' name="Tomorrow" >Tomorrow</option>
      <option value='Upcoming' name="Upcoming" >Upcoming</option>
      </select>
      
          <ul>

         {this.state.options.map(function(option, index){
            return(
              <li className="p-2 bg-info row" key={index}>
              
               <p className = "col-xs-7 col-sm-7 col-md-8 col-lg-10"  >{option.option}</p>               
               <div id="DateandTime"  >
            <button className = "x"onClick={this.delete.bind(this,index)} data-key={index} ></button>
            <h5 className="Date"> {option.date}</h5>
            <h5 className="Time">{option.time}</h5>
            <h5 className="Type">{option.Type}</h5>
            <h5 className="Type">{option.From}</h5>
            <h5 className="Type">{option.To}</h5>




            </div>
              </li>
              );
          }, this )} 
          </ul>

      {/* {this.state.options.map(opt => (
        <ul>
          <div className = "transition">
            <li  className="p-2 bg-info row" >
            
            <p className = "col-xs-7 col-sm-7 col-md-8 col-lg-10"  >{opt}</p>           
            <div id="DateandTime"  >
            <button className = "x"onClick={this.delete.bind(this, opt)} ></button>
            <h5 className="Date"> {this.state.date}/{this.state.month}/{this.state.year}</h5>
            <h5 className="Time">{this.state.hrs}:{this.state.min}:{this.state.sec}</h5>
            </div>
            </li>
            </div>
            </ul>
            
          ))       
          } */}
      </div>     
      </div>   
        <br/>    
        <div>
        <br/>
      
          </div>   
          </div>        
      </div>
      </div>

    );
  }



}

// const p = document.querySelector('.p')
//       p.addEventListener('Click', _ => 
//       p.classList.toggle('is-active'))
export default App;