import React, { Component } from 'react'
import 'react-bootstrap'
import './Styles.css'
export class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="animate-opacity">
                    <p className=" pl2 f2 fw3">
                        What is Data Visualization ??
                    </p>
                    <p className="pl3 f4 fw2 black">
                    Data visualization is the graphical representation of information and data. 
                    By using visual elements like charts, graphs, and maps, data visualization tools provide 
                    an accessible way to see and understand trends, outliers, and patterns in data.

                    In the world of Big Data, data visualization tools and technologies are essential 
                    to analyze massive amounts of information and make data-driven decisions.
                    </p>   
                </div>
                <img src="https://cdnl.tblsft.com/sites/default/files/pages/_data_visualization_definition.gif" alt="Image1"className="h5 pa2 img">
                </img>
                <div className="animate-opacity">
                    <p className=" pl2 f3 fw3">
                        Why Data Visualization ??
                    </p>
                    <p className="pl3 f4 fw2 black">
                    Data visualization is another form of visual art that grabs our interest and keeps our eyes on the message. 
                    When we see a chart, we quickly see trends and outliers. If we can see something, we internalize it quickly. 
                    It’s storytelling with a purpose. If you’ve ever stared at a massive spreadsheet of 
                    data and couldn’t see a trend, you know how much more effective a visualization can be.
                    </p>   
                    <p className="pl3 f4 fw2 black">
                    It’s hard to think of a professional industry that doesn’t benefit from making data more understandable.
                    While we’ll always wax poetically about data visualization there are practical, real-life applications 
                    that are undeniable. And, since visualization is so prolific, it’s also one of the most useful professional
                     skills to develop. The better you can convey your points visually, whether in a dashboard or a slide deck, 
                     the better you can leverage that information.
                    </p>
                    <p className=" pl2 f3 fw3">
                        What is BIG data ??
                    </p>
                    <p className="pl3 f4 fw2 black">
                    Big data is a field that treats ways to analyze, systematically extract information from, or 
                    otherwise deal with data sets that are too large or complex to be dealt with by traditional 
                    data-processing application software. Data with many cases (rows) offer greater statistical power, 
                    while data with higher complexity (more attributes or columns) may lead to a higher false discovery 
                    rate.Big data challenges include capturing data, data storage, data analysis, search, sharing, 
                    transfer, visualization, querying, updating, information privacy and data source. Big data was 
                    originally associated with three key concepts: volume, variety, and velocity. When we handle big data, 
                    we may not sample but simply observe and track what happens. Therefore, big data often includes data with 
                    sizes that exceed the capacity of traditional software to process within an acceptable time and value.
                    </p>
                </div>
                
            </div>
        )
    }
}

export default Home
