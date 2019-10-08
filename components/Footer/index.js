import React from 'react';

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

  render() {
    return (
      <footer>
        <div className="container">
            <ul className="footer-list d-desktop">
                <li className="footer-item"><a className="footer-link" href="#" title="">About Us</a></li>
                <li className="footer-item"><a className="footer-link" href="#" title="">Contact</a></li>
                <li className="footer-item"><a className="footer-link" href="#" title="">Privacy Statement</a></li>
                <li className="footer-item"><a className="footer-link" href="#" title="">Term of Use</a></li>
            </ul>
            <div className="footer-list-mobile d-mobile">
                <a href="#" title=""></a><span className="search-icon icon"><i className="fa fa-search"></i></span><a className="user-name" href="#" data-toggle="modal" data-target=".profile"><span className="user-icon icon"></span><i className="fa fa-user"></i></a>
                <div className="profile modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog centered" role="document">
                        <div className="modal-content">
                            <div className="dialogs-box profile-box"><i className="fa fa-times" data-dismiss="modal" aria-label="Close"></i>
                                <div className="profile-inner">
                                    <div className="profile-image"><img src="static/images/profile/user.png" alt="User" />
                                        <button className="upload-picture">Upload a picture</button>
                                    </div>
                                    <div className="profile-info">
                                        <h2 className="font-bold">John Smith</h2>
                                        <div className="group-item"><span className="phone font-bold">Phone: +32423423643</span><a className="underline" href="#" title="Change phone number">Change phone number</a></div>
                                        <div className="group-item"><span className="password font-bold">Password: *******</span><a className="underline" href="#" title="Change password">Change password</a></div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button className="logout">Log out</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
  }
}

export default Footer;
