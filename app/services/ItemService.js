import { db } from '../config/db';

//S'afageix una llista amb in item al firebase
export const addList =  (item) => {
    db.ref("Llista/"+item).set({
        name: item
    });
}

//S'edita el nom de la llista, hem de saber l'id del firebase, aquest cas Llista 1
/** NOO FUNCIONAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!*/
export const editListName =  (item) => {
    db.ref("Llista/Llista 1/").update({
        name: item
    });
}

export const addTaskToList =  (nomllista,nomtasca) => {
    console.log(nomllista,' ',nomtasca);
    db.ref("Llista/"+nomllista+"/"+nomtasca).set({
        name: nomtasca
    });
}

//Per esborrar una llista
export const deleteItem =  (item) => {

    db.ref("Llista/"+item).remove();
}