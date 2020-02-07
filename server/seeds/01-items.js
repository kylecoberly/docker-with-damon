exports.seed = function(knex) {
  return knex('item').del()
    .then(function () {
      return knex('item').insert([
        {id: 1, label: 'Apple'},
        {id: 2, label: 'Banana'},
        {id: 3, label: 'Carrot'}
      ]);
    });
};
