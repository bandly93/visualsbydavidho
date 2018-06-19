// select specific columns from table
export const selectColFrom = (col,table) => {
	return `SELECT ${col.join(',')} FROM ${table}`;
}

// select all from table
export const selectAllFrom = (table) => {
	return `SELECT * FROM ${table}`;
}

module.exports = {
	selectColFrom,
	selectAllFrom,
}
