import {selectAllFrom, selectColFrom, insertInto} from '../src/server/sqlQueries.js';

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
