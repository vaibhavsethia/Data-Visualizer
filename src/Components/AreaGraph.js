import React, { Component } from 'react'
import {VictoryChart,VictoryArea, VictoryTheme,VictoryClipContainer,VictoryLabel} from 'victory'
import './Styles.css'

export class AreaGraph extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inputValue1:1,
             inputValue2:2,
             inputValue3:3,
             inputValue4:4,
             inputValue5:5,
             inputValue6:6
        }
    }
    render() {
        //---------------------Data---------------------
        const data = [
            {x: 'A', y: parseInt(this.state.inputValue1)},
            {x: 'B', y: parseInt(this.state.inputValue2)},
            {x: 'C', y: parseInt(this.state.inputValue3)},
            {x: 'D', y: parseInt(this.state.inputValue4)},
            {x: 'E', y: parseInt(this.state.inputValue5)},
            {x: 'F', y: parseInt(this.state.inputValue6)}

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
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 4" onChange={e => this.setState({ inputValue4: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 5: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 5" onChange={e => this.setState({ inputValue5: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 6: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 6" onChange={e => this.setState({ inputValue6: e.target.value })}></input>
                </div>
                <div className="area1">
                    <VictoryChart
                        theme={VictoryTheme.material}
                        style={{ parent: { maxWidth: "75%" } }}
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

export default AreaGraph
