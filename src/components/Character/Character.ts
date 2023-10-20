export enum AttributeChar {
    "name" = "name",
    "img" = "img",
}

class Character extends HTMLElement {

    name?: string;
    img?: string;

    static get observedAttributes (){
        const attrs: Record <AttributeChar, null> = {
            name: null,
            img: null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(propName:AttributeChar,oldValue: string | undefined,newValue: string | undefined){
        switch(propName){
            default: 
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
    this.render();
    }
   
    connectedCallback(){
        this.render();
    }

    render(){
        if (this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <style>
            .card-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
                gap: 10px;
            }
            
            .card {
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                border: 1px solid #ccc;
                padding: 10px;
            }
            
            .card img {
                max-width: 100%;
            }
        </style>
        <div class="card-container">
            <div class="card">
                <img src="${this.img}">
                <p>${this.name}</p>
            </div>
        </div>
            `
            
        }
    }
}

customElements.define("my-char", Character);
export default Character;