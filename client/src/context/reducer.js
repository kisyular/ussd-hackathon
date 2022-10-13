import {
	DISPLAY_ALERT,
	CLEAR_ALERT,
	// SETUP_USER_BEGIN,
	// SETUP_USER_SUCCESS,
	// SETUP_USER_ERROR,
	REGISTER_USER_BEGIN,
	REGISTER_USER_SUCCESS,
	REGISTER_USER_ERROR,
} from './actions'

const reducer = (state, action) => {
	if (action.type === DISPLAY_ALERT) {
		return {
			...state,
			showAlert: true,
			alertType: 'danger',
			alertText: 'Please provide all values!',
		}
	}
	if (action.type === CLEAR_ALERT) {
		return {
			...state,
			showAlert: false,
			alertType: '',
			alertText: '',
		}
	}
	if (action.type === REGISTER_USER_BEGIN) {
		return { ...state, isLoading: true }
	}
	if (action.type === REGISTER_USER_SUCCESS) {
		return {
			...state,
			user: action.payload.admin,
			token: action.payload.token,
			userLocation: action.payload.location,
			isLoading: false,
			showAlert: true,
			alertType: 'success',
			alertText: 'User Created! Redirecting...',
		}
	}
	if (action.type === REGISTER_USER_ERROR) {
		return {
			...state,
			isLoading: false,
			showAlert: true,
			alertType: 'danger',
			alertText: action.payload.msg,
		}
	}
}

export default reducer