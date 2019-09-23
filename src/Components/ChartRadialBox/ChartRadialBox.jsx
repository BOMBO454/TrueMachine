import React from 'react'
import css from './ChartRadialBox.module.scss'
import SelectBoxText from 'Components/SelectBoxText/SelectBoxText'
import PieChart from 'react-minimal-pie-chart'

const options = [
    { key: 1, text: 'This month', value: 1 },
    { key: 2, text: 'Active', value: 2 },
    { key: 3, text: 'Loosers', value: 3 },
]

const data = [
    { title: 'Active', value: 30, color: '#FFB946' },
    { title: 'Ended', value: 10, color: '#F7685B' },
    { title: 'Completed', value: 60, color: '#2ED47A' },
]

class ChartRadialBox extends React.Component{
    render(){
        return(
            <div className={css.chartBox}>
                <div className={css.header}>
                    <span className={css.headerTitle}>Tasks</span>
                    <SelectBoxText
                        options={options}
                        text='Show'
                        placeholder='This month'
                    />
                </div>
                <div className={css.body}>
                    <div className={css.chartBody}>
                    <PieChart
                        data={data}
                        lineWidth={5}
                        label={
                            ()=>{
                                return(
                                    '60%'
                                )
                            }
                        }
                        labelStyle={{
                            color:data[0].color,
                            fontSize: '25px',
                            fontFamily: 'sans-serif'
                        }}
                        labelPosition={0}
                        rounded
                        reverse
                        style={{height: 'auto'}}
                    />
                    </div>
                    <div className={css.chartLegend}>
                        {
                            data.map((item,key)=>{
                                return(
                                    <div key={key} className={css.legendItem}>
                                        <span className={css.circle} style={{borderColor:item.color}}></span>
                                        <span>{item.title}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                    </div>
            </div>
        )
    }
}

export default ChartRadialBox
