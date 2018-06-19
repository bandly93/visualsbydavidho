import {selectAllFrom, selectColFrom} from '../src/server/sqlQueries.js';

test('query should return a statement with table name',() => {
	expect(selectAllFrom("testing")).toBe('SELECT * FROM testing')
});

test('query with a array and table',() => {
	expect(selectColFrom(['person','food'],'testing')).toBe('SELECT person,food FROM testing');
});

test('query with a array and table',() => {
	expect(selectColFrom(['person'],'testing')).toBe('SELECT person FROM testing');
});


