*export default class App  extends Component{
    constructor(props){h
      super(props);
  
      this.state = {
        Data:{
          labels:[1, 4, 5, 6, 7],
          datasets:[
            {
                label:"videos mades",
                backgroundColor:"rgba(255,0,255, 0.75)",
              Data:[4,7,8,5,9,0]
            },
            {
              label:"subscriptions",
              backgroundColor:"rgba(255,0,255, 0.75)",
              Data:[1,3,40,7,5,4]
            },
            ]
          }
        }
      }   
  
      getChartData = canvas  =>{
        const Data = this.state.Data;
        
        if(Data.datasets){
          let colors = ["rgba(255,0,255, 0.75)","rgba(0 ,255,0 , 0.75)"];
          Data.datasets.forEach((set, i)  => {
            set.backgroundColor = this.setGradientColor(canvas,colors[i]);
            set.borderColor = "white";
            set.borderWidth = 2;
  
          })
        }
        return Data;
      }
    
   render() {
              return(
                 <div style={{position:"relative" , width: 600, height: 550 }}>
                  <h3>chart Simplex</h3>
                <bar
                  options ={{
                      responsive:true
  
                  }}
                      
                  Data = {this.getChartData}
               
                />
              </div>
  
              );
  
      }
    }