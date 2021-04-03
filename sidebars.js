module.exports = {
  docs: [
    {
      type: 'category',
      label: 'OmniQ Manager',
      items: [
        'login',
        {
          User: ['user', 'createUser', 'editUser'],
        },
        {
          Bots: ['bots', 'createrobot',],
        },
        {
          Campañas: ['campaigns', 'createcamp', 'editcamp'],
        },
        {
          Campos: ['fields'],
        },
        {
          Plantillas: ['templateList', 'templateCreate', 'templateListContact'],
        },

      ],
    },
  ],
};
