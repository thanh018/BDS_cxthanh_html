import React from 'react';
import PropTypes from 'prop-types';


const ModalVideo = ({show}) => (
    <div className="more-info-of-banner bg-white d-desktop">
        <div className="container">
            <div className="d-flex">
                <div className="width-60">
                    <div className="content-video-component"><span className="content-category font-bold">Short Film • 2015 • 44 mins</span>
                        <h1 className="content-video-title font-bold">1965: Behind The Scene</h1>
                        <p className="content-video-description">4 Lines of show description The series negates all happenings in the predecessors and explores what might have happened should the boys have been assigned to the Naval Diving Unit. </p>
                        <div className="rating-block"><img src="static/images/icons/stars.svg" /><span className="star-text">4.0 STARS</span></div>
                        <ul className="video-list-link">
                            <li className="watch-now">
                                <a className="watch-now-link" href="javascript:void(0)"><img src="static/images/icons/watch-now-black.svg" /></a>
                            </li>
                            <li className="add-to-favourist">
                                <a className="add-to-favouristlink" href="javascript:void(0)"><img src="static/images/icons/add-to-favourites-black.svg" /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="d-desktop">
                        <div className="comment-box-component">
                            <h1 className="comment-box-title font-bold">26 comments</h1>
                            <div className="comment-box-wrapper scroll-bar">
                                <ul className="comment-list">
                                    <li className="comment-item"><i className="fa fa-user"></i>
                                        <div className="comment-user-block"><span className="comment-info"><a className="user-name font-bold">User name</a><span className="distance-text">|</span><span className="date">2:40</span></span>
                                            <p className="comment-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is </p>
                                        </div>
                                    </li>
                                    <li className="comment-item"><i className="fa fa-user"></i>
                                        <div className="comment-user-block"><span className="comment-info"><a className="user-name font-bold">User name</a><span className="distance-text">|</span><span className="date">2:40</span></span>
                                            <p className="comment-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is </p>
                                        </div>
                                    </li>
                                    <li className="comment-item"><i className="fa fa-user"></i>
                                        <div className="comment-user-block"><span className="comment-info"><a className="user-name font-bold">User name</a><span className="distance-text">|</span><span className="date">2:40</span></span>
                                            <p className="comment-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is </p>
                                        </div>
                                    </li>
                                    <li className="comment-item"><i className="fa fa-user"></i>
                                        <div className="comment-user-block"><span className="comment-info"><a className="user-name font-bold">User name</a><span className="distance-text">|</span><span className="date">2:40</span></span>
                                            <p className="comment-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is </p>
                                        </div>
                                    </li>
                                    <li className="comment-item"><i className="fa fa-user"></i>
                                        <div className="comment-user-block"><span className="comment-info"><a className="user-name font-bold">User name</a><span className="distance-text">|</span><span className="date">2:40</span></span>
                                            <p className="comment-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is </p>
                                        </div>
                                    </li>
                                    <li className="comment-item"><i className="fa fa-user"></i>
                                        <div className="comment-user-block"><span className="comment-info"><a className="user-name font-bold">User name</a><span className="distance-text">|</span><span className="date">2:40</span></span>
                                            <p className="comment-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is </p>
                                        </div>
                                    </li>
                                    <li className="comment-item"><i className="fa fa-user"></i>
                                        <div className="comment-user-block"><span className="comment-info"><a className="user-name font-bold">User name</a><span className="distance-text">|</span><span className="date">2:40</span></span>
                                            <p className="comment-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy Lorem Ipsum is </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="width-40">
                    <div className="trailer-component">
                        <h1 className="uppercase font-bold main-title text-center">TRAILER</h1>
                        <div className="video-component" data-video>
                            <div className="video-wrapper">
                                <div className="background-overlay"></div>
                                <div className="video-show-block" data-youtubeId="50S7CLr7U7s"></div>
                                <div className="video-close d-none"></div>
                                <a className="btn-play" title="Play video" href="javascript:void(0)"><img src="static/images/icons/watch-now-circle.svg" /></a>
                            </div>
                        </div>
                        <div className="detail-box-component scroll-bar">
                            <ul className="detail-list">
                                <li className="detail-item">
                                    <h2 className="entity font-bold">DIRECTOR </h2>
                                    <p className="text">Jack Neo, Randy Ang</p>
                                </li>
                                <li className="detail-item">
                                    <h2 className="entity font-bold">LANGUAGE </h2>
                                    <p className="text">Chinese</p>
                                </li>
                                <li className="detail-item">
                                    <h2 className="entity font-bold">GENRE </h2>
                                    <p className="text">Action,Comedy</p>
                                </li>
                                <li className="detail-item">
                                    <h2 className="entity font-bold">YEAR </h2>
                                    <p className="text">2015</p>
                                </li>
                                <li className="detail-item">
                                    <h2 className="entity font-bold">CAST </h2>
                                    <p className="text">DIRECTOR Daniel Yun, Randy Ang GENRE Documentary,Drama CAST Qi Yuwu 戚玉武,Joanne Peh 白薇秀,James Seah 谢荣辉,Deanna Yusoff,Mike Kasem,Lim Kay Tong 林继堂,Sezairi Sezali</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

ModalVideo.defaultProps = {
    show: true
}

ModalVideo.propTypes = {
    show: PropTypes.bool
};

export default ModalVideo;

