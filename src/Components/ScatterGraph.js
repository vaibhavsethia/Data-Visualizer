import React, { Component } from 'react'
import {VictoryScatter,VictoryChart,VictoryLabel} from 'victory'
import './Styles.css'

export class ScatterGraph extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inputValue1:1,
             inputValue2:2,
             inputValue3:3,
             inputValue4:3,
             inputValue5:2,
             inputValue6:4
        }
    }
    render() {
        //---------------------Data---------------------
        const data = [
            {x: 'A', y: parseInt(this.state.inputValue1), amount:3},
            {x: 'B', y: parseInt(this.state.inputValue2), amount:6},
            {x: 'C', y: parseInt(this.state.inputValue3), amount:9},
            {x: 'D', y: parseInt(this.state.inputValue4), amount:12},
            {x: 'E', y: parseInt(this.state.inputValue5), amount:15},
            {x: 'F', y: parseInt(this.state.inputValue6), amount:18}

          ];
          //---------------------Main---------------------
        return (
            <div>
                <div className="pa3 flex mt3 pl5 input1">
                    <label className="pa2 fw3 ">Data 1: </label>
                    <input type="number" id="Num1" className="br-pill" placeholder="Enter Number 1" onChange={e => this.setState({ inputValue1: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 2: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue2: e.target.value })}></input>
                    <label className="pa2 fw3">Data 3: </label>
                    <input type="number" id="Num3" className="br-pill" placeholder="Enter Number 3" onChange={e => this.setState({ inputValue3: e.target.value })}></input>
                </div>
                <div className="pa3 flex mt3 pl5 input1">
                    <label className="pa2 fw3" >Data 4: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue4: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 5: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue5: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 6: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue6: e.target.value })}></input>
                </div>
                <div className="scatter">
                    <VictoryChart
                        //theme={VictoryTheme.material}
                        //domain={{ x: [0, 6], y: [0, 7] }}
                        style={{
                            data: { stroke: "#000" },
                            parent: { maxWidth: "70%" }
                            }}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        >
                        <VictoryScatter
                            padding={{ top: 20, bottom: 60 }}
                            bubbleProperty="amount"
                            maxBubbleSize={18}
                            minBubbleSize={3}
                            style={{
                                data: {
                                  fill: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31",
                                  stroke: ({ datum }) => datum.x === 3 ? "#000000" : "#c43a31",
                                  fillOpacity: 0.7,
                                  strokeWidth: 3
                                },
                                labels: {
                                  fontSize: 15,
                                  fill: ({ datum }) => datum.x === 3 ? "#000000" : "#000"
                                }
                            }}
                            size={7}
                            data={data}
                            labels={({ datum }) => datum.y}
                            labelComponent={<VictoryLabel dy={8}/>}
                        />
                    </VictoryChart>
                </div>
            </div>
        )
    }
}

export default ScatterGraph
