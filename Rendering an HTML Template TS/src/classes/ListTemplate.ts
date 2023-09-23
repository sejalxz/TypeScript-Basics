import { HasFormatter } from "../interfaces/HasFormatter";

export class ListTemplate{
    constructor(private container : HTMLUListElement){}

    render(doc : HasFormatter, heading : string, pos: string){
        const li = document.createElement('li');

        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);

        const p = document.createElement('p');
        p.innerText = doc.format();

        li.append(p);

        if(pos === 'start'){
            this.container.prepend(li);
        }
        else{
            this.container.append(li);
        }
    }
}