// select specific columns from table
export const selectColFrom = (col,table) => {
	return `SELECT ${col.join(',')} FROM ${table}`;
}

// select all from table
export const selectAllFrom = (table) => {
	return `SELECT * FROM "${table}"`;
}

//insert data into table
export const insertInto = (table,values) => {
	return `INSERT INTO ${table} VALUES ${values.join(',')}`;
}

module.exports = {
	selectColFrom,
	selectAllFrom,
	insertInto,
}
