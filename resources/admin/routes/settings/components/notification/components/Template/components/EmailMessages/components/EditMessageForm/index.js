import React, {Component} from 'react';
import {Button, Divider, Form, Input} from "antd";
import {isEmpty} from "lodash";
import {pipe} from "admin/support/utils/common";
import formHelper from "admin/support/Helpers/Form";
import {defineMessages, FormattedMessage} from "react-intl";
import Editor from "admin/components/Editor";
import ApiService from "admin/support/Services/Api";
import {handleFormError, handleFormSuccess} from "admin/support/utils/promise";

const messages = defineMessages({
	successful : {
		defaultMessage : "Email message updated successfully.",
		id             : "admin.notification.updated_email_message_successfully"
	},
});

class EditMessageForm extends Component {
	constructor(props) {
		super(props);

		this.api = new ApiService();

		this.state = {
			loading : false
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const {form, intl, template} = this.props;
		const {axios, route} = this.api;

		form.validateFields((errors, values) => {
			if (isEmpty(errors)) {
				const endpoint = route('admin.settings.notification.templates.update-email-message', {
					template : template
				});

				axios.post(endpoint.url(), values)
					.then(response => handleFormSuccess(response, form, (data) => {
						this.setState({loading : false});
						this.triggerSuccess(data)
					}, intl.formatMessage(messages.successful)))
					.catch(error => handleFormError(error, form, values, () => {
						this.setState({loading : false});
					}));

				this.setState({loading : true});
			}
		});
	};

	triggerSuccess(data) {
		const {onSuccess} = this.props;
		if (typeof onSuccess === "function") {
			return onSuccess(data);
		}
	}

	componentWillUnmount() {
		this.api.cancel()
	}

	render() {
		const {message, form} = this.props;
		const localeData = message.locale_data;
		const {loading} = this.state;
		const {getFieldDecorator} = form;

		return (
			<Form onSubmit={this.handleSubmit}>
				<Divider orientation="left">
					{!isEmpty(localeData) && localeData.name}
				</Divider>

				<Form.Item labelAlign="left"
				           label={
					           <FormattedMessage
						           defaultMessage="Subject"
						           id="admin.notification.subject"/>
				           }>
					{getFieldDecorator("subject", {
						initialValue : message.subject,
						rules        : [{required : true}],
					})(<Input/>)}
				</Form.Item>

				<Form.Item labelAlign="left"
				           label={
					           <FormattedMessage
						           defaultMessage="Body"
						           id="admin.notification.body"/>
				           }>
					{getFieldDecorator("body", {
						initialValue : message.body,
						rules        : [{required : true}],
					})(<Editor/>)}
				</Form.Item>

				<Form.Item className="d-none">
					{getFieldDecorator("locale", {
						initialValue : message.locale,
						rules        : [{required : true}],
					})(<Input/>)}
				</Form.Item>

				<Form.Item>
					<Button type="primary" icon="save"
					        htmlType="submit" loading={loading}
					        shape="round">
						<span>
							<FormattedMessage
								defaultMessage="Submit"
								id="common.submit"/>
						</span>
					</Button>
				</Form.Item>
			</Form>
		);
	}
}

export default pipe(
	formHelper(),
)(EditMessageForm);