import Component from '../Component.js';

class CreatureItem extends Component {
    renderHTML() {
        const creature = this.props.creature;

        return /*html*/`
            <li class="creature-item">
                <div class="info-container">
                    <h2>${creature.title}</h2>
                    <p class="creature-type">${creature.keyword}</p>
                </div>
                <div class="image-container">
                    <img src="${creature.url}" alt="${creature.title} image">
                </div>
                <p class="num-horns">${creature.horns}</p>
                <p class="description">${creature.description}</p>
            </li>
        `;
    }
}

export default CreatureItem;