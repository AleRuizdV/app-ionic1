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
    </ion-header><!-- ................................................................................ -->

    <!-- Body --><ion-content :fullscreen="true">
      <!-- Carta a Libreria --> <ion-card href="/storage">
        <img alt="Silhouette of mountains" src="https://images.ctfassets.net/0piqveu8x9oj/7xkbfuRW3hWVoneQ13sI94/f97f0e8982c6ef35a71eeeea42f9d6a1/Articles_Header_Image_w07_2.jpg" />
        <ion-card-header>
          <ion-card-title>Libreria de personajes</ion-card-title>
        </ion-card-header>

        <ion-card-content>
          Crea y guarda tu personajes aquí.
        </ion-card-content>
      </ion-card><!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
      
      <!-- Link a "Log In" temporal--><ion-button href="/Login">Log In (temporal passage)</ion-button>
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
  IonButton
  } from '@ionic/vue';
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
</style>
