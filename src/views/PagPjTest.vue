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
      <!-- Breadcrumbs --><ion-toolbar>
        <ion-breadcrumbs>
          <ion-breadcrumb href="/home">
            <ion-icon slot="start" :icon="home"></ion-icon>
            Home
          </ion-breadcrumb>
          <ion-breadcrumb href="/storage">
            <ion-icon slot="start" :icon="film"></ion-icon>
            Biblioteca
          </ion-breadcrumb>
        </ion-breadcrumbs>
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
          <!-- Segments-buttons for change content -->
          <ion-card-header>
            <ion-segment v-model="buttonsCard1" >
              <ion-segment-button value="Card1_Int" >
                <ion-label>Introducción</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Card1_His">
                <ion-label>Historia</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Card1_Sta">
                <ion-label>Stats & Habilities</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Card1_Inv">
                <ion-label>Inventario</ion-label>
              </ion-segment-button>
            </ion-segment>
          </ion-card-header>

          <ion-card-content>
            <div v-if="buttonsCard1 === 'Card1_Int'">
              <!-- Objetivo: 1 (Text & Cuadro wiki)-->
              <ion-row>
                <!-- Columna 1 --><ion-col>
                  <!-- Frase --><ion-card>
                    <ion-card-content>
                      «...»
                    </ion-card-content>
                    <ion-card-header>
                      <ion-card-subtitle>— Name </ion-card-subtitle>
                    </ion-card-header>
                  </ion-card>

                  <!-- Texto Introductorio --><ion-card-content>
                    ...
                  </ion-card-content>
                </ion-col>
                <!-- Wiki -->
                <!-- Columna 2 --><ion-col>
                  <ion-card>
                    <ion-card-header>
                      <ion-card-title>Personaje</ion-card-title>
                    </ion-card-header>
                    <!-- Agregar Label de Imagenes
                    <ion-card-header>
                      <ion-card-title>Labels</ion-card-title>
                    </ion-card-header>
                    -->
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <ion-card-header>
                      <ion-card-title>Nombres</ion-card-title>
                    </ion-card-header>                    
                    <ion-card-content>
                      <ion-row>
                        <!-- Text -->
                        <ion-col>Text</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                    </ion-card-content>
                    <ion-card-header>
                      <ion-card-title>Datos</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <ion-row>
                        <!-- Text -->
                        <ion-col>Genero</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row>
                        <!-- Text -->
                        <ion-col>Nacimiento</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row>
                        <!-- Text -->
                        <ion-col>Defunción</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row>
                        <!-- Text -->
                        <ion-col>Edad</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row>
                        <!-- Text -->
                        <ion-col>Especie</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row>
                        <!-- Text -->
                        <ion-col>Ocupación</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row>
                        <!-- Text -->
                        <ion-col>Procedencia</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row>
                        <!-- Text -->
                        <ion-col>Familiares</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row>
                        <!-- Text -->
                        <ion-col>Afiliados</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
              <!-- More Text -->
              Index <!-- Agregar Index -->
              <ion-card-header>
                <ion-card-title>Sumario</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                ...
              </ion-card-content>
            </div>
            <div v-if="buttonsCard1 === 'Card1_His'">
              2 (Text - Imagenes)
            </div>
            <div v-if="buttonsCard1 === 'Card1_Sta'">
              3 (D&D)
            </div>
            <div v-if="buttonsCard1 === 'Card1_Inv'">
              4 (D&D)
            </div>
          </ion-card-content>
        </ion-card>

        <!-- Card 2 --><ion-card class="carta_Stay">
          <!-- Segments-buttons for change content -->
          <ion-card-header>
            <ion-segment v-model="buttonsCard2">
              <ion-segment-button value="Card2_Cur">
                <ion-label>Curiosidades</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Card2_Gal">
                <ion-label>Galería</ion-label>
              </ion-segment-button>
              <ion-segment-button value="Card2_Upd">
                <ion-label>Updates</ion-label>
              </ion-segment-button>
            </ion-segment>
          </ion-card-header>

          <ion-card-content>
            <div v-if="buttonsCard2 === 'Card2_Cur'">
              1 (Text)
            </div>
            <div v-if="buttonsCard2 === 'Card2_Gal'">
              2 (Imagenes)
            </div>
            <div v-if="buttonsCard2 === 'Card2_Upd'">
              3 (Text)
            </div>
          </ion-card-content>
        </ion-card>
      </div>
      
    </ion-content>
    <!-- Fotter --><ion-footer>
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
    IonSegmentButton,
    // Grid
    IonCol, 
    IonGrid, 
    IonRow
    } from '@ionic/vue';
  import { ref } from 'vue';
  import { heart, home, film } from 'ionicons/icons';

  const buttonsCard1 = ref('1');
  const buttonsCard2 = ref('1');
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
