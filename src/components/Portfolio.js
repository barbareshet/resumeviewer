import React, { Component } from 'react';

class Portfolio extends Component{
    render(){
        return (
            <section id="portfolio">

                <div className="row">

                    <div className="twelve columns collapsed">

                        <h1>Check Out Some of My Works.</h1>


                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">

                            <div className="columns portfolio-item">
                                <div className="item-wrap">


                                        <img alt="" src="images/portfolio/coffee.jpg"/>
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Coffee</h5>
                                                    <p>Illustrration</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus"></i></div>


                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                <img alt="" src="images/portfolio/console.jpg"/>
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Console</h5>
                                            <p>Web Development</p>
                                        </div>
                                    </div>
                                    <div className="link-icon">
                                        <i className="icon-plus"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">


                                        <img alt="" src="images/portfolio/judah.jpg"/>
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Judah</h5>
                                                    <p>Webdesign</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus"></i></div>


                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">


                                        <img alt="" src="images/portfolio/into-the-light.jpg"/>
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Into The Light</h5>
                                                    <p>Photography</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus"></i></div>


                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">


                                        <img alt="" src="images/portfolio/farmerboy.jpg"/>
                                            <div className="overlay">
                                                <div className="portfolio-item-meta">
                                                    <h5>Farmer Boy</h5>
                                                    <p>Branding</p>
                                                </div>
                                            </div>
                                            <div className="link-icon"><i className="icon-plus"></i></div>


                                </div>
                            </div>

                            <div className="columns portfolio-item">
                                <div className="item-wrap">


                                        <img alt="" src="images/portfolio/girl.jpg" />
                                        <div className="overlay">
                                            <div className="portfolio-item-meta">
                                                <h5>Girl</h5>
                                                <p>Photography</p>
                                            </div>
                                        </div>
                                    <div className="link-icon"><i className="icon-plus"></i></div>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                <img alt="" src="images/portfolio/origami.jpg"/>
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Origami</h5>
                                            <p>Illustrration</p>
                                        </div>
                                    </div>
                                    <div className="link-icon"><i className="icon-plus"></i></div>
                                </div>
                            </div>
                            <div className="columns portfolio-item">
                                <div className="item-wrap">
                                <img alt="" src="images/portfolio/retrocam.jpg"/>
                                    <div className="overlay">
                                        <div className="portfolio-item-meta">
                                            <h5>Retrocam</h5>
                                            <p>Web Development</p>
                                        </div>
                                    </div>
                                    <div className="link-icon"><i className="icon-plus"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
