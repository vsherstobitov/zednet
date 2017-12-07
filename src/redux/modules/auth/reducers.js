import { handleActions } from 'redux-actions';
import  { attachSession, detachSession } from './actions';

const defaultState = {
	isAuthorized: false
};

export default handleActions(
	{
		[attachSession]: (state, { payload }) => {
			console.log(state, payload);
			const { userData, token } = payload;
			return {
				...state,
				isAuthorized: true,
				userData,
				token
			};
		},
		[detachSession]: () => defaultState
	},
	defaultState
);
