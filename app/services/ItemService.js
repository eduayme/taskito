import { db } from '../config/db';

//S'afageix una llista amb in item al firebase
export const addList =  (item) => {
    db.ref("Llista/"+item).set({
        name: item
    });
}

//Per esborrar una llista
export const deleteList =  (item) => {
    db.ref("Llista/"+item).remove();
}

//S'edita el nom de la llista, hem de saber l'id del firebase, aquest cas Llista 1
/** NOO FUNCIONAAAAAAAAAAAAAAAAAAAAAAAAAAA!!!!*/
export const editListName =  (item) => {
    db.ref("Llista/Llista 1/").update({
        name: item
    });
}

//S'afageix una tasca a una llista
export const addTaskToList =  (nomllista,nomtasca) => {
    console.log(nomllista,' ',nomtasca);
    db.ref("Llista/"+nomllista+"/"+nomtasca).set({
        name: nomtasca
    });
}

//S'elimina una tasca d'una llista
export const deleteTaskToList =  (nomllista,nomtasca) => {
    console.log(nomllista,' ',nomtasca);
    db.ref("Llista/"+nomllista+"/"+nomtasca).remove();
}