import React,{Component} from 'react';
import './App.css';
import 'tachyons'
import Home from '../Components/Home'
import BarGraphs from '../Components/BarGraphs';
import StackBarGraphs from '../Components/StackBarGraphs'
import PieGraph from '../Components/PieGraph'
import AreaGraph from '../Components/AreaGraph'
import LineGraph from '../Components/LineGraph'
import ScatterGraph from '../Components/ScatterGraph'
import PolarGraph from '../Components/PolarGraph'
import SpreadAreaGraph from '../Components/SpreadAreaGraph'
import CurveGraph from '../Components/CurveGraph'
import RadialGraph from '../Components/RadialGraph'
import PolarAreaGraph from '../Components/PolarAreaGraph'



export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       PageState: "Home"
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  HandleClick = (route) => {
    this.setState({
      PageState : route
    })
    window.scrollTo(0, 0)
    }
  
  render() {
    return (
      <div className="App">
      {/*---------------------Header---------------------*/}
      <nav className="pa3 pa4-ns bg-near-black bb back1"> 
        <a className="link dim white-80 hover-green f3 f-headline-ns tc db mb3 fw1 text1" href="App.js" title="Home">Data Visualizer</a>
      </nav>
      {/*---------------------Body---------------------*/}
      <div className=" center">
        <div className="cf ">
          {/*---------------------Sidebar---------------------*/}
          <div className="fl w-20 pa2 back2">
            <div className=" pv4">
            <div className=" flex flex-column">
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="Bar" onClick={()=>this.HandleClick('Home') }>Home</a>              
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="Side" onClick={()=>this.HandleClick('Bar') }>Bar Graphs</a>
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="About" onClick={()=>this.HandleClick('StackBar') }>Stacked Bar Graphs</a>
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="About" onClick={()=>this.HandleClick('Pie') }>Pie Graphs</a>
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="About" onClick={()=>this.HandleClick('Radial') }>Radial Graphs</a>
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="About" onClick={()=>this.HandleClick('Area') }>Area Graphs</a>               
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="About" onClick={()=>this.HandleClick('Spread') }>Spread Area Graphs</a>
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="About" onClick={()=>this.HandleClick('Curve') }>Curve Graphs</a>
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="About" onClick={()=>this.HandleClick('Line') }>Line Graphs</a>
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="About" onClick={()=>this.HandleClick('Scatter') }>Scatter Graphs</a>
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="About" onClick={()=>this.HandleClick('Polar') }>Polar Graphs</a>
                <a className="three link dim white f5 pa4 dib mr3" href="#" title="About" onClick={()=>this.HandleClick('PolarArea') }>Polar Area Graphs</a>
            </div>
            </div>
          </div>
          {/*---------------------MainBody---------------------*/}
          <div className="fl w-80  back3">
          {
            this.state.PageState === 'Bar'?
              <BarGraphs></BarGraphs>
                :this.state.PageState === 'StackBar'?
                  <StackBarGraphs></StackBarGraphs>  
                    :this.state.PageState === 'Pie'?
                      <PieGraph></PieGraph>
                        :this.state.PageState === 'Radial'?
                          <RadialGraph></RadialGraph>
                            :this.state.PageState === 'Area'?
                              <AreaGraph></AreaGraph>
                                :this.state.PageState === 'Spread'?
                                  <SpreadAreaGraph></SpreadAreaGraph>
                                    :this.state.PageState === 'Curve'?
                                      <CurveGraph></CurveGraph>
                                        :this.state.PageState === 'Line'?
                                          <LineGraph></LineGraph>
                                            :this.state.PageState === 'Scatter'?
                                              <ScatterGraph></ScatterGraph>
                                                :this.state.PageState === 'Polar'?
                                                <PolarGraph></PolarGraph>
                                                  :this.state.PageState === 'PolarArea'?
                                                    <PolarAreaGraph></PolarAreaGraph>
                                                      :
                                                        <Home></Home>

          }
          </div>
        </div>
      </div>
      {/*---------------------Footer---------------------*/}
      <footer className="bg-near-black white-80 pa1">
        <p className="f2 tc ">
          <a className="link white-80 hover-green fw2" href="https://formidable.com/open-source/victory/about/">VICTORY</a>
        </p>
      </footer>
    </div>
    )
  }
}

export default App


