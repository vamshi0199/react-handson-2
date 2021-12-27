
import React,{Component} from 'react';

class Welcome extends Component {
constructor(){
super()

this.state = {
    name:"",
    department:"",
    rating:"",
    items:[]   
}
}
handleChange =(event) =>{
    this.setState({[event.target.name]: event.target.value})
}
showValue = (event) => {
    event.preventDefault();
    const tempObj ={
        name : this.state.name,
        department : this.state.department,
        rating: this.state.rating
    }
    const tempArr = this.state.items;
    tempArr.push(tempObj)
    this.setState({
        name:'',
        department:'',
        rating:'',
        items:[...tempArr]
    })
}
render() {
    console.log(this.state.items);
return(
    <div className='abcd'>
    <div>
        <h1>Employee feedback form</h1>
         <form action=''>
         <label className='abcd1'>NAME:<input className='hello' type="text"   name='name' value={this.state.name} onChange={this.handleChange}/>
</label><br/>
<label className='abcd2'>Department:<input className='hello1' type="text"   name='department' value={this.state.department} onChange={this.handleChange}/>
</label><br/>
<label className='abcd3'>Rating:<input className='hello2' type="number"   name='rating' value={this.state.rating} onChange={this.handleChange}/>
</label><br/>
<button className='hello3' onClick={this.showValue}>submit</button><br/>
         </form>
    </div><br/><br/>

    <div className='hey'>
{ this.state.items.map((value,index)=>{
return(
    <div className='hey1'>
        {value.name} | {value.department} | {value.rating}
    </div>
)
})
}
</div>
</div>
)
}

}

export default Welcome



  
