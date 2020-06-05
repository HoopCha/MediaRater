import {
	POST_START,
	POST_SUCCESS,
	POST_FAILED,
	RETRIEVE_POSTS,
	UPDATING_START,
	UPDATE_SUCCESS,
	UPDATE_FAILED,
	DELETE_START,
	DELETE_SUCCESS,
	DELETE_FAILED
} from "../actions";

const initialState = {
	myLibs: [],
	devlibs: [
        {
            id: "1",
            title: "Excuses",
			answerstrings: ["name", "body part", "type of fluid", "a substance"],
		}
    ],
	addingPost: false,
	deletingPost: false,
	updatingPost: false,
	error: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
		case RETRIEVE_POSTS:
			return {
				...state,
				myLibs: action.payload,
			};
		case POST_START:
			return {
				...state,
				addingPost: true,
			};
		case POST_SUCCESS:
			console.log("post worked!")
			console.log(action.payload)
			return {
				...state,
				myLibs: [...state.myLibs, action.payload],
				addingPost: false,
			};
		case POST_FAILED:
			console.log("post failed")
			console.log(action.payload)
			return {
				...state,
				error: action.payload,
				addingPost: false,
			};
		case UPDATING_START:
			return {
				...state,
				updatingPost: true,
			};
		case UPDATE_SUCCESS:
			console.log("update worked!")
			console.log(action.payload)
			return {
				...state,
				myLibs: state.myLibs.map(lib =>
					lib.devlibid === action.payload.devlibid ? action.payload : lib,
				),
				error: action.payload,
				updatingPost: false
			};
		case UPDATE_FAILED:
		console.log("update failed!")
			return {
				...state,
				error: action.payload,
			};
		case DELETE_START:
			return {
				...state,
				deletingPost: true,
			};
		case DELETE_SUCCESS:
			console.log("delete worked!")
			return {
				...state,
				deletingPost: false,
				myLibs: state.myLibs.filter(lib => lib.id !== action.payload),
			};
		case DELETE_FAILED:
			console.log("delete failed")
			return {
				...state,
			errror: action.payload,
			};
	}
};