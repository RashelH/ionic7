import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

export interface Lugar {
task: string;
priority: number;
createdAt: number;
}

@Injectable({
providedIn: 'root'
})

export class LugaresService{
    private lugaresCollection: AngularFirestoreCollection<Lugar>;

private lugares: Observable<Lugar[]>;

constructor(db : AngularFirestore){
    this.lugaresCollection = db.collection<Lugar>('lugares');

    
    this.lugares = this.lugaresCollection.snapshotChanges().pipe(
        map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return {id, ...data};
            });
        })
    );
}

getLugares(){
    return this.lugares;
}

getLugar(id: string) { 
    return this.lugaresCollection.doc<Lugar>(id).valueChanges();
  } 

createLugar(lugar : Lugar){
    return this.lugaresCollection.add(lugar);
}

updateLugar(lugar : Lugar, id : string){
    return this.lugaresCollection.doc(id).update(lugar);
}

editLugar(lugar : Lugar){
    return this.lugaresCollection.add(lugar);
}

removeLugar(id: string) { 
    return this.lugaresCollection.doc(id).delete();
  }
}
    