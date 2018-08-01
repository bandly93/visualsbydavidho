export const GET_ALL_FOLDERS = 'GET_ALL_FOLDERS';
export const CURRENT_FOLDER = 'CURRENT_FOLDER';
export const CURRENT_PHOTO_BATCH = 'CURRENT_PHOTOS';
export const CURRENT_PAGE = 'CURRENT_PAGE';

export const updateFolder = data => ({
	type : CURRENT_FOLDER,
	data,
})

export const getAllFolders = data => ({
	type : GET_ALL_FOLDERS,
	data
})

export const updatePhotoBatch = data => ({
	type : CURRENT_PHOTO_BATCH,
	data
});

export const updatePage = data => ({
	type : CURRENT_PAGE,
	data,
})

let initialState = {
	currentFolder : null,
	allFolders : [],
	currentPhotos: null,
	currentPage : 1,
	batchSize : 10,
	tableCount: null,
	
}

export const galleryReducer = (state = initialState,action) => {
	switch(action.type){
		case CURRENT_PAGE:
			return {...state, ...action.data}
		case GET_ALL_FOLDERS:
			return { ...state, ...action.data}
		case CURRENT_FOLDER:
			return {...state, ...action.data}
		case CURRENT_PHOTO_BATCH:
			return {...state, ...action.data}
		default: 
			return state;
	}	
}

export default galleryReducer;
