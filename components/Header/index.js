import React from 'react';
import ModalVideo from '~/components/Modal/Video';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import moment from 'moment';
import Router, { withRouter } from 'next/router';
import { loginRequest, logout } from '~/actions/login/loginActions';
import { singupRequest, singupLogout } from '~/actions/signup/signupActions';
import store from '~/store';

class Header extends React.Component {
    static async getInitialProps({ Component, router, ctx}) {
        let pageProps = {};
        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps({ ctx});
        }
        return { 
          pageProps,
        };
      }
    constructor(props) {
        super(props);
        this.state = {
                show: false,
                open: false,
                username: '',
                password: '',
                phone: '',
            };
		}
		
		handleClick = () => {
			const { show } = this.state;
			this.setState({
				show: !show,
			})
		}

		handleClickDialog = () => {
			const { open } = this.state;
			this.setState({
				open: !open,
			})
        }
        
        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }

  render() {
    const { show, open, username, password, phone } = this.state;
    const {
        loginRequest,
        singupRequest,
        singupLogout,
        logout,
        login,
        signup,
    } = this.props;
    const loginSuccess = login && login.data && login.data.data && login.success;
    const signupSuccess = signup && signup.data && signup.success;
    return (
      <React.Fragment>
         <header data-menu-scroll data-image-scroll="static/images/logo/logo-white.svg">
            <div className="container">
                <nav>
                    <div className="nav-left">
                        <a className="logo-link" href="#" title="Logo"><img className="logo-image d-desktop" src="static/images/logo/logo.svg" alt="Logo Play" /><img className="logo-image d-mobile" src="static/images/logo/logo-words-white.svg" alt="Logo Play" /></a>
                        <div className="dropdown"><a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Genres</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown"><a className="dropdown-item" href="#">Comedy</a><a className="dropdown-item" href="#">Lifestyle</a><a className="dropdown-item" href="#">Infotainment</a><a className="dropdown-item" href="#">Variety Shows</a><a className="dropdown-item" href="#">Short Films</a><a className="dropdown-item" href="#">Talks and Seminas </a></div>
                        </div><a className="favourits" href="#" title="">My favourits</a>
                    </div>
                    <div className="nav-right">
                        <form className="form-inline form-search"><i className="fa fa-search" aria-hidden="true"></i>
                            <input className="form-control" type="text" placeholder="Search titles, actors, genres…" aria-label="Search" />
                        </form><span className="dialog-btn icon" href="#" data-toggle="modal" data-target=".dialog-popup" data-dialog-btn>What is Mplay?</span><span className="learn-more-btn d-mobile" data-load-more-btn>learn more</span>
                        {
                            (loginSuccess || signupSuccess) ? (
                                <React.Fragment>
                                    {
                                        loginSuccess ? (
                                            <a class="account d-desktop" href="#" data-toggle="modal" data-target=".profile-popup" data-menu-account><img className="image-account" src="static/images/profile/account.png" alt="User" /><span className="text-account" >{login.data.data.username}</span></a>
                                        ) : (
                                            <a class="account d-desktop" href="#" data-toggle="modal" data-target=".profile-popup" data-menu-account><img className="image-account" src="static/images/profile/account.png" alt="User" /><span className="text-account" >{signup.data.username}</span></a>
                                        )
                                    }
                                </React.Fragment>
                            ) : (
                                <a className="login d-desktop" href="#" data-toggle="modal" data-target=".login-popup">login</a>
                            )
                        }
                    </div>
                </nav>
            </div>
        </header>
        <div className="sign-up-popup modal fade" tabindex="-2" role="dialog" aria-labelledby="exampleModalLabel2" aria-hidden="true">
          <div className="modal-dialog centered" role="document">
              <div className="modal-content">
                  <div className="dialogs-box signup-box-component">
                      <div className="sign-up-header modal-header dialog-header">
                          <button type="button" data-dismiss="modal"> <span className="icon-x">×</span><span className="text-close">CLOSE</span></button>
                          <h1 className="title text-center font-bold">Sign up</h1>
                          <p className="text text-center">Create a free account to save your favourite shows and to leave ratings a comments </p>
                      </div>
                      <form className="form-signup dialog-form">
                          <div className="group-item">
                              <lable className="lable username-label">User-name</lable>
                              <input type="text" name="username" value={this.state.username} placeholder="John Smith"  onChange={e => this.handleChange(e)}/>
                          </div>
                          <div className="group-item">
                              <lable className="lable mobile-phone-label">Mobile Phone</lable>
                              <input type="number" name="phone"  value={this.state.phone} onChange={e => this.handleChange(e)} placeholder="+38912361829" />
                          </div>
                          <div className="group-item">
                              <lable className="lable password-label">Password</lable>
                              <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={e => this.handleChange(e)} />
                          </div>
                          <div className="group-item">
                              <lable className="lable password-label">Confirm Password</lable>
                              <input type="password" placeholder="Password" />
                          </div>
                          <div className="group-item text-center">
                              <a className="btn-submit" href="#" data-signup-btn onClick={() => {singupRequest(username,phone,password)}}><img src="static/images/illustrations/sign-up.svg" alt="Sign up" /></a>
                              <p className="form-text text-exits-account text-center">Have an account? <a className="login-link underline" href="#" title="" data-login>Login instead </a></p>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
        </div>

        <div className="login-popup modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog centered" role="document">
              <div className="modal-content">
                  <div className="dialogs-box login-box-component">
                      <div className="login-header dialog-header modal-header">
                          <button type="button" data-dismiss="modal"> <span className="icon-x">×</span><span className="text-close">CLOSE</span></button>
                          <h1 className="title text-center font-bold">Login</h1>
                      </div>
                      <form className="form-login dialog-form">
                          <div className="group-item">
                              <lable className="lable mobile-phone-label">Mobile Phone</lable>
                              <input name="phone" type="number" placeholder="+38912361829" value={this.state.phone} onChange={e => this.handleChange(e)}/>
                          </div>
                          <div className="delimiter"><span className="line line-left"></span><span className="text-or">or</span><span className="line line-right"></span></div>
                          <div className="group-item">
                              <lable className="lable username-label">User-name</lable>
                              <input name="username" type="text" placeholder="John Smith" value={this.state.username} onChange={e => this.handleChange(e)}/>
                          </div>
                          <div className="group-item">
                              <lable className="lable password-label">Password</lable>
                              <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={e => this.handleChange(e)}/>
                          </div>
                          <div className="group-item text-center">
                              <a className="btn-submit" href="#" data-login-btn onClick={() => {loginRequest(username, password)}}><img src="static/images/illustrations/login.svg" alt="login" /></a>
                              <p className="form-text text-exits-account text-center">New to mPlay? <a className="signup-link underline" onClick={this.handleClickDialog} href="#" data-sign-up>Signup instead</a></p>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          {/* {
            login.success == true && (
                <div className="alert alert-success" role="alert">
                    You login success!!!
                </div>
            )
        } */}
        </div>


        <div className="confirmation-popup modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog centered" role="document">
            <div className="modal-content">
              <div className="dialogs-box code-box">
                <div className="confirmation-header dialog-header modal-header">
                  <h1 className="title text-center">Comfirmation Code</h1>
                </div>
                <form className="form-confirmation">
                  <div className="group-item">
                    <lable className="lable enter-code-label">Enter code</lable>
                    <div className="enter-code">
                      <input type="text" placeholder="7620G-2" /><a className="login-btn" href="#" data-signup ><img src="static/images/illustrations/login.svg" alt="login" /></a>
                    </div>
                  </div>
                  <p className="text-code-opt"><span>OTP code send to </span><span className="font-bold">+8342424535427</span></p>
                  <p className="resend-block"><a className="resend-btn" href="#" title="">Resend</a><span className="text-time">in 0:59</span></p>
                  <p className="without-link"><a className="underline" href="#" title="" data-login-from-code>Continue without logining in</a></p>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="dialog-popup modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog centered" role="document">
              <div className="modal-header d-desktop">
                  <h4 className="modal-title text-center font-bold">What is mPlay?</h4>
                  <button type="button" data-dismiss="modal"> <span className="icon-x">×</span><span className="text-close">CLOSE</span></button>
              </div>
              <div className="modal-content">
                  <div className="dialog-group" data-slide-dialog>
                      <div className="instruction-dialog-next-block" data-dialog-next>
                          <div className="item-dialog item-dialog-1">
                              <div className="item-dialog-content">
                                  <h1 className="title">MPLAY is a free video streaming service</h1>
                                  <p className="text">Featuring local Singapore series, exclusive videos and short films</p>
                              </div>
                              <div className="img-wrapper"><img className="img-responsive" src="static/images/illustrations/dialog-1.svg" alt="Dialog instruction" /></div>
                          </div>
                          <div className="item-dialog item-dialog-2">
                              <div className="img-wrapper"><img className="img-responsive" src="static/images/illustrations/dialog-2.svg" alt="Dialog instruction" /></div>
                              <div className="item-dialog-content">
                                  <h1 className="title">Tune in to LiveTv for brand new fresh content </h1>
                                  <p className="text">Be the among the first to watch live-streamed exclusive content</p>
                              </div>
                          </div>
                          <div className="item-dialog item-dialog-3">
                              <div className="img-wrapper-left"><img className="img-responsive" src="static/images/illustrations/dialog-4.svg" alt="Dialog instruction" /></div>
                              <div className="img-wrapper-right"><img className="img-responsive" src="static/images/illustrations/dialog-3.svg" alt="Dialog instruction" /></div>
                              <div className="item-dialog-content">
                                  <h1 className="title">Create an account to keep track of your favourite shows Join the community to rate Et comment </h1>
                                  <p className="text">Join the community to rate Et comment</p>
                              </div>
                              <div className="group-item text-center">
                                  <a className="btn-submit" data-sign-from-instruction><img onClick={this.handleClickDialog} className="image-sign-up" src="static/images/illustrations/sign-up.svg" alt="Sign up" /></a><a className="continue-link underline" href="#" title="">Continue without signup</a></div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    <div className="profile-popup modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog centered" role="document">
            <div className="modal-header">
                <h4 className="modal-title text-center font-bold d-desktop">Account Settings</h4>
                <button type="button" data-dismiss="modal"> <span className="icon-x">×</span><span className="text-close">CLOSE</span></button>
            </div>
            <div className="modal-content">
                <div className="dialogs-box profile-box">
                    <div className="profile-inner">
                        <div className="profile-image"><img src="static/images/profile/account.png" alt="User" />
                            <button className="upload-picture">Upload Photo</button>
                        </div>
                        <div className="profile-info">
                            <h2 className="font-bold">{loginSuccess ? login.data.data.display_name : ''}{signupSuccess ? signup.data.display_name : ''}</h2>
                            <div className="group-item">
                                <h3 className="phone font-bold">Phone: {loginSuccess ? login.data.data.mobile_number : '' }{signupSuccess ? signup.data.mobile_number : ''}</h3><a className="underline" href="#" title="Change phone number">Change phone number</a>
                            </div>
                            <div className="group-item">
                                <h3 className="password font-bold">Password: *******</h3><a className="underline" href="#" title="Change password">Change password</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="logout" onClick={() => {logout(); singupLogout()}}>Log out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div className="banner-group">
          <div className="banner-block">
              <div className="banner-overlay-top"></div>
              <div className="banner-overlay-bottom"></div>
              <div className="container"></div>
              <div className="banner-content">
                  <div className="banner-content-inner"><span className="banner-subtitle">Drama • 2015</span>
                      <h1 className="banner-title">3688: Interview with Jerry Huang Drama</h1>
                      <p className="banner-desc">Xia Fei Fei is a 38-year-old parking attendant, locally known as "summon auntie", or "Feng Fei Fei", who has often dreamed of becoming a singer like her idol, </p>
                  </div>
                  <ul className="banner-list-link">
                      <li className="watch-now">
                        <a className="watch-now-link" href="javascript:void(0)"><img className="d-desktop" src="static/images/icons/watch-now.svg" /><img className="d-mobile" src="static/images/icons/play icon.svg" /><span className="d-mobile">Watch now</span></a>
                    </li>
                    <li className="add-to-favourist">
                        <a className="add-to-favouristlink" href="javascript:void(0)"><img className="d-desktop" src="static/images/icons/add-to-favourites.svg" /><img className="d-mobile" src="static/images/icons/favourite-icon.svg" /><span className="d-mobile">Add to favourist</span></a>
                    </li>
                </ul>
            </div>
            <a className="more-info-block more-info-link" href="javascript:void(0)" data-more-info-btn><img className="more-image d-desktop" src="static/images/icons/more-info.svg" /><span className="more-info-btn more-image d-mobile" href="#" data-toggle="modal" data-target=".more-info-of-banner-popup"> MORE INFO</span><img className="less-image" src="static/images/icons/less-info.svg" /></a>
          </div>
          <ModalVideo show={show} />
        </div>
        <span className="countdown-component" data-countdown-custom><i className="fa fa-chevron-down"></i>
              <div className="countdown-component-inner"><span className="countdown-subtitle font-bold">MliveMliveNow</span>
        <p className="countdown-title">
            Now showing: <span className="font-bold underline">Walking Man</span></p><span className="countdown-wrapper"><span className="countdown-item item-hour"><span className="countdown-item-times"><span className="number countdown-hour"><span className="hour-1 number-1">0</span><span className="hour-2 number-2">1</span></span><span className="text">HRS</span></span>
        </span><span className="countdown-item"><span className="countdown-item-times"><span className="number countdown-minute"><span className="minute-1 number-1">1</span><span className="minute-2 number-2">7</span></span><span className="text">MINS</span></span>
        </span><span className="countdown-item"><span className="countdown-item-times"><span className="number countdown-second"><span className="second-1 number-1">1</span><span className="second-2 number-2">7</span></span><span className="text">SECS</span></span>
        </span>
        </span>
</div>
</span>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
    return {
       login: state.login,
       signup: state.signup,
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => ({
    loginRequest: (username, password) => dispatch(loginRequest(username, password)),
    logout: () => dispatch(logout()),
    singupRequest: (username, phone, password) => dispatch(singupRequest(username, phone, password)),
    singupLogout: () => dispatch(singupLogout()),
  
  });

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));
// export default Header;