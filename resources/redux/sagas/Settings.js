import * as Actions from "redux/actions/Settings";
import {all, call, fork, put, takeLatest} from 'redux-saga/effects';
import {axios, route} from "support/Services/Api";
import {handleError} from "support/utils/promise";

// Locale
function fetchLocaleData() {
	return axios.post(route('locale.get').url());
}

function setLocale(locale) {
	return axios.post(route('locale.set').url(), {locale});
}

function* watchFetchLocaleData() {
	yield takeLatest(Actions.FETCH_LOCALE_DATA, function* () {
		try {
			const response = yield call(fetchLocaleData);
			let data = response.data;

			if (typeof data === 'object' && data.hasOwnProperty('locale')) {
				// yield call(addLocaleData, data.locale);
				yield put(Actions.setLocaleData(data));
			}
		} catch (error) {
			handleError(error);
		}
	})
}

function* watchSetLocale() {
	yield takeLatest(Actions.SET_LOCALE, function* ({payload}) {
		try {
			let data = payload;

			if (typeof data !== 'object') {
				const response = yield call(setLocale, data);
				data = response.data;
			}

			if (typeof data === 'object' && data.hasOwnProperty('locale')) {
				// yield call(addLocaleData, data.locale);
				yield put(Actions.setLocaleData(data));
			}
		} catch (error) {
			handleError(error);
		}
	});
}

export default function* rootSaga() {
	yield all([
		fork(watchSetLocale),
		fork(watchFetchLocaleData),
	]);
}
