<template>
  <ion-page>
    <!-- Header --><ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Proyect String</ion-title>
      </ion-toolbar>
    </ion-header><!-- ................................................................................ -->

    <!-- Body --><ion-content :fullscreen="true">
      <!-- ... --><ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Blank</ion-title>
        </ion-toolbar>
      </ion-header><!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->

      <!-- Carta Log In --><ion-card>
        <!-- Titulo --><ion-card-header>
          <ion-card-title>Log In</ion-card-title>
        </ion-card-header>
        <!-- Casillas --><ion-card-content>
          <!-- Inputs -->
          <ion-item>
            <ion-input label="Email" type="email" placeholder="email@domain.com"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input label="Password" type="password">
              <ion-input-password-toggle slot="end"></ion-input-password-toggle>
            </ion-input>
          </ion-item>

          <!-- Buttons -->
          <ion-button>Log In</ion-button>
          <ion-button>
            <ion-icon slot="start" :icon="logoGoogle"></ion-icon> Access Google
          </ion-button>

        </ion-card-content>
      </ion-card><!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
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
  // Componentes Inputs
  IonInput, 
  IonItem, 
  IonList,
  IonInputPasswordToggle,
  // Componente footer
  IonFooter,
  // Button
  IonButton, 
  IonIcon
  } from '@ionic/vue';
  import { star, logoGoogle } from 'ionicons/icons';
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
