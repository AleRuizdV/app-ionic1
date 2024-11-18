<template>
  <ion-page>
    <!-- Header --><ion-header :translucent="true">
      <ion-toolbar class="ion-padding-end">
        <ion-title>Proyect String</ion-title>
        <!--
        <ion-avatar @click="'/login'">
          <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg"/> 
        </ion-avatar>
        -->
      </ion-toolbar>
      <!-- Breadcrumbs --><ion-toolbar>
        <ion-breadcrumbs>
          <ion-breadcrumb href="/home">
            <ion-icon slot="start" :icon="home"></ion-icon>
            Home
          </ion-breadcrumb>
        </ion-breadcrumbs>
      </ion-toolbar>
    </ion-header><!-- ................................................................................ -->

    <!-- Body --><ion-content :fullscreen="true">
      <!-- ... --><ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header><!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
      
      <!-- Grilla de Personajes --><ion-grid>
        <ion-row>
          <template v-for="card in cardData" :key="card.id">
            <ion-col :size="calculateCols">
              <!-- Personajes --><ion-card class="carta_personaje" :href="card.link" style="height: 350px; width: 14rem;">
                <!-- Imagen Presentación PJ --><div style="position: relative;">
                  <!-- Problema: "card.image" debe tener una imagen cuadrada (relasión 1:1) para que se vea consistente entre las imagenes -->
                  <img :alt="card.title" :src="card.image" style="width: 100%;"/>
                </div>
                <!-- Info Presentación PJ --><div class="card-content">
                  <ion-card-header>
                    <ion-card-title style="font-weight: bold;">{{ card.title }}</ion-card-title>
                    <ion-card-subtitle>{{ card.subtitle }}</ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>{{ card.description }}</ion-card-content>
                </div>
              </ion-card><!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
            </ion-col>
          </template>
        </ion-row>
      </ion-grid><!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
      
    </ion-content><!-- ............................................................................... -->
    
    <!-- Fotter --><ion-footer>
      <ion-toolbar>
        <ion-card-content>
          Proyect String ® 2024
        </ion-card-content>
      </ion-toolbar>
    </ion-footer><!-- ................................................................................ -->
  </ion-page>
</template>

<script setup>
  import {// Componentes
    // Base
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonFooter,
    // Cards
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle,
    // Label
    IonLabel,
    // Acordion
    IonAccordion, 
    IonAccordionGroup, 
    // Grid
    IonCol,
    IonRow, 
    IonGrid, 
    // Img
    IonAvatar,
    IonIcon,
    // Button
    IonButton,
    //...
    IonToolbar,
    IonChip,
    IonPopover, 
    // Breadcrumbs
    IonBreadcrumb, 
    IonBreadcrumbs, 
    } from '@ionic/vue';
  import { home } from 'ionicons/icons';

  const cardData = [
    {id: 1, title: 'Personaje 1',
      subtitle: 'Card Subtitle',
      description: "Here's a small text description for the card content.",
      image: 'https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg',
      link: '/PagPjTest',
    },
    {id: 2, title: 'Personaje 2',
      subtitle: 'Card Subtitle',
      description: "Here's a small text description for the card content.",
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Hollow_Knight_first_cover_art.webp/220px-Hollow_Knight_first_cover_art.webp.png',
      link: '/PagPjTest',
    },
    {id: 3, title: 'Personaje 3',
      subtitle: 'Card Subtitle',
      description: "Here's a small text description for the card content.",
      image: 'https://ionicframework.com/docs/img/demos/card-media.png',
      link: '/PagPjTest',
    },
    // ... Add more card data objects here
  ];
  function calculateCols() {
  const width = window.innerWidth;
  if (width >= 1200) {
    return 'col-12 xl:col-3'; // 3 columns for extra large screens
  } else if (width >= 768) {
    return 'col-12 lg:col-4'; // 4 columns for large screens
  } else {
    return 'col-12'; // 1 column for small screens
  }
}
</script>

<style scoped>
  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.3rem;
    background: rgba(0, 0, 0, 0.9); 
    /* Fondo semitransparente para mejorar la legibilidad sobre la imagen */
    color: white;
    }
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
</style>