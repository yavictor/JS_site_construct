export const model = [
    {type: 'title', value: 'Test Title', options: {
        tag: 'h1',
        styles: 'background: darkred; color: #fff; text-align: center;'
        }},
    {type: 'text', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut cum eveniet, libero maxime nihil numquam rem saepe velit veniam?', options: {
            tag: 'p',
            styles: 'background: darkgreen; color: #orange;'
        }},
    {type: 'textColumns', value: [
            '1 text',
            '2 text',
            '3 text',
            '4 text',
            '5 text',
            '6 text'
        ], options: {
            styles: 'padding: 1 rem;'
        }}
]