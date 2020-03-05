
import React from 'react';
import Background from './Background';
import CircleMap from './Circle';
import Header from './Header';
import Wrapper from './Wrapper'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.myRef=React.createRef()
        this.resize.bind(this)
    }
    screenChange(){
        window.addEventListener('resize', this.resize);
    }
    resize=() => {
        const { resizeScreen } = this.props
        const width = this.myRef.current.clientWidth
        const height = this.myRef.current.clientHeight
        //移动设备不监听
        if(width>900)
            resizeScreen(width, height)
    }
    componentDidMount() {
        this.screenChange()
        const { resizeScreen } = this.props
        const width = this.myRef.current.clientWidth
        const height = this.myRef.current.clientHeight
        resizeScreen(width, height)
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.resize);
    }

    render() {
        const { dataType,bgType,centerCity,citiesData,chinaTopoJson, 
            changeCenter, svgWidth, svgHeight,dates,selectDate,selectedDate,maxValue,

            radiusType,
            selectProvince,
            selectedProvince,
            distanceType
            } = this.props
        const width=svgWidth
        const height=svgHeight

        //判断数据中是否有该城市
        let ifHas=false 
        citiesData.forEach(d=>{
            if(d.city===centerCity){
                ifHas=true
            }
        });
        if(ifHas===false){
            changeCenter(null)//武汉
        }
        return (
            <Wrapper >
                <Header 
                    { ...{citiesData, centerCity: ifHas===false?null : centerCity, changeCenter, 
                        selectProvince ,bgType, dataType,dates,selectedDate,selectDate,
                        radiusType,
                        distanceType
                    }}/>
  
                <div className="svgContainer" ref={this.myRef}>
                  <svg {...{width,height}} >
                    
                      <Background {...{chinaTopoJson,bgType,centerCity}}
                          {...{width,height}}
                      />            
                      <CircleMap  {...{citiesData, bgType, dataType, 
                      centerCity: ifHas===false?null : centerCity , 
                      selectedProvince, chinaTopoJson, 
                      selectedDate,maxValue, radiusType, distanceType}}
                          handleChangeCernter = {changeCenter}
                          x={0}
                          y={0}
                          {...{width,height}}
                          />
                  </svg> 
                </div>
            </Wrapper>
        );
    }
}


export default App;