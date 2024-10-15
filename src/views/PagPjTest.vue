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
          <ion-breadcrumb href="/storage">
            <ion-icon slot="start" :icon="film"></ion-icon>
            Biblioteca
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
      
      <!-- Configuración Personaje --><div class="ConfigPJ"> 
        <!-- Cambiar versión personaje --> <ion-button class="ion-text-wrap" style="max-width: 400px">
          Personaje 1 V.1
        </ion-button>
        <!-- Editar --> <ion-button shape="round"> 
          <ion-icon slot="icon-only" :icon="heart">
        </ion-icon></ion-button>
        <!-- Exportar --> <ion-button shape="round"> 
          <ion-icon slot="icon-only" :icon="heart">
        </ion-icon></ion-button>
      </div><!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->

      <!-- Info Personaje --><div>
        <!-- Card 1 --><ion-card class="carta_changeVersion">
          <!-- Segments-buttons for change content --><ion-card-header>
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

          <!-- Contenido--><ion-card-content>
            <!-- Introducción--><div v-if="buttonsCard1 === 'Card1_Int'">
              <!-- Part 1: Text & Cuadro wiki--><ion-row>
                <!-- Columna 1: Text --><ion-col>
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
                <!--  -->
                <!-- Columna 2: Wiki --><ion-col>
                  <ion-card>
                    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
                    <!-- Wiki: Nombre de Personaje -->
                    <ion-card-header>
                      <ion-card-title>Personaje</ion-card-title>
                    </ion-card-header>
                    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
                    <!-- Wiki: Imagenes principales -->
                    <!-- Agregar Label de Imagenes
                    <ion-card-header>
                      <ion-card-title>Labels</ion-card-title>
                    </ion-card-header>
                    -->
                    <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
                    <!-- Wiki: Nombres y apodos -->
                    <ion-card-header>
                      <ion-card-title>Nombres</ion-card-title>
                    </ion-card-header>                    
                    <ion-card-content>
                      <ion-row> <!-- Modify: Text -->
                        <ion-col>Text</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                    </ion-card-content>
                    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
                    <!-- Wiki: Datos personales de Personaje -->
                    <ion-card-header>
                      <ion-card-title>Datos</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                      <ion-row><!-- Modify: Text -->
                        <ion-col>Genero</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row><!-- Modify: Text -->
                        <ion-col>Nacimiento</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row><!-- Modify: Text -->
                        <ion-col>Defunción</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row><!-- Modify: Text -->
                        <ion-col>Edad</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row><!-- Modify: Text -->
                        <ion-col>Especie</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row><!-- Modify: Text -->
                        <ion-col>Ocupación</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row><!-- Modify: Text -->
                        <ion-col>Procedencia</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row><!-- Modify: Text -->
                        <ion-col>Familiares</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                      <ion-row><!-- Modify: Text -->
                        <ion-col>Afiliados</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
              <!-- Part 2.1: Index of Part 2.2--><div>
                Index <!-- Agregar Index -->
              </div>
              <!-- Part 2.2: More Text--><div>
                <ion-card-header>
                  <ion-card-title>Sumario</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  ...
                </ion-card-content>
              </div>
              
            </div>
            <!-- Historia--><div v-if="buttonsCard1 === 'Card1_His'">
              2 (Text - Imagenes)
            </div>
            <!-- Stats & Habilities--><div v-if="buttonsCard1 === 'Card1_Sta'">
              3 (D&D)
              <!-- Stats --><ion-accordion-group>
                <ion-accordion value="first">
                  <!-- Nombre lista --><ion-item slot="header">
                    <ion-card-title>Stats</ion-card-title>
                  </ion-item>

                  <!-- Info Stats --><div class="ion-padding" slot="content">
                    <ion-card-content>
                      <!-- Str | Dex | Con --><ion-row>
                        <!-- 1. Str --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header>str</ion-card-header>
                              <!-- Inputs --><input type="number" style="width: 50px;"><br><input type="number"style="width: 50px;">
                            </ion-card>
                          </div>
                        </ion-col>
                        <!-- 2. Dex --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header>dex</ion-card-header>
                              <!-- Inputs --><input type="number" style="width: 50px;"><br><input type="number"style="width: 50px;">
                            </ion-card>
                          </div>
                        </ion-col>
                        <!-- 3. Con --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header>con</ion-card-header>
                              <!-- Inputs --><input type="number" style="width: 50px;"><br><input type="number"style="width: 50px;">
                            </ion-card>
                          </div>
                        </ion-col>
                      </ion-row>
                      <!-- Int | Wis | Cha --><ion-row>
                        <!-- 4. Int --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header>int</ion-card-header>
                              <!-- Inputs --><input type="number" style="width: 50px;"><br><input type="number"style="width: 50px;">
                            </ion-card>
                          </div>
                        </ion-col>
                        <!-- 5. Wis --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header>wis</ion-card-header>
                              <!-- Inputs --><input type="number" style="width: 50px;"><br><input type="number"style="width: 50px;">
                            </ion-card>
                          </div>
                        </ion-col>
                        <!-- 6. Cha --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header>cha</ion-card-header>
                              <!-- Inputs --><input type="number" style="width: 50px;"><br><input type="number"style="width: 50px;">
                            </ion-card>
                          </div>
                        </ion-col>
                      </ion-row>
                    </ion-card-content>
                  </div>
                  
                </ion-accordion>
              </ion-accordion-group>
              
            </div>
            <!-- Inventario--><div v-if="buttonsCard1 === 'Card1_Inv'">
              4 (D&D)
            </div>
          </ion-card-content>
        </ion-card>
        <!-- _________________________________________________________________________________________ -->
        <!-- Card 2 --><ion-card class="carta_Stay">
          <!-- Segments-buttons for change content --><ion-card-header>
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

          <!-- Contenido--><ion-card-content>
            <!-- Curiosidades--><div v-if="buttonsCard2 === 'Card2_Cur'">
              1 (Text)
            </div>
            <!-- Galería--><div v-if="buttonsCard2 === 'Card2_Gal'">
              <ion-row>
                <ion-col>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                </ion-col>
                <ion-col>
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                  <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
                </ion-col>
              </ion-row>
            </div>
            <!-- Updates--><div v-if="buttonsCard2 === 'Card2_Upd'">
              3 (Text)
            </div>
          </ion-card-content>
        </ion-card>
      </div><!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
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
  import { // Componentes
    // Base
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar,
    IonChip,
    // Cartas
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle,
    // Avatar
    IonAvatar,
    // Footer
    IonFooter,
    // Button
    IonButton, 
    IonIcon,
    // Button
    IonLabel, 
    IonSegment, 
    IonSegmentButton,
    // Grid
    IonCol, 
    IonGrid, 
    IonRow,
    // Acordion
    IonAccordion, 
    IonAccordionGroup, 
    IonItem
    } from '@ionic/vue';
  import { // ...
    ref 
    } from 'vue';
  import { // Iconos
    heart, 
    home, 
    film 
    } from 'ionicons/icons';
  
  // Labels of the cards
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
