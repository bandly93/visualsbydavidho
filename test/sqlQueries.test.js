import {selectAllFrom, selectColFrom, insertInto,selectRowFrom, addMaster , deleteMaster} from '../src/server/sqlQueries.js';

test('query should return a statement with table name',() => {
	expect(selectAllFrom("testing")).toBe('SELECT * FROM testing')
});

test('query with a array and table',() => {
	expect(selectColFrom(['person','food'],'testing')).toBe('SELECT person,food FROM testing');
});

test('query with a array and table',() => {
	expect(selectColFrom(['person'],'testing')).toBe('SELECT person FROM testing');
});

test('return insert string query',() => {
	expect(insertInto('friends',['Steven','Le'])).toBe('INSERT INTO friends VALUES Steven,Le');
});

test('return a sql injection query',() => {
	expect(selectAllFrom('testing WHERE id = 0')).toBe('SELECT * FROM testing WHERE id = 0')
})


test('return a sql query', () => {
	expect(selectRowFrom('Example',10,5)).toBe('SELECT * FROM Example LIMIT 10 OFFSET 5')
})


test ('testing addMaster', () => {

	expect(addMaster(5,'Example')).toBe('UPDATE "MASTER" SET "tableCount" + 5 WHERE "tableName" = Example')
})
