import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Card from '../components/Card'
import './Tab1.css';
import axios from 'axios';
import {res} from "../theme/types"
import { useState } from 'react';
import { getCats, db } from '../util/firebase';


const Tab1: React.FC = () => {

  const genCards = [1,2,3,4]

  const params = {};

  const [response, setResponse] = useState([]);

  // axios.get('https://cat-fact.herokuapp.com/facts', {params})
  // .then(response => {
  //   const apiResponse = response.data;
  //   // setResponse(apiResponse)
  // }).catch(error => {
  //   console.log(error)
  // })

  getCats(db).then((doc) => {
    setResponse(doc.current)
  })

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {response.map((item) => 
          <Card {...item as res}/>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
