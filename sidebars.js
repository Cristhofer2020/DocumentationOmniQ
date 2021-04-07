module.exports = {
  docs: [
    {
      type: 'category',
      label: 'OmniQ Manager',
      items: [
        'login',
        {
          'Administracion de usuarios': ['user', 'createUser', 'editUser'],
        },
        {
          'Manejo de los Bot`s': ['bots', 'createrobot', 'nodos'],
        },
        {
          'Manejo de las Campañas': [

            'campaigns',

            'createcamp',
            {
              'Configuracion De plataformas': ['facebook', 'whatsaap']
            },

            'editcamp'
          ],
        },
        {
          Campos: ['fields'],
        },
        {
          'Administracion de las plantillas': ['templateList',
            'templateCreate',
            {
              'Flujo de las plantillas': [
                'submit',
                'reject',
                'aprove'
              ]
            },
            'templatefields',
            'templateListContact'
          ],
        },

      ],
    },
  ],
};
