import React, { Component } from 'react'
import {VictoryChart,VictoryArea, VictoryTheme,VictoryClipContainer,VictoryLabel} from 'victory'
import './Styles.css'

export class SpreadAreaGraph extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inputValue1H:6,
             inputValue2H:4,
             inputValue3H:6,
             inputValue4H:4,
             inputValue5H:3,
             inputValue6H:5,
             inputValue1L:2,
             inputValue2L:0,
             inputValue3L:1,
             inputValue4L:3,
             inputValue5L:2,
             inputValue6L:2
        }
    }
    render() {
        const data = [
            {x: 'A', y: parseInt(this.state.inputValue1H), y0:parseInt(this.state.inputValue1L)},
            {x: 'B', y: parseInt(this.state.inputValue2H), y0:parseInt(this.state.inputValue2L)},
            {x: 'C', y: parseInt(this.state.inputValue3H), y0:parseInt(this.state.inputValue3L)},
            {x: 'D', y: parseInt(this.state.inputValue4H), y0:parseInt(this.state.inputValue4L)},
            {x: 'E', y: parseInt(this.state.inputValue5H), y0:parseInt(this.state.inputValue5L)},
            {x: 'F', y: parseInt(this.state.inputValue6H), y0:parseInt(this.state.inputValue6L)},

          ];
        
        return (
            <div>
                <div className="pa3 flex mt3 input4">
                    <label className="pa2 fw3 ">Data 1 High: </label>
                    <input type="number" id="Num1" className="br-pill" placeholder="Enter Number 1" onChange={e => this.setState({ inputValue1H: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 1 Low: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue1L: e.target.value })}></input>
                </div>
                <div className="pa3 flex mt3 input4">
                    <label className="pa2 fw3 ">Data 2 High: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue2H: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 2 Low: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue2L: e.target.value })}></input>
                </div>
                <div className="pa3 flex mt3 input4">
                    <label className="pa2 fw3 ">Data 3 High: </label>
                    <input type="number" id="Num3" className="br-pill" placeholder="Enter Number 3" onChange={e => this.setState({ inputValue3H: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 3 Low: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue3L: e.target.value })}></input>
                </div>
                <div className="pa3 flex mt3 input4">
                    <label className="pa2 fw3 ">Data 4 High: </label>
                    <input type="number" id="Num4" className="br-pill" placeholder="Enter Number 4" onChange={e => this.setState({ inputValue4H: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 4 Low: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue4L: e.target.value })}></input>
                </div>
                <div className="pa3 flex mt3 input4">
                    <label className="pa2 fw3 ">Data 5 High: </label>
                    <input type="number" id="Num5" className="br-pill" placeholder="Enter Number 5" onChange={e => this.setState({ inputValue5H: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 5 Low: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue5L: e.target.value })}></input>
                </div>
                <div className="pa3 flex mt3 input4">
                    <label className="pa2 fw3 ">Data 6 High: </label>
                    <input type="number" id="Num6" className="br-pill" placeholder="Enter Number 6" onChange={e => this.setState({ inputValue6H: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 6 Low: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue6L: e.target.value })}></input>
                </div>
                <div className="area2">
                    <VictoryChart
                        theme={VictoryTheme.material}
                        style={{ parent: { maxWidth: "60%" } }}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                          }}
                          //domain={{x: [0, 100], y: [0, 1]}}
                          
                        >
                        <VictoryArea
                            groupComponent={<VictoryClipContainer 
                            clipPadding={{ top: 5, right: 10 }}/>}
                            style={{ data: { stroke: "#000", strokeWidth: 2, strokeLinecap: "round",  fill: "#c43a31" } }}
                            data={data}
                            //interpolation="natural"
                            labels={({ datum }) => datum.y}
                            labelComponent={<VictoryLabel renderInPortal dy={-20}/>}
                        />
                    </VictoryChart>
                </div>
            </div>
        )
    }
}

export default SpreadAreaGraph
