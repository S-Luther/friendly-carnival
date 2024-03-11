import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react"
import React from "react"
import {res} from "../theme/types"




export default function Card (feed: res) {
    let text = feed.text
    return(
        <IonCard>
        <img alt="Silhouette of mountains" src="https://cataas.com/cat" />

        <IonCardHeader>
          <IonCardTitle>Card Title</IonCardTitle>
          <IonCardSubtitle>{text}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent></IonCardContent>
      </IonCard>
    )
}
