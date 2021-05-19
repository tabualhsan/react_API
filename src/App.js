import React, { useState, useEffect } from 'react';

function App(props) {

  const [items, setitems] = useState([]);
  const [isLoaded, setisLoaded] = useState(false); 

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      setitems(json);
      
      setisLoaded(true); 
    })
  }, [items])
  if (!isLoaded){
    return <div> Loading...</div>
  }
  return(
    <div >
      <ul>      
        {items.map(item =>(
          <li key={item.id}>
            {item.name}
          </li>
        ))};   
      </ul>     
    </div>
  ) 
}


// class App extends Component{

//   constructor(props){
//     super(props);
//     this.state = {
//       items: [],
//       isLoaded: false,

//     }
//   }
//   componentDidMount(){

//     // api call 
//     // get and save info in a state from API
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(res => res.json())
//       .then(json => {
//         this.setState({
//           isLoaded: true,
//           items: json,

//         })

//     });
//   }
//   render(){
//     var { isLoaded, items } = this.state;
//     if (!isLoaded){
//       return <div> Loading...</div>

//     }
  
//     else{
    
    
//       return (
//         <div >
//           <ul>
            
//           {items.map(item =>(
//             <li key={item.id}>
//               {item.name}

//             </li>

//           ))};

//           </ul>
      

//       </div>
//     );
//   }}}
  

export default App;