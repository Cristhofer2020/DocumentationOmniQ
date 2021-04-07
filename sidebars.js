module.exports = {
  docs: [
    {
      type: 'category',
      label: 'OmniQ Manager',
      items: [
        'login',
        {
          'Usuarios': ['user', 'createUser', 'editUser'],
        },
        {
          'Bot`s': ['bots', 'createrobot', 'nodos'],
        },
        {
          'Campañas': [

            'campaigns',

            'createcamp',
            {
              'Configuracion De Plataformas': ['facebook', 'whatsaap']
            },

            'editcamp'
          ],
        },
        {
          Campos: ['fields'],
        },
        {
          'Plantillas': ['templateList',
            'templateCreate',
            'templatefields',
            {
              'Flujo de las Plantillas': [
                'submit',
                'reject',
                'aprove'
              ]
            },
            'templateListContact'
          ],
        },

      ],
    },
  ],
};
