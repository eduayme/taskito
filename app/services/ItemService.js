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

//S'edita el nom de la llista
export const updateList =  (nomllista,nounom) => {
    addList(nounom);

    var llistaRef = db.ref("Llista/"+nomllista);
    llistaRef.on('value', function(snapshot) {
        db.ref("Llista/"+nomllista).set(snapshot.val());
    });

    deleteList(nomllista);
}

//S'edita el nom de la tasca
export const updateTask =  (nomllista,nomtasca,nounom) => {
    deleteTaskToList(nomllista,nomtasca);
    addTaskToList(nomllista,nounom);
}