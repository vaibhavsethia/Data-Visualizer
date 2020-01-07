import React, { Component } from 'react'
import {VictoryBar,VictoryChart,VictoryAxis,VictoryTheme} from 'victory'
//import './BarGraph.css'

export class BarGraphs extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             inputValue1:1,
             inputValue2:2,
             inputValue3:3,
             inputValue4:4
        }
    }

    
    render() {
        //---------------------Data---------------------
        const data = [
            {quarter: 1, earnings: parseInt(this.state.inputValue1)},
            {quarter: 2, earnings: parseInt(this.state.inputValue2)},
            {quarter: 3, earnings: parseInt(this.state.inputValue3)},
            {quarter: 4, earnings: parseInt(this.state.inputValue4)}
          ];
        //---------------------Main---------------------
        return (
            <div>
                <div className="pa3 flex mt3 input1">
                    <label className="pa2 fw3 ">Quart 1: </label>
                    <input type="number" id="Num1" className="br-pill" placeholder="Enter Number 1" onChange={e => this.setState({ inputValue1: e.target.value })}></input>
                    <label className="pa2 fw3" >Quart 2: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue2: e.target.value })}></input>
                    <label className="pa2 fw3">Quart 3: </label>
                    <input type="number" id="Num3" className="br-pill" placeholder="Enter Number 3" onChange={e => this.setState({ inputValue3: e.target.value })}></input>
                    <label className="pa2 fw3">Quart 4: </label>
                    <input type="number" id="Num4" className="br-pill" placeholder="Enter Number 4" onChange={e => this.setState({ inputValue4: e.target.value })}></input>
                </div>
                {/*---------------------Chart---------------------*/}
                <div className="bar1">
                    <VictoryChart 
                    domainPadding={40} 
                    theme={VictoryTheme.material} 
                    animate={{duration: 2000}}
                    style={{ parent: { maxWidth: "70%" } }}>
                        <VictoryAxis
                            tickValues={[1, 2, 3, 4]}
                            tickFormat={["Q1", "Q2", "Q3", "Q4"]}
                            />
                        <VictoryAxis
                        dependentAxis
                        tickFormat={(y) => (`$${y}k`)}
                        />
                        <VictoryBar
                        data={data}
                        x="quarter"
                        y="earnings"
                        />
                    </VictoryChart>
                </div>
            </div>
        )
    }
}

export default BarGraphs
