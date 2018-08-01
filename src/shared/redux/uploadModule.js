export const UPLOAD_FOLDER_NAME = 'UPLOAD_FOLDER_NAME';
export const UPLOAD_FILES_NAME = 'UPLOAD_FILES_NAME';

export const uploadFolder = (data) => ({
	type : UPLOAD_FOLDER_NAME,
	data,
});

export const uploadFiles = (data) => ({
	type : UPLOAD_FILES_NAME,
	data,
});

export const uploadReducer = (state = initialState , action) => {
	switch(action.type){
		case UPLOAD_FOLDER_NAME:
			return {...state, ...action.data}
		case UPLOAD_FILES_NAME:
			return {...state, ...action.data}
		default:
			return state;
	}
}

let initialState = {
	folder : '',
	files : null,
}

export default uploadReducer;
