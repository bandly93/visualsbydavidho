export const GET_ALL_FOLDERS = 'GET_ALL_FOLDERS';
export const CURRENT_FOLDER = 'GET_FOLDER';
export const CURRENT_PHOTOS = 'CURRENT_PHOTOS';

export const updateFolder = data => ({
	type : CURRENT_FOLDER,
	data,
})

export const getAllFolders = data => ({
	type : GET_ALL_FOLDERS,
	data
})

export const currentPhotos = data => ({
	type : CURRENT_PHOTOS,
	data
});

let initialState = {
	currentFolder : null,
	allFolders : [],
	currentPhotos: null,
}


export const galleryReducer = (state = initialState,action) => {
	switch(action.type){
		case GET_ALL_FOLDERS:
			return { ...state, ...action.data}
		case CURRENT_FOLDER:
			return {...state, ...action.data}
		case CURRENT_PHOTOS:
			return {...state, ...action.data}
		default: 
			return state;
	}	
}

export default galleryReducer;
