import image from './assets/image.png'
import {TitleBlock, ImageBlock, TextColumnsBlock, TextBlock} from './classes/blocks'

export const model = [
    new TitleBlock( 'Site constructor on pure JS', {
        tag: 'h1',
        styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
    }),
    new ImageBlock(image,  {
        alt: 'my image',
        tag: 'img',
        styles: 'padding: 2rem 0; display: flex; justify-content: center',
        imageStyles: 'width: 500px; height: auto;'
    }),
    new TextColumnsBlock( [
        '1 text',
        '2 text',
        '3 text',
        '4 text',
        '5 text',
        '6 text'
    ], {
        alt: 'my image',
        tag: 'img',
        styles: 'padding: 2rem 0; display: flex; justify-content: center',
        imageStyles: 'width: 500px; height: auto;'
    } ),
    new TextBlock('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut cum eveniet, libero maxime nihil numquam rem saepe velit veniam?',
        {
            tag: 'p',
            styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
        })

    // {type: 'title', value: 'Test Title', options: {
    //     tag: 'h1',
    //     styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
    //     }},
    // {type: 'text', value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aut cum eveniet, libero maxime nihil numquam rem saepe velit veniam?', options: {
    //         tag: 'p',
    //         styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem;'
    // }},
    // {type: 'textColumns', value: [
    //         '1 text',
    //         '2 text',
    //         '3 text',
    //         '4 text',
    //         '5 text',
    //         '6 text'
    //     ], options: {
    //         styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
    //     }},
    // {type: 'image', src: image, options: {
    //         alt: 'my image',
    //         tag: 'img',
    //         styles: 'padding: 2rem 0; display: flex; justify-content: center',
    //         imageStyles: 'width: 500px; height: auto;'
    //     }}
]