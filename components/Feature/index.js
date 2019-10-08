import React from 'react';
import uuidv1 from 'uuid/v1';
import ModalVideo from '~/components/Modal/Video';

class Feature extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            activeIndex: -1,
            features: [
                {
                    id: '1',
                    date: 'Drama • 2015',
                    title: 'Behind the Scenes',
                    src: 'static/images/post/come-1.png',
                },
                {
                    id: '2',
                    date: 'Drama • 2015',
                    title: 'Behind the Scenes',
                    src: 'static/images/post/come-2.png',
                },
                {
                    id: '3',
                    date: 'Drama • 2015',
                    title: 'Behind the Scenes',
                    src: 'static/images/post/come-3.png',
                }
            ]
        }
        this.handleTabSelect = this.handleTabSelect.bind(this);
    }

    handleTabSelect(e) {
        const { show } = this.state;
        this.setState({activeIndex: e.currentTarget.dataset.id, show: !show});
    }

  render() {
    const { features, show, activeIndex } = this.state;
    return (
        <React.Fragment>
            <div className="post-full-image-component bg-black-2" data-show-video-popup>
                <div className="container border-gray">
                    <h1 className="main-titles">FEATURES</h1>
                    <div className="row">
                        {
                            features.map((feature, index) => (
                                <div className="col-md-4 col-sm-12" key={uuidv1()}>
                                    <div className="post-block post-full-image">
                                        <div className="post-image">
                                            <div className="block-image">
                                                <img src={feature.src} alt ="#" />
                                            </div>
                                            <div className="post-overlay"></div>
                                            <div className="post-content"><span className="post-category">{feature.date}</span>
                                                <h1 className="post-title">{feature.title}</h1>
                                            </div>
                                        </div>
                                        <ul className="post-list-icon">
                                            <li><a href="javascript:void(0)"><img src="static/images/icons/watch-now-circle.svg" /></a></li>
                                            <li><a href="javascript:void(0)"><img src="static/images/icons/favourite-circle.svg" /></a></li>
                                            <li><a data-id={`${index}`} className={`more-info-link ${index == activeIndex ? 'less-info-link':'' }`} onClick={this.handleTabSelect} href="javascript:void(0)" data-more-info><img className="more-image" src="static/images/icons/more-info.svg" /><img className="less-image" src="static/images/icons/less-info.svg" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <ModalVideo show={show} />
        </React.Fragment>
    );
  }
}

export default Feature;
