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
          Bots: ['bots', 'createrobot', 'nodos'],
        },
        {
          Campañas: ['campaigns', 'createcamp', 'editcamp'],
        },
        {
          Campos: ['fields'],
        },
        {
          Plantillas: ['templateList', 'templateCreate', 'flujoHSM', 'templateListContact'],
        },

      ],
    },
  ],
};
