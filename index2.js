// import React from 'react'
// import ReactDOM from 'react-dom'


// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={altitude:null}

//         window.navigator.geolocation.getCurrentPosition(
//             (position)=>{
//                 this.setState({altitude:position.coords.altitude})
//             },
//             error=>{
//                 console.log(error)
//             }
//         )
//     }

//     render(){
//         return <div>Altitude:{this.state.altitude}</div>
//     }
// }

// ReactDOM.render(<App/>,document.querySelector('#root'))