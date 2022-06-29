export default {
    type: 'document',
    name: 'catagory',
    fields: [
      {
        name: 'kind',
        type: 'string',
        options: {list: ['SmartPhone', 'TV', 'laptop','Apparels','Trouser','Shoes','Fiction','Non Fiction','Educational']},
      },
      {
        name: 'SmartPhone',
        type: 'object',
        hidden: ({parent}) => !(parent?.kind === 'SmartPhone'),
        fields: [ 
            {
            name : 'smartphoneSKU',
            title: 'smartphoneSKU',
            type : 'smartphone'
            }
        ],
      },
      {
        name: 'Shirt',
        type: 'object',
        hidden: ({parent}) => !(parent?.kind === 'Apparels'),
        fields: [ 
            {
            name : 'shirtSKU',
            title: 'shirtSKU',
            type : 'Apparels'
            }
        ],
      },
    ],
   }
   