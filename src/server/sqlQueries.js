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

export const selectRowFrom = (table,limit,offset) => {
	return `SELECT * FROM "${table}" LIMIT ${limit} OFFSET ${offset}`
}

export const deleteMaster = (count,table) => {
	return `UPDATE "Masters" SET "tableCount" = "tableCount" - ${count} WHERE "tableName" = '${table}'`

}
export const addMaster = (count,table) => {
	return `UPDATE "Masters" SET "tableCount" = "tableCount" + ${count} WHERE "tableName" = '${table}'`;
}

export const selectFromMaster = (table) => {
	return `SELECT "tableCount" FROM "Masters" WHERE "tableName" = '${table}'`
}

export const deleteFromTable = (table,photoName) => {
	return `DELETE FROM "${table}" WHERE "name" = '${photoName}'`;
}



module.exports = {
	selectColFrom,
	selectAllFrom,
	insertInto,
	selectRowFrom,
	deleteMaster,
	addMaster,
	selectFromMaster,
	deleteFromTable,
}
