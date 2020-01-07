import React, { Component} from 'react'
import {VictoryChart,VictoryTheme,VictoryPolarAxis,VictoryBar} from 'victory'
import './Styles.css'

export class PolarGraph extends Component {
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
                <div className="polar">
                    <VictoryChart polar
                    
                        theme={VictoryTheme.material}
                        style={{
                            data: { stroke: "#000" },
                            parent: { maxWidth: "70%" }
                            }}
                        animate={{
                            duration: 2000,
                            onLoad: { duration: 1000 }
                        }}
                        >
                        {
                            ["A", "B", "C", "D", "E", "F"].map((d, i) => {
                            return (
                                <VictoryPolarAxis dependentAxis={true}
                                    innerRadius={10}
                                    //domainPadding={{x: [10, -10], y: 5}}
                                    //circularAxisComponent={<Arc r={300}/>}
                                    key={i}
                                    label={d}
                                    labelPlacement="perpendicular"
                                    style={{ tickLabels: { fill: "none" } }}
                                    axisValue={d}
                                />
                            );
                            })
                        }
                        <VictoryBar
                            style={{ data: { fill: "tomato", width: 25 } }}
                            data={data}
                        />
                        </VictoryChart>
                </div>
            </div>
        )
    }
}

export default PolarGraph
