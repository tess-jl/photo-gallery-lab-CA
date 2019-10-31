import Component from '../Component.js';

class AddCreature extends Component {

 

    //makes the form
    onRender(form) {
    
        const { onSubmit } = this.props; 

        

        form.addEventListener('submit', (event) => {
            event.preventDefault(); 
            const formData = new FormData(form);

            const creatureObject = {
                title: formData.get('creature-title'), 
                keyword: formData.get('creature-keyword'), 
                url: formData.get('creature-url'), 
                horns: formData.get('creature-horns'), 
                description: formData.get('creature-description')
            }; 
            
            onSubmit(creatureObject); 
            
        });
    }

    renderHTML() {
        
        return `
        <form>
            <div>
                <h2>Add a new creature to this list... </h2>
                <label id=="title">Title</label>
                <input name="creature-title" type="text">
                <label id=="keyword">Keyword</label>
                <input name="creature-keyword" type="text">
                <label id=="url">Url</label>
                <input name="creature-url" type="text">
                <label id=="horns">Number of Horns</label>
                <input name="creature-horns" type="number">
                <label id=="description">Description</label>
                <input name="creature-description" type="text">

                <button id="submit-button">Submit</button>
            </div>
        </form>
    `;
    
    }
}

export default AddCreature;