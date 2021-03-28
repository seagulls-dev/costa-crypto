import React, {Component} from 'react';
import UserAvatar from "../UserAvatar";
import UserRating from "../UserRating";
import Flag from "../Flag";
import millify from "millify";

class UserTableCell extends Component {
	render() {
		const {user, showRatingsCount} = this.props;
		return (
			<div className="cp-user-cell d-flex align-items-center">
				<UserAvatar user={user}/>
				<div className="ml-2">
					<div className="d-flex">
						<div className="text-truncate d-inline-block mr-2">
							<a href={`/profile/${user.name}`}>{user.name}</a>
						</div>
						{user.location && (
							<Flag code={user.location.iso_code}/>
						)}
					</div>
					<div className="d-flex align-items-center">
						<UserRating value={user.average_marketplace_rating}/>
						<span className="ml-2 mt-1">
							({millify(user.total_marketplace_rating)})
						</span>
					</div>
				</div>
			</div>
		);
	}
}

export default UserTableCell;