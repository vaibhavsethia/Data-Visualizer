import React, { Component } from 'react'
import {VictoryPie} from 'victory'
import './Styles.css'

export class RadialGraph extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             inputValue1:1,
             inputValue2:1,
             inputValue3:1,
             inputValue4:1,
             inputValue5:1
        }
    }
    render() {
        //---------------------Data---------------------
        const data = [
            {x: 'A', y: parseInt(this.state.inputValue1)},
            {x: 'B', y: parseInt(this.state.inputValue2)},
            {x: 'C', y: parseInt(this.state.inputValue3)},
            {x: 'D', y: parseInt(this.state.inputValue4)},
            {x: 'E', y: parseInt(this.state.inputValue5)}
          ];
          //---------------------Main---------------------
        return (
            <div>
                <div className="pa3 flex mt3 input2">
                    <label className="pa2 fw3 ">Data 1: </label>
                    <input type="number" id="Num1" className="br-pill" placeholder="Enter Number 1" onChange={e => this.setState({ inputValue1: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 2: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 2" onChange={e => this.setState({ inputValue2: e.target.value })}></input>
                    <label className="pa2 fw3">Data 3: </label>
                    <input type="number" id="Num3" className="br-pill" placeholder="Enter Number 3" onChange={e => this.setState({ inputValue3: e.target.value })}></input>
                </div>
                <div className="pa3 flex mt3 input3">
                    <label className="pa2 fw3" >Data 4: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 4" onChange={e => this.setState({ inputValue4: e.target.value })}></input>
                    <label className="pa2 fw3" >Data 5: </label>
                    <input type="number" id="Num2" className="br-pill" placeholder="Enter Number 5" onChange={e => this.setState({ inputValue5: e.target.value })}></input>
                </div>
                <div className="pie">
                        <VictoryPie data={data} 
                            animate={{duration: 2000}}
                            colorScale="warm"
                            style={{ parent: { maxWidth: "80%" } }}
                            className=""
                            cornerRadius={({ datum }) => 10}
                            innerRadius={({ datum }) => 90}
                            padAngle={({ datum }) => 2}
                            sortKey="x"
                            sortOrder="ascending"
                            endAngle={360}
                            startAngle={0}
                            width={400}
                        >
                        </VictoryPie>
                </div>

            </div>
        )
    }
}

export default RadialGraph
