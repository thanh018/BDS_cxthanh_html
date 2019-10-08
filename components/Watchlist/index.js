import React from 'react';
import uuidv1 from 'uuid/v1';
import ModalVideo from '~/components/Modal/Video';

class Watchlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            activeIndex: -1,
            Watchlists: [
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
                },
                {
                    id: '4',
                    date: 'Drama • 2015',
                    title: 'Behind the Scenes',
                    src: 'static/images/post/come-1.png',
                },
                {
                    id: '5',
                    date: 'Drama • 2015',
                    title: 'Behind the Scenes',
                    src: 'static/images/post/come-2.png',
                },
                {
                    id: '6',
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
    const { Watchlists, show, activeIndex } = this.state;
    return (
        <React.Fragment>
            <div className="post-slide-block bg-black-2" data-show-video-popup>
                <div className="container border-gray">
                    <h1 className="main-titles">Watchlist</h1>
                    <div className="post-top-image-inner" data-post-slide>
                        {
                            Watchlists.map((watchlist, index) => (
                                <div className="post-block post-full-image" key={uuidv1()}>
                                    <div className="post-image">
                                        <div className="block-image">
                                            <img src={watchlist.src} alt ="#" />
                                        </div>
                                        <div className="post-overlay"></div>
                                        <div className="post-content"><span className="post-category">{watchlist.date}</span>
                                            <h1 className="post-title">{watchlist.title}</h1>
                                        </div>
                                    </div>
                                    <ul className="post-list-icon">
                                        <li><a href="javascript:void(0)"><img src="static/images/icons/watch-now-circle.svg" /></a></li>
                                        <li><a href="javascript:void(0)"><img src="static/images/icons/favourite-circle.svg" /></a></li>
                                        <li><a data-id={`${index}`} className={`more-info-link ${index == activeIndex ? 'less-info-link':'' }`} onClick={this.handleTabSelect} href="javascript:void(0)" data-more-info><img className="more-image" src="static/images/icons/more-info.svg" /><img className="less-image" src="static/images/icons/less-info.svg" /></a></li>
                                    </ul>
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

export default Watchlist;
