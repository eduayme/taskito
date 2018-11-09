import { db } from '../config/db';

export const addItem =  (item) => {
    db.ref("Llista/"+item).set({
        name: item
    });
}
