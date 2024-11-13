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
        <!-- Cambiar versión personaje --> <ion-button class="ion-text-wrap" style="max-width: 400px" @click="toggleChangeVersion">
          Personaje 1 Ver.{{ currentNumber }}
        </ion-button>

        <!-- _________________________________________________________________________________________ -->
        <!-- Editar --><ion-button shape="round" @click="toggleEditMode">
          {{ editMode ? 'Guardar' : 'Editar' }}
          <ion-icon slot="icon-only" :icon="brush"></ion-icon>
        </ion-button>
        <!-- _________________________________________________________________________________________ -->
        <!-- Exportar --> <ion-button shape="round"> 
          <ion-icon slot="icon-only" :icon="arrowUp">
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
                <ion-label>Stats & Abilities</ion-label>
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
                    <ion-card-content>«{{ card1_Text[currentNumber-1].frase }}»</ion-card-content>
                    <ion-card-header>
                      <ion-card-subtitle>— {{ card1_Text[currentNumber-1].autor }} </ion-card-subtitle>
                    </ion-card-header>
                  </ion-card>

                  <!-- Texto Introductorio --><ion-card-content>
                    {{ card1_Text[currentNumber-1].introduction }}
                  </ion-card-content>
                </ion-col>

                <!-- Columna 2: Wiki --><ion-col>
                  <ion-card>
                    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
                    <!-- Wiki: Nombre de Personaje -->
                    <ion-card-header><ion-card-title>{{ card1_Text[currentNumber-1].nombreCorto }}</ion-card-title>
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
                    <ion-card-header><ion-card-title>Nombre</ion-card-title>
                    </ion-card-header>                    
                    <!-- Modify: Text --><ion-card-content>
                      <ion-row><!-- Nombre Completo -->
                        <ion-col class="textBold">Nombre Completo</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].nombreCompleto }}</ion-col>
                      </ion-row>
                      <ion-row><!-- Apodos -->
                        <ion-col class="textBold">Apodos</ion-col>
                        <ion-col>Response</ion-col>
                      </ion-row>
                    </ion-card-content>
                    <!-- ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| -->
                    <!-- Wiki: Datos personales de Personaje -->
                    <ion-card-header><ion-card-title>Datos</ion-card-title>
                    </ion-card-header>
                    <!-- Modify: Text --><ion-card-content>
                      <ion-row><!-- Genero -->
                        <ion-col class="textBold">Genero</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].genero }}</ion-col>
                      </ion-row>
                      <ion-row><!-- Fecha de Nacimiento -->
                        <ion-col class="textBold">Nacimiento</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].dateBirth }}</ion-col>
                      </ion-row>
                      <ion-row><!-- Fecha de Defunción -->
                        <ion-col class="textBold">Defunción</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].dateDeath }}</ion-col>
                      </ion-row>
                      <ion-row><!-- Edad Actual -->
                        <ion-col class="textBold">Edad</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].edad }}</ion-col>
                      </ion-row>
                      <ion-row><!-- Tipo de Raza -->
                        <ion-col class="textBold">Especie</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].especie }}</ion-col>
                      </ion-row>
                      <ion-row><!-- Trabajo -->
                        <ion-col class="textBold">Ocupación</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].ocupation }}</ion-col>
                      </ion-row>
                      <ion-row><!-- Lugar de Nacimiento/Crianza -->
                        <ion-col class="textBold">Procedencia</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].procedencia }}</ion-col>
                      </ion-row>
                      <ion-row><!-- Familiares -->
                        <ion-col class="textBold">Familiares</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].familiares }}</ion-col>
                      </ion-row>
                      <ion-row><!-- Amigos/Conocidos -->
                        <ion-col class="textBold">Afiliados</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].afiliados }}</ion-col>
                      </ion-row>
                    </ion-card-content>
                  </ion-card>
                </ion-col>
              </ion-row>
              <!-- // Idea para Sumario del personaje
              <div> // Part 2.1: Index of Part 2.2
                Index // Agregar Index
              </div>
              <div> // Part 2.2: Sumario
                <ion-card-header>
                  <ion-card-title>Sumario</ion-card-title>
                </ion-card-header>
                <ion-card-content>
                  ...
                </ion-card-content>
              </div>
              -->
            </div><!-- =============================================================================== -->
            <!-- Historia--><div v-if="buttonsCard1 === 'Card1_His'">
              2 (Text - Imagenes) <br>
              <p v-html="card1_Text[currentNumber-1].historia"></p>
              <!-- {{ card1_Text[currentNumber-1].historia }} -->
            </div><!-- =============================================================================== -->
            <!-- Stats & Abilities--><div v-if="buttonsCard1 === 'Card1_Sta'">
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
                              <!-- Titulo --><ion-card-header style="font-weight: bold;">str</ion-card-header>
                              <!-- Inputs -->
                              <ion-card style="text-align: center; width: 70%; margin: 0 15%;">
                                {{ card1_Text[currentNumber-1].stat_str1 }}</ion-card>
                              <ion-card style="text-align: center; width: 70%; margin: 15%;">
                                {{ card1_Text[currentNumber-1].stat_str2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col>
                        <!-- 2. Dex --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header style="font-weight: bold;">dex</ion-card-header>
                              <!-- Inputs -->
                              <ion-card style="text-align: center; width: 70%; margin: 0 15%;">
                                {{ card1_Text[currentNumber-1].stat_dex1 }}</ion-card>
                              <ion-card style="text-align: center; width: 70%; margin: 15%;">
                                {{ card1_Text[currentNumber-1].stat_dex2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col>
                        <!-- 3. Con --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header style="font-weight: bold;">con</ion-card-header>
                              <!-- Inputs -->
                              <ion-card style="text-align: center; width: 70%; margin: 0 15%;">
                                {{ card1_Text[currentNumber-1].stat_con1 }}</ion-card>
                              <ion-card style="text-align: center; width: 70%; margin: 15%;">
                                {{ card1_Text[currentNumber-1].stat_con2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col>
                      </ion-row>
                      <!-- Int | Wis | Cha --><ion-row>
                        <!-- 4. Int --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header style="font-weight: bold;">int</ion-card-header>
                              <!-- Inputs -->
                              <ion-card style="text-align: center; width: 70%; margin: 0 15%;">
                                {{ card1_Text[currentNumber-1].stat_int1 }}</ion-card>
                              <ion-card style="text-align: center; width: 70%; margin: 15%;">
                                {{ card1_Text[currentNumber-1].stat_int2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col>
                        <!-- 5. Wis --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header style="font-weight: bold;">wis</ion-card-header>
                              <!-- Inputs -->
                              <ion-card style="text-align: center; width: 70%; margin: 0 15%;">
                                {{ card1_Text[currentNumber-1].stat_wis1 }}</ion-card>
                              <ion-card style="text-align: center; width: 70%; margin: 15%;">
                                {{ card1_Text[currentNumber-1].stat_wis2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col>
                        <!-- 6. Cha --><ion-col>
                          <div style="height: 100%; display: flex; align-items: center; justify-content: center;">
                            <ion-card style="border: 2px solid red; padding: 5px;">
                              <!-- Titulo --><ion-card-header style="font-weight: bold;">cha</ion-card-header>
                              <!-- Inputs -->
                              <ion-card style="text-align: center; width: 70%; margin: 0 15%;">
                                {{ card1_Text[currentNumber-1].stat_cha1 }}</ion-card>
                              <ion-card style="text-align: center; width: 70%; margin: 15%;">
                                {{ card1_Text[currentNumber-1].stat_cha2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col>
                      </ion-row>
                    </ion-card-content>
                  </div>
                  
                </ion-accordion>
              </ion-accordion-group>
              <!-- Abilities --><ion-accordion-group>
                <ion-accordion value="first">
                  <!-- Nombre lista --><ion-item slot="header">
                    <ion-card-title>Abilities</ion-card-title>
                  </ion-item>

                  <!-- Info Abilities --><div slot="content">
                    <ion-card-content>
                      <!-- Acrobatics --><ion-card style="width: 100%; margin: 0">
                        <ion-row><ion-col>Acrobatics</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_acrobatics }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Animal Handling --><ion-card style="width: 100%; margin: 0;">
                        <ion-row><ion-col>Animal Handling</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_animalHandling }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Arcana --><ion-card style="width: 100%; margin: 0">
                        <ion-row><ion-col>Arcana</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_arcana }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Athletics --><ion-card style="width: 100%; margin: 0;">
                        <ion-row><ion-col>Athletics</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_athletics }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Deception --><ion-card style="width: 100%; margin: 0">
                        <ion-row><ion-col>Deception</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_deception }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- History --><ion-card style="width: 100%; margin: 0;">
                        <ion-row><ion-col>History</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_history }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Insight --><ion-card style="width: 100%; margin: 0">
                        <ion-row><ion-col>Insight</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_insight }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Intimidation --><ion-card style="width: 100%; margin: 0;">
                        <ion-row><ion-col>Intimidation</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_intimidation }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Investigation --><ion-card style="width: 100%; margin: 0">
                        <ion-row><ion-col>Investigation</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_investigation }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Medicine --><ion-card style="width: 100%; margin: 0;">
                        <ion-row><ion-col>Medicine</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_medicine }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Nature --><ion-card style="width: 100%; margin: 0">
                        <ion-row><ion-col>Nature</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_nature }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Perception --><ion-card style="width: 100%; margin: 0;">
                        <ion-row><ion-col>Perception</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_perception }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Performance --><ion-card style="width: 100%; margin: 0">
                        <ion-row><ion-col>Performance</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_performance }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Persuasion --><ion-card style="width: 100%; margin: 0;">
                        <ion-row><ion-col>Persuasion</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_persuasion }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Religion --><ion-card style="width: 100%; margin: 0">
                        <ion-row><ion-col>Religion</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_religion }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Sleight of Hand --><ion-card style="width: 100%; margin: 0;">
                        <ion-row><ion-col>Sleight of Hand</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_sleightOfHand }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Stealth --><ion-card style="width: 100%; margin: 0">
                        <ion-row><ion-col>Stealth</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_stealth }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Survival --><ion-card style="width: 100%; margin: 0;">
                        <ion-row><ion-col>Survival</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_survival }}</ion-col>
                        </ion-row>
                      </ion-card>

                    </ion-card-content>
                  </div>
                  
                </ion-accordion>
              </ion-accordion-group>
              
            </div><!-- =============================================================================== -->
            <!-- Inventario--><div v-if="buttonsCard1 === 'Card1_Inv'">
              4 (D&D)
            </div><!-- =============================================================================== -->
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
            </div><!-- =============================================================================== -->
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
            </div><!-- =============================================================================== -->
            <!-- Updates--><div v-if="buttonsCard2 === 'Card2_Upd'">
              3 (Text)
            </div><!-- =============================================================================== -->
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

<script setup>
import {// Componentes
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
    // Label
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
    IonItem,
    // Popover
    IonPopover
    } from '@ionic/vue';
  import { // ...
    defineComponent,
    ref 
    } from 'vue';
  import { // Iconos
    arrowUp,
    brush,
    home, 
    film 
    } from 'ionicons/icons';

// Labels cards ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const buttonsCard1 = ref('Card1_Int');
const buttonsCard2 = ref('Card2_Cur');

// Text ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const card1_Text = [
// Card 1
  {id:1, // Default
    /* Card 1_ Introducción */
    // Frase, Nombre, Introducción
    frase:"...",
    autor:"Name",
    introduction:"...",
    // Wiki Imagenes
    // Wiki Text
    nombreCorto: "Name",
    nombreCompleto: "Response",
    apodos: "Response",
    genero: "Response",
    dateBirth: "Response",
    dateDeath: "Response",
    edad: "Response",
    especie: "Response",
    ocupation: "Response",
    procedencia: "Response",
    familiares: "Response",
    afiliados: "Response",
    /* Card 1_ Historia 
      Como Interactuar: 
        - Salto de texto = <br>
        - Integrar imagenes = <img src="" alt="Image">
    */
    historia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nulla ut velit viverra consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus in felis risus. Suspendisse ullamcorper massa libero, vehicula facilisis mi tempus ac. Mauris tristique cursus lacus, in porttitor turpis tempor vitae. Nullam tincidunt nisl quis lectus mattis, quis ultrices arcu commodo. Nulla id aliquam ligula. Mauris diam arcu, mattis sed lorem in, commodo sollicitudin arcu. Aenean feugiat vitae lorem non imperdiet. Nullam varius euismod leo ac fermentum. In sit amet lacinia nisi. Suspendisse nec libero mollis, efficitur elit at, lobortis massa. Duis tincidunt sit amet mi non malesuada. Etiam sed commodo libero, vel suscipit sapien. Sed eget rhoncus mauris.",
    /* Card 1_ Stats & Abilities */
    stat_str1: "0", stat_str2: "0",
    stat_dex1: "0", stat_dex2: "0",
    stat_con1: "0", stat_con2: "0",
    stat_int1: "0", stat_int2: "0",
    stat_wis1: "0", stat_wis2: "0",
    stat_cha1: "0", stat_cha2: "0",
    ability_acrobatics: "0",
    ability_animalHandling: "0",
    ability_arcana: "0",
    ability_athletics: "0",
    ability_deception: "0",
    ability_history: "0",
    ability_insight: "0",
    ability_intimidation: "0",
    ability_investigation: "0",
    ability_medicine: "0",
    ability_nature: "0",
    ability_perception: "0",
    ability_performance: "0",
    ability_persuasion: "0",
    ability_religion: "0",
    ability_sleightOfHand: "0",
    ability_stealth: "0",
    ability_Survival: "0",
    /* Card 1_ Inventario */
  },
  {id:2, // Prueba 1 (Tony Stark)
    /* Card 1_ Introducción */
    // Frase, Nombre, Introducción
    frase:"I'm Iron Man",
    autor:"Tony Stark",
    introduction:"...",
    // Wiki Imagenes
    // Wiki Text
    nombreCorto: "Tony Stark",
    nombreCompleto: "Anthony Edward Stark",
    apodos: "Tony Iron Man (Alterego)",
    genero: "Masculino",
    dateBirth: "29 de mayo de 1970",
    dateDeath: "17 de octubre de 2023",
    edad: "53 años",
    especie: "Humano",
    ocupation: "Millonario, Filántropo, Superheroe",
    procedencia: "Estadounidense",
    familiares: "Peper Potts (Esposa) Morgan Stark (Hija) Howard Stark (Padre-Fallecido)",
    afiliados: "Peter Parker (Aprendiz) J.A.R.V.I.S / Vision (Creación - Asistente virtual)",
    /* Card 1_ Historia 
      Como Interactuar: 
        - Salto de texto = <br>
        - Integrar imagenes = <img src="" alt="Image">
    */
    historia: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus nulla ut velit viverra consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus in felis risus. Suspendisse ullamcorper massa libero, vehicula facilisis mi tempus ac. Mauris tristique cursus lacus, in porttitor turpis tempor vitae. Nullam tincidunt nisl quis lectus mattis, quis ultrices arcu commodo. Nulla id aliquam ligula. Mauris diam arcu, mattis sed lorem in, commodo sollicitudin arcu. Aenean feugiat vitae lorem non imperdiet. Nullam varius euismod leo ac fermentum. In sit amet lacinia nisi. Suspendisse nec libero mollis, efficitur elit at, lobortis massa. Duis tincidunt sit amet mi non malesuada. Etiam sed commodo libero, vel suscipit sapien. Sed eget rhoncus mauris.",
    /* Card 1_ Stats & Abilities */
    stat_str1: "0", stat_str2: "0",
    stat_dex1: "0", stat_dex2: "0",
    stat_con1: "0", stat_con2: "0",
    stat_int1: "0", stat_int2: "0",
    stat_wis1: "0", stat_wis2: "0",
    stat_cha1: "0", stat_cha2: "0",
    ability_acrobatics: "0",
    ability_animalHandling: "0",
    ability_arcana: "0",
    ability_athletics: "0",
    ability_deception: "0",
    ability_history: "0",
    ability_insight: "0",
    ability_intimidation: "0",
    ability_investigation: "0",
    ability_medicine: "0",
    ability_nature: "0",
    ability_perception: "0",
    ability_performance: "0",
    ability_persuasion: "0",
    ability_religion: "0",
    ability_sleightOfHand: "0",
    ability_stealth: "0",
    ability_Survival: "0",
    /* Card 1_ Inventario */
  }
]

// Change buttons ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const editMode = ref(false);
const toggleEditMode = () => {
  editMode.value = !editMode.value;
};
const versionsCount = card1_Text.length;
const currentNumber = ref(1);
const toggleChangeVersion = () => {
  currentNumber.value = currentNumber.value % versionsCount + 1; 
  // El valor despues del simbolo % deve ser alterado segúna la cantidad de entidades de card1_Text
};
</script>

<style scoped>
  .textBold{
    font-weight: bold
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
  #ConfigPJ{
    padding-top: 100px;
    }
</style>

