import Component from '../Component.js';
import CreatureItem from './CreatureItem.js';

class CreatureList extends Component {

    renderHTML() {
        return /*html*/`
            <ul class="creatures"></ul>
        `;
    }

    onRender(dom) {
        const creatures = this.props.creatures;

        creatures.forEach(creature => {
            const creatureItem = new CreatureItem({ creature });
            const creatureItemDOM = creatureItem.renderDOM();
            dom.appendChild(creatureItemDOM);
        });
    }
}

export default CreatureList;