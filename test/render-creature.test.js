import renderCreatureItem from '../home/render-creature-item.js';


const test = QUnit.test;

QUnit.module('Render Creature Item');

test('renders html from data', assert => {
    // arrange
    const creature = {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'Uniwhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

    const expected = /*html*/`
    <li class="creature-item">
        <div class="info-container">
                <h2>Uniwhal</h2>
                <p class="creature-type">narwhal</p>
        </div>
        <div class="image-container">
                <img src="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" alt="Uniwhal image">
        </div>
        <p class="num-horns">1</p>
        <p class="description">A unicorn and a narwhal nuzzling their horns</p>
    </li>
    `;

    // act
    const html = renderCreatureItem(creature);
    
    // assert
    assert.htmlEqual(html, expected);
});

