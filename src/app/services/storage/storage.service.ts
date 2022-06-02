import { ComponentFactoryResolver, Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { environment } from '../../../environments/environment';
import { getFirestore, collection, addDoc, getDocs, orderBy, query } from 'firebase/firestore/lite';
import { IFormData } from '../../common/interfaces/formdata.interface';
import { IPhotoCard } from 'src/app/common/interfaces/photocard.interface';

const app = firebase.initializeApp(environment.firebaseConfig);
const db = getFirestore(app);
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storageRef = firebase.app().storage().ref();
  public firestoreImgUrl: any;
  public collectionPhotos: IPhotoCard[];

  constructor( ) {
    this.firestoreImgUrl= '';
    this.collectionPhotos = [];
  }

  public async uploadImg(imgBase64: any, name: string) {
    try {
      const response = await this.storageRef.child('photos/' + name).putString(imgBase64, 'data_url');
      this.firestoreImgUrl = await response.ref.getDownloadURL();
      return await response.ref.getDownloadURL();
    }catch (err){
      console.log(err);
      return null;
    }
  }

  public async getCollectionPosts(photoCollection: string){
    this.collectionPhotos = [];
    const docs = await getDocs(query(collection(db, photoCollection), orderBy('date', 'desc')));
    docs.forEach((doc) => {
      this.collectionPhotos.push(doc.data());
    });
    return this.collectionPhotos;
  }

  public async uploadPost(imageURL: any, formData: IFormData) {
    try {
      await addDoc(collection(db, formData.gallery),{
        imgUrl: imageURL,
        title: formData.title,
        subtitle: formData.subtitle,
        date: formData.date,
        description: formData.description
      });
    }catch(err) {
      return null;
    }

  }
}
