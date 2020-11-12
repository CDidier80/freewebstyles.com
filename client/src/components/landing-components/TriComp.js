// import trisvg from './tri.svg'
import TriangleSvg from "./TriangleSvg.js"
import React, { Component } from 'react'
// const trianglify = require('trianglify')





// const TriangleSvg = () => {
//     const TriangleSvg = trianglify({
//         height: window.innerHeight,
//         width: window.innerWidth,
//         xColors: ['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 1)'],
//         yColors: 'match',
//         cellSize: Math.ceil(window.innerWidth / 8)
//     }).toSVGTree()

//     TriangleSvg.id = 'trianglify-overlay'
//     // .toString()
//     // const triangleComp = [TriangleSvg.slice(0, 4), ` id="trianglify-overlay" `, TriangleSvg.slice(4)].join('');
//     // return ({__html: `${triangleComp}`})
//     // return triangleComp
//     return TriangleSvg
// }


// let instance = TriangleSvg()


class TriComp extends Component {
    // inclusion of props depends on whether app.js passes any
    constructor(props){
      super(props)
      this.state = {
          key: "value"
      }
    }
  

    // Optional - set the initial state or run any other code needed when the component finishes mounting
    // componentDidMount (){
    //   try {
    //       this.setState((prevState) => ({
    //          // set initial state here
    //       }))
    //   } catch (error) {
    //       console.log(error)
    //   }
    // }
  
    render() {
    // console.log(TriangleSvg())
    // console.log(typeof `${TriangleSvg()}`)
    // console.log(instance.toString())
      return (
        <div className="trianglesWrapper">
            <TriangleSvg />
      </div>
      )}
    }
  
    export default Triangles