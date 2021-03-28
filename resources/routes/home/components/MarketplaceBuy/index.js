import React, {Component} from 'react';
import {Button} from "antd";
import Widget from "components/Widget";
import {FormattedMessage} from "react-intl";
import AsyncTable from "components/AsyncTable";
import ApiService, {route} from "support/Services/Api";
import UserTableCell from "components/UserTableCell";
import {generatePath, Link} from "react-router-dom";
import menuItemLinks from "containers/utils/menuItemLinks";
import Flag from "components/Flag";
import {handleError, handleSuccess} from "support/utils/promise";
import {upperCase} from "lodash";

class MarketplaceBuy extends Component {
	constructor(props) {
		super(props);

		this.api = new ApiService();

		this.state = {
			location : {}
		}
	}

	componentDidMount() {
		this.fetchIpInfo();
	}

	fetchIpInfo() {
		const {axios, route} = this.api;
		const endpoint = route('ip.info');

		axios.post(endpoint.url())
			.then(response => handleSuccess(response, (location) => {
				this.setState({location});

				if(location.iso_code){
					this.applyFilter({
						country : upperCase(location.iso_code)
					})
				}
			}))
			.catch(error => handleError(error));
	}

	componentWillUnmount() {
		this.api.cancel();
	}

	applyFilter = (filters) => {
		this.table.applyFilter(filters);
	};

	columns = () => {
		return [
			{
				title     : (
					<FormattedMessage
						defaultMessage="Seller"
						id="common.seller"/>
				),
				dataIndex : 'user',
				render    : (user) => (
					<UserTableCell user={user}/>
				)
			},
			{
				title     : (
					<FormattedMessage
						defaultMessage="Coin"
						id="common.coin"/>
				),
				dataIndex : 'coin_name',
			},
			{
				title     : (
					<FormattedMessage
						defaultMessage="Payment"
						id="common.payment"/>
				),
				dataIndex : 'payment_method',
				render    : (paymentMethod, record) => (
					<div style={{whiteSpace : 'nowrap'}}>
						<span className="d-block">
							{paymentMethod.name}
						</span>
						<small>
							{record.label}
						</small>
					</div>

				)
			},
			{
				title  : (
					<FormattedMessage
						defaultMessage="Range"
						id="common.range"/>
				),
				key    : 'range',
				render : (text, record) => (
					<span>
						<span style={{whiteSpace : 'nowrap'}}>
							{record.formatted_min_amount}
						</span>
						<span className="font-weight-semi-bold mx-2">
							<FormattedMessage
								defaultMessage="To"
								id="common.to"/>
						</span>
						<span style={{whiteSpace : 'nowrap'}}>
							{record.formatted_real_max_amount}
						</span>
					</span>
				)
			},
			{
				title     : (
					<FormattedMessage
						defaultMessage="Rate"
						id="common.rate"/>
				),
				dataIndex : 'formatted_rate',
			},
			{
				title  : (
					<FormattedMessage
						defaultMessage="Action"
						id="common.action"/>
				),
				key    : 'action',
				fixed  : 'right',
				render : (text, record) => {
					const path = generatePath(menuItemLinks['marketplace.offer'].path, {
						slug : record.slug
					});

					return (
						<Link to={path}>
							<Button type="default"
							        className="cp-btn-success"
							        size="small">
								<span>
									<FormattedMessage
										defaultMessage="Buy"
										id="common.buy"/>
								</span>
							</Button>
						</Link>
					)
				},
			},
		];
	};

	render() {
		const {location} = this.state;
		const endpoint = route("marketplace.buy-coin.table");

		return (
			<Widget styleName="cp-card-table full-grid-item scroll"
			        title={
				        <FormattedMessage
					        defaultMessage="Buy Offers"
					        id="home.widget.marketplace_buy_offers"/>
			        }
			        extra={location && (
				        <Flag code={location.iso_code}/>
			        )}>
				<AsyncTable
					columns={this.columns()}
					ref={(table) => this.table = table}
					route={endpoint.url()}
					size="middle"
					scroll={{x : true, y : false}}
					className="mt-1"/>
			</Widget>
		);
	}
}

export default MarketplaceBuy;