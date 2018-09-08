
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, colName: 'ethnicity'},
        {id: 2, colName: '2001'},
        {id: 3, colName: '2006'},
        {id: 4, colName: '2013'}
      ]);
    });
};
