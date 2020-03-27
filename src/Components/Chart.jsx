import React, {Component} from "react"
//importação da lib de graficos chart;
import {Bar} from 'react-chartjs-2'

class Chart extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData : {
            labels: ['BLUE', 'GREEN', 'Yellow', 'RED', 'PINK', 'ORANGE'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    '#0000FF',
                    '#008000',
                    '#FFFF00',
                    '#FF0000',
                    '#FF1493',
                    '#FFA500'
                ],
                borderColor: [
                    '#0000FF',
                    '#008000',
                    '#FFFF00',
                    '#FF0000',
                    '#FF1493',
                    '#FFA500'
                ],
                borderWidth: 1
            }]
        },
                }       
            }
            static defaultProps = {
                    displayTitle: true,
                    displayLegend: true,    
                    titlePosition: 'bottom',
                    legendPosition: 'right'

            }
        
         
    render(){
    return(
        <div ClassName='App'>
            <Bar
                data={this.state.chartData}
                options ={{
                        title:{
                            display: this.props.displayTitle,
                            text: "graphics development",
                            fontSize: 23,
                            position: this.props.titlePosition

                        },
                        legend:{
                            display: this.props.displayLegend,
                            position: this.props.legendPosition
                        },
                    maintainAspectRatio: false
                }}
            />
            </div>
        );
    }
    }



export default Chart;