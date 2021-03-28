import React, {Component} from "react";
import {connect} from "react-redux";
import {Dropdown, Menu} from "antd";
import {defineMessages, FormattedMessage, injectIntl} from "react-intl";
import UserAvatar from "components/UserAvatar";
import {setAuthUser} from "redux/actions/Auth";
import Auth from "support/Auth";
import ApiService from "support/Services/Api";
import {handleSuccess} from "support/utils/promise";
import {pipe} from "support/utils/common";
import {generatePath, Link, withRouter} from "react-router-dom";
import menuItemLinks from "containers/utils/menuItemLinks";

const messages = defineMessages({
	logoutSuccessful : {
		defaultMessage : "Logout Successful.",
		id             : "auth.logout_successful"
	}
});

class UserMenu extends Component {
	constructor(props) {
		super(props);

		this.api = new ApiService();
	}

	handleSignOut = () => {
		const {axios, route} = this.api;
		const {intl} = this.props;

		axios.post(route('auth.logout').url())
			.then(response => handleSuccess(response, (data) => {
				window.location.replace('/');
			}, intl.formatMessage(messages.logoutSuccessful)));
	};

	componentWillUnmount() {
		this.api.cancel();
	}

	getMenuOptions = (user) => {
		return (
			<Menu>
				<Menu.Item key="0">
					<Link to={generatePath(menuItemLinks['profile'].path, {
						name : user.name
					})}>
						<i className="la la-user"/>
						<span className="ml-1">
							<FormattedMessage
								defaultMessage="Profile"
								id="common.profile"/>
						</span>
					</Link>
				</Menu.Item>

				<Menu.Item key="1">
					<Link to={generatePath(menuItemLinks['profile.settings'].path, {
						name : user.name
					})}>
						<i className="la la-cog"/>
						<span className="ml-1">
							<FormattedMessage
								defaultMessage="Settings"
								id="common.settings"/>
						</span>
					</Link>
				</Menu.Item>

				<Menu.Divider/>

				<Menu.Item key="3"
				           onClick={this.handleSignOut}>
					<i className="la la-power-off"/>
					<span className="ml-1">
						<FormattedMessage
							defaultMessage="Logout"
							id="common.logout"/>
					</span>
				</Menu.Item>
			</Menu>
		);
	};

	render() {
		const {auth, theme} = this.props;

		return (
			<React.Fragment>
				{!auth.check() ? (
					<UserAvatar theme={theme}
					            className="cp-pointer"
					            size={40}/>
				) : (
					<Dropdown placement="bottomRight"
					          trigger={['click']}
					          overlay={this.getMenuOptions(auth.user)}
					          disabled={!auth.check()}>
						<UserAvatar theme={theme} size={40}
						            className="cp-pointer"
						            user={auth.user}/>
					</Dropdown>
				)}
			</React.Fragment>
		)
	}
}

UserMenu.defaultProps = {
	theme : 'light',
};

const mapStateToProps = ({
	auth
}) => ({
	auth : new Auth(auth)
});

export default pipe(
	injectIntl,
	connect(
		mapStateToProps,
		{setAuthUser}
	),
	withRouter
)(UserMenu);
