export const UPLOAD_FOLDER_NAME = 'UPLOAD_FOLDER_NAME';
export const UPLOAD_FILES_NAME = 'UPLOAD_FILES_NAME';
export const TOGGLE_IS_COMPRESSING = 'TOGGLE_IS_COMPRESSING';

export const uploadFolder = (data) => ({
	type : UPLOAD_FOLDER_NAME,
	data,
});

export const uploadFiles = (data) => ({
	type : UPLOAD_FILES_NAME,
	data,
});

export const toggleIsCompressing = (data) => ({
	type : TOGGLE_IS_COMPRESSING,
	data,
})

export const uploadReducer = (state = initialState , action) => {
	switch(action.type){
		case UPLOAD_FOLDER_NAME:
			return {...state, ...action.data}
		case UPLOAD_FILES_NAME:
			return {...state, ...{files:state.files.concat(action.data)}}
		case TOGGLE_IS_COMPRESSING:
			return {...state, ...action.data}
		default:
			return state;
	}
}

let initialState = {
	folder : '',
	files : [],
	isCompressing : false,
}

export default uploadReducer;
