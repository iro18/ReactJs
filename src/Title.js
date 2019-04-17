import React, {Component} from "react"

class Title extends Component{
    componentDidMount(){
        document.title = "dfsdfsdfsd"
      }
    
      render(){
        return(
          <b> test </b>
        )
      }
}

export default Title