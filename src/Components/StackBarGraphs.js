import React, { Component } from 'react'
import {VictoryBar,VictoryChart,VictoryAxis,VictoryTheme,VictoryStack} from 'victory'
import './Styles.css'

export class StackBarGraphs extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inputValue1:1,
             inputValue2:2,
             inputValue3:3,
             inputValue4:4,
             inputValue5:4,
             inputValue6:3,
             inputValue7:2,
             inputValue8:1,
             inputValue9:2,
             inputValue10:2,
             inputValue11:2,
             inputValue12:2
        }
    }
    render() {
        //---------------------Data---------------------
        const data1 = [
            {quarter: 1, earnings: parseInt(this.state.inputValue1)},
            {quarter: 2, earnings: parseInt(this.state.inputValue2)},
            {quarter: 3, earnings: parseInt(this.state.inputValue3)},
            {quarter: 4, earnings: parseInt(this.state.inputValue4)}
          ];
        const data2 = [
            {quarter: 1, earnings: parseInt(this.state.inputValue5)},
            {quarter: 2, earnings: parseInt(this.state.inputValue6)},
            {quarter: 3, earnings: parseInt(this.state.inputValue7)},
            {quarter: 4, earnings: parseInt(this.state.inputValue8)}
          ];
        const data3 = [
            {quarter: 1, earnings: parseInt(this.state.inputValue9)},
            {quarter: 2, earnings: parseInt(this.state.inputValue10)},
            {quarter: 3, earnings: parseInt(this.state.inputValue11)},
            {quarter: 4, earnings: parseInt(this.state.inputValue12)}
          ];
        //---------------------Main---------------------
        return (
            <div>
                <p className="tc f4 fw3 ">Year-1</p>
                <div className="pa3 flex">
                    <label className="pa2 fw3 ">Quart 1: </label>
                    <input type="number" id="Num1" className="br-pill" placeholder="Enter Number 1" onChange={e => this.setState({ inputValue1: e.target.value })}></input>
                    <label className="pa2 fw3" >Quart 2: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue2: e.target.value })}></input>
                    <label className="pa2 fw3">Quart 3: </label>
                    <input type="number" id="Num3" className="br-pill" placeholder="Enter Number 3" onChange={e => this.setState({ inputValue3: e.target.value })}></input>
                    <label className="pa2 fw3">Quart 4: </label>
                    <input type="number" id="Num4" className="br-pill" placeholder="Enter Number 4" onChange={e => this.setState({ inputValue4: e.target.value })}></input>
                </div>
                <p className="tc f4 fw3 ">Year-2</p>
                <div className="pa3 flex">
                    <label className="pa2 fw3 ">Quart 1: </label>
                    <input type="number" id="Num1" className="br-pill" placeholder="Enter Number 1" onChange={e => this.setState({ inputValue5: e.target.value })}></input>
                    <label className="pa2 fw3" >Quart 2: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue6: e.target.value })}></input>
                    <label className="pa2 fw3">Quart 3: </label>
                    <input type="number" id="Num3" className="br-pill" placeholder="Enter Number 3" onChange={e => this.setState({ inputValue7: e.target.value })}></input>
                    <label className="pa2 fw3">Quart 4: </label>
                    <input type="number" id="Num4" className="br-pill" placeholder="Enter Number 4" onChange={e => this.setState({ inputValue8: e.target.value })}></input>
                </div>
                <p className="tc f4 fw3 ">Year-3</p>
                <div className="pa3 flex">
                    <label className="pa2 fw3 ">Quart 1: </label>
                    <input type="number" id="Num1" className="br-pill" placeholder="Enter Number 1" onChange={e => this.setState({ inputValue9: e.target.value })}></input>
                    <label className="pa2 fw3" >Quart 2: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue10: e.target.value })}></input>
                    <label className="pa2 fw3">Quart 3: </label>
                    <input type="number" id="Num3" className="br-pill" placeholder="Enter Number 3" onChange={e => this.setState({ inputValue11: e.target.value })}></input>
                    <label className="pa2 fw3">Quart 4: </label>
                    <input type="number" id="Num4" className="br-pill" placeholder="Enter Number 4" onChange={e => this.setState({ inputValue12: e.target.value })}></input>
                </div>
                <div className="bar2">
                    <VictoryChart 
                    domainPadding={40} 
                    theme={VictoryTheme.material} 
                    animate={{duration: 2000}}
                    style={{ parent: { maxWidth: "70%" } }}
                    >
                        <VictoryAxis
                        tickValues={[1, 2, 3, 4]}
                        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
                        />
                        <VictoryAxis
                        dependentAxis
                        tickFormat={(x) => (`$${x}k`)}
                        />
                        <VictoryStack colorScale={"warm"}>
                        <VictoryBar
                            data={data1}
                            x="quarter"
                            y="earnings"
                        />
                        <VictoryBar
                            data={data2}
                            x="quarter"
                            y="earnings"
                        />
                        <VictoryBar
                            data={data3}
                            x="quarter"
                            y="earnings"
                        />
                        </VictoryStack>
                    </VictoryChart>
                </div>

                
            </div>
        )
    }
}

export default StackBarGraphs
