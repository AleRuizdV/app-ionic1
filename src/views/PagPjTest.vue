<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar class="ion-padding-end">
        <ion-title>Proyect String</ion-title>
        <!--
        <ion-avatar @click="'/login'">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"/> 
        </ion-avatar>
        -->
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header>

      <!-- Configuración Personaje --> <div class="ConfigPJ"> 
        <!-- Cambiar versión personaje --> <ion-button class="ion-text-wrap" style="max-width: 400px">
          Personaje 1 V.1
        </ion-button>
        <!-- Editar --> <ion-button shape="round"> 
          <ion-icon slot="icon-only" :icon="heart">
        </ion-icon></ion-button>
        <!-- Exportar --> <ion-button shape="round"> 
          <ion-icon slot="icon-only" :icon="heart">
        </ion-icon></ion-button>
      </div>

      <!-- Info Personaje --> <div>
        <!-- Card 1 --><ion-card class="carta_changeVersion">
          <ion-card-header>
            <ion-segment value="buttonsCard1">
              <ion-segment-button value="Card1_Int">
                <ion-label>Introducción</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Card1_His">
                <ion-label>Historia</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Card1_Sta">
                <ion-label>Stats & Habilities</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Card1_Upd">
                <ion-label>Updates</ion-label>
              </ion-segment-button>
            </ion-segment>
          </ion-card-header>

          <ion-card-content>
            <div value="Card1_Int">
              Here's a small text description for the card content. Nothing more, nothing less.
            </div>
            <div value="Card1_His">
              Hi.
            </div>
          </ion-card-content>
        </ion-card>

        <!-- Card 2 --><ion-card class="carta_Stay">
          <ion-card-header>
            <ion-segment value="buttonsCard2">
              <ion-segment-button value="Card2_Cur">
                <ion-label>Curiosidades</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Card2_Gal">
                <ion-label>Galería</ion-label>
              </ion-segment-button>
            </ion-segment>
          </ion-card-header>

          <ion-card-content>
            Here's a small text description for the card content. Nothing more, nothing less.
          </ion-card-content>
        </ion-card>
      </div>
      
    </ion-content>
    <ion-footer>
      <ion-toolbar>
        <ion-card-content>
          Proyect String ® 2024
        </ion-card-content>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script setup lang="ts">
import { 
  // Componente Base
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonChip,
  // Componentes Cartas
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardSubtitle, 
  IonCardTitle,
  // Componentes Avatar
  IonAvatar,
  // Componente footer
  IonFooter,
  // Button
  IonButton, 
  IonIcon,
  // Segment Button
  IonLabel, 
  IonSegment, 
  IonSegmentButton
  } from '@ionic/vue';
import { heart } from 'ionicons/icons';
</script>

<style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    }
    #container strong {
    font-size: 20px;
    line-height: 26px;
    }
    #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
    }
    #container a {
    text-decoration: none;
    }
  #ConfigPJ{
    padding-top: 100px;
    }
</style>
