import Component from '../Component.js';
import Header from './Header.js';
import CreatureList from './CreatureList.js';
import FilterCreatures from './FilterCreatures.js';
import creatures from '../data/images.js';

class App extends Component {

    onRender(dom) {
        const header = new Header({});
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const creatureList = new CreatureList({ creatures });
        const creatureListDOM = creatureList.renderDOM();

        const listSection = dom.querySelector('.list-section');
        listSection.appendChild(creatureListDOM);


        const filterCreatures = new FilterCreatures({
            creatures: creatures,
            
            onFilter: ({ 
                keywordFilterValue,
                hornsFilterValue }) => {
        
                let filteredCreatures;
                if (!keywordFilterValue && !hornsFilterValue) {
                    filteredCreatures = creatures;
                } else {
                    filteredCreatures = creatures.filter(creature => {

                        const filterHornNumber = Number(hornsFilterValue);
                        let keywordBoolean = false; 
                        let hornsBoolean = false; 

                        if (keywordFilterValue) {
                            keywordBoolean = (creature.keyword === keywordFilterValue); 
                        } else {
                            keywordBoolean = true; 
                        }

                        if (hornsFilterValue) {
                            hornsBoolean = (creature.horns === filterHornNumber); 
                        } else {
                            hornsBoolean = true; 
                        }
                        return keywordBoolean && hornsBoolean; 

                            
                    });
                }

                const updateProps = { creatures: filteredCreatures };
                creatureList.update(updateProps);
            }
        });

        const filterCreatureDOM = filterCreatures.renderDOM();

        const optionsSection = dom.querySelector('.options-section');
        optionsSection.appendChild(filterCreatureDOM);
    }

    renderHTML() {
        return /*html*/`
            <div>
                <!-- Header here -->
        
                <main>
                    <section class="options-section">
                        <!-- FilterCreatures goes here -->
                    </section>

                    <section class="list-section">
                        <!-- CreatureList goes here -->
                    </section>
                </main>

            </div>
        `;
    }
}

export default App;