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
                    <p v-html="card1_Text[currentNumber-1].introduction"></p>
                  </ion-card-content>
                </ion-col><!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                <!-- Columna 2: Wiki --><ion-col>
                  <ion-card>
                    <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                    Wiki: Nombre de Personaje -->
                    <ion-card-header><ion-card-title>{{ card1_Text[currentNumber-1].nombreCorto }}</ion-card-title>
                    </ion-card-header>
                    <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                    Wiki: Imagenes principales -->
                    <div><ion-card style="margin: 0;">
                      <ion-card-header>
                        {{ card1_Text[currentNumber-1].wiki_imagenes[0].title }}
                        <!-- Agregar Label de Imagenes v1-------------------------------------------------
                        <ion-segment v-model="buttonsWikiImages" v-for="item of card1_Text[currentNumber-1].wikiImgTitle" :key="item.id">
                          <ion-segment-button value="Img1">
                            <ion-label>{{ card1_Text[currentNumber-1].wikiImgTitle[0] }}</ion-label>
                          </ion-segment-button>
                          <ion-segment-button value="Img1">
                            <ion-label>{{ card1_Text[currentNumber-1].wikiImgTitle[1] }}</ion-label>
                          </ion-segment-button>
                        </ion-segment>
                        -->
                        <!-- Agregar Label de Imagenes v2-------------------------------------------------
                        <ion-segment v-for="{wiki, index} of card1_Text[currentNumber-1].wiki_imagenes">
                          <ion-segment-button value={{ 'Img' + index }}>
                            <ion-label>{{ wiki.title}}</ion-label>
                          </ion-segment-button>
                        </ion-segment> -->
                        <!-- Agregar Label de Imagenes v3-------------------------------------------------
                        <ion-segment v-for="{wiki, index} in card1_Text[currentNumber-1].wiki_imagenes" :key="wiki.index"> 
                          <ion-segment-button>
                            <ion-label>{{ wiki.title }}</ion-label>
                          </ion-segment-button>
                        </ion-segment>
                        -->
                      </ion-card-header>
                      <ion-card-content style="padding: 0;">
                        <img :src=card1_Text[currentNumber-1].wiki_imagenes[0].image :alt=card1_Text[currentNumber-1].wiki_imagenes[0].title>
                      </ion-card-content>
                    </ion-card></div>
                    <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                    Wiki: Nombres y apodos -->
                    <ion-card-header><ion-card-title>Nombre</ion-card-title>
                    </ion-card-header>                    
                    <!-- Modify: Text --><ion-card-content>
                      <ion-row><!-- Nombre Completo -->
                        <ion-col class="textBold">Nombre Completo</ion-col>
                        <ion-col>{{ card1_Text[currentNumber-1].nombreCompleto }}</ion-col>
                      </ion-row>
                      <ion-row><!-- Apodos -->
                        <ion-col class="textBold">Apodos</ion-col>
                        <ion-col><p v-html="card1_Text[currentNumber-1].apodos"></p></ion-col>
                      </ion-row>
                    </ion-card-content>
                    <!-- |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
                    Wiki: Datos personales de Personaje -->
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
                        <ion-col><p v-html="card1_Text[currentNumber-1].familiares"></p></ion-col>
                      </ion-row>
                      <ion-row><!-- Amigos/Conocidos -->
                        <ion-col class="textBold">Afiliados</ion-col>
                        <ion-col><p v-html="card1_Text[currentNumber-1].afiliados"></p></ion-col>
                      </ion-row>
                    </ion-card-content>
                  </ion-card>
                </ion-col><!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
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
              <p v-html="card1_Text[currentNumber-1].historia"></p>
            </div><!-- =============================================================================== -->
            <!-- Stats & Abilities--><div v-if="buttonsCard1 === 'Card1_Sta'">
              <!-- Stats --><ion-accordion-group>
                <ion-accordion value="first">
                  <!-- Nombre lista --><ion-item slot="header">
                    <ion-card-title>Stats</ion-card-title>
                  </ion-item><!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                  <!-- Info Stats --><div class="ion-padding" slot="content">
                    <ion-card-content>
                      <!-- Str | Dex | Con --><ion-row>
                        <!-- 1. Str --><ion-col>
                          <div class="statStyle">
                            <ion-card class="statStyleBorder">
                              <!-- Titulo --><ion-card-header class="textBold">str</ion-card-header>
                              <!-- Inputs -->
                              <ion-card class="statStyleContent1">
                                {{ card1_Text[currentNumber-1].stat_str1 }}</ion-card>
                              <ion-card class="statStyleContent2">
                                {{ card1_Text[currentNumber-1].stat_str2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col><!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
                        <!-- 2. Dex --><ion-col>
                          <div class="statStyle">
                            <ion-card class="statStyleBorder">
                              <!-- Titulo --><ion-card-header class="textBold">dex</ion-card-header>
                              <!-- Inputs -->
                              <ion-card class="statStyleContent1">
                                {{ card1_Text[currentNumber-1].stat_dex1 }}</ion-card>
                              <ion-card class="statStyleContent2">
                                {{ card1_Text[currentNumber-1].stat_dex2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col><!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
                        <!-- 3. Con --><ion-col>
                          <div class="statStyle">
                            <ion-card class="statStyleBorder">
                              <!-- Titulo --><ion-card-header class="textBold">con</ion-card-header>
                              <!-- Inputs -->
                              <ion-card class="statStyleContent1">
                                {{ card1_Text[currentNumber-1].stat_con1 }}</ion-card>
                              <ion-card class="statStyleContent2">
                                {{ card1_Text[currentNumber-1].stat_con2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col><!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
                      </ion-row><!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
                      <!-- Int | Wis | Cha --><ion-row>
                        <!-- 4. Int --><ion-col>
                          <div class="statStyle">
                            <ion-card class="statStyleBorder">
                              <!-- Titulo --><ion-card-header class="textBold">int</ion-card-header>
                              <!-- Inputs -->
                              <ion-card class="statStyleContent1">
                                {{ card1_Text[currentNumber-1].stat_int1 }}</ion-card>
                              <ion-card class="statStyleContent2">
                                {{ card1_Text[currentNumber-1].stat_int2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col><!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
                        <!-- 5. Wis --><ion-col>
                          <div class="statStyle">
                            <ion-card class="statStyleBorder">
                              <!-- Titulo --><ion-card-header class="textBold">wis</ion-card-header>
                              <!-- Inputs -->
                              <ion-card class="statStyleContent1">
                                {{ card1_Text[currentNumber-1].stat_wis1 }}</ion-card>
                              <ion-card class="statStyleContent2">
                                {{ card1_Text[currentNumber-1].stat_wis2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col><!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
                        <!-- 6. Cha --><ion-col>
                          <div class="statStyle">
                            <ion-card class="statStyleBorder">
                              <!-- Titulo --><ion-card-header class="textBold">cha</ion-card-header>
                              <!-- Inputs -->
                              <ion-card class="statStyleContent1">
                                {{ card1_Text[currentNumber-1].stat_cha1 }}</ion-card>
                              <ion-card class="statStyleContent2">
                                {{ card1_Text[currentNumber-1].stat_cha2 }}</ion-card>
                            </ion-card>
                          </div>
                        </ion-col><!-- >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> -->
                      </ion-row><!-- <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< -->
                    </ion-card-content>
                  </div><!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
                </ion-accordion>
              </ion-accordion-group>
              <!-- Abilities --><ion-accordion-group>
                <ion-accordion value="first">
                  <!-- Nombre lista --><ion-item slot="header">
                    <ion-card-title>Abilities</ion-card-title>
                  </ion-item>

                  <!-- Info Abilities --><div slot="content">
                    <ion-card-content>
                      <!-- Acrobatics --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Acrobatics</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_acrobatics }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Animal Handling --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Animal Handling</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_animalHandling }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Arcana --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Arcana</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_arcana }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Athletics --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Athletics</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_athletics }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Deception --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Deception</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_deception }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- History --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>History</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_history }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Insight --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Insight</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_insight }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Intimidation --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Intimidation</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_intimidation }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Investigation --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Investigation</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_investigation }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Medicine --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Medicine</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_medicine }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Nature --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Nature</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_nature }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Perception --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Perception</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_perception }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Performance --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Performance</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_performance }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Persuasion --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Persuasion</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_persuasion }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Religion --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Religion</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_religion }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Sleight of Hand --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Sleight of Hand</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_sleightOfHand }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Stealth --><ion-card class="abilitieStyle">
                        <ion-row><ion-col>Stealth</ion-col>
                          <ion-col>{{ card1_Text[currentNumber-1].ability_stealth }}</ion-col>
                        </ion-row>
                      </ion-card>
                      <!-- Survival --><ion-card class="abilitieStyle">
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
        </ion-card><!-- ______________________________________________________________________________ -->
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
              <ion-grid>
                <ion-row>
                  <template v-for="image in card2_Img" :key="image.id">
                    <ion-col :size="calculateCols">
                      <div :href="image.link" style="position: relative;">
                        <img :alt=image.title :src="image.link" style="max-width: 400px;"/>
                      </div>
                    </ion-col>
                  </template>
                </ion-row>
              </ion-grid>
            </div><!-- =============================================================================== -->
            <!-- Updates--><div v-if="buttonsCard2 === 'Card2_Upd'">
              3 (Text)
            </div><!-- =============================================================================== -->
          </ion-card-content>
        </ion-card><!-- ______________________________________________________________________________ -->
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
    IonFooter,
    // Cards
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle, 
    IonCardTitle,
    // Label
    IonLabel, 
    IonSegment,
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
    IonItem,
    // Button
    IonButton,
    IonSegmentButton,
    //...
    IonToolbar,
    IonChip,
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

const buttonsWikiImages = ref('Img1');

// Information |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
const card1_Text = [
// Card 1
  {id:1, // Default
    /* Card 1_ Introducción */
    // Frase, Nombre, Introducción
    frase:"...",
    autor:"Name (year)",
    introduction:"...",
    // Wiki Imagenes
    wikiImgTitle:['Montañas'],
    wikiImages:['https://ionicframework.com/docs/img/demos/card-media.png'],
    wiki_imagenes: [
      {
        title: 'Montañas',
        image: 'https://ionicframework.com/docs/img/demos/card-media.png'
      },
      {
        title: 'Valles',
        image: 'https://ionicframework.com/docs/img/demos/card-media.png'
      },
    ],
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
    familiares: 
      "Response",
    afiliados: 
      "Response",
    /* Card 1_ Historia 
      Como Interactuar: 
        - Salto de texto = "+"<br>"+"
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
    frase:"Y si debo dar esto por terminado, dejarlo por la paz o como sea, supongo que diré, que mi armadura, nunca fue una distracción, o un pasatiempo, era una capullo, y ahora, soy un hombre nuevo. Podrán arrebatarme mi casa, todos mis trucos y juguetes, pero hay algo que no pueden quitarme... yo soy Iron Man.",
    autor:"Anthony Stark (2013)",
    introduction:"...",
    // Wiki Imagenes
    wikiImgTitle:['Tony Stark'],
    wikiImages:['https://www.latercera.com/resizer/v2/R25ZLWEPYREGVBGDY7OOUY32PQ.jpg?quality=80&smart=true&auth=d27f0d5c9cafb87b0067a7e6a37ca4c85d2966f4b3c5a659b137e070de25840f&width=690&height=502'], // ,'https://i.blogs.es/794234/vqstrq665vfavkvbmk6ptmd2nq/1366_2000.jpeg'
    wiki_imagenes: [
      {
        title: 'Tony Stark',
        image: 'https://www.latercera.com/resizer/v2/R25ZLWEPYREGVBGDY7OOUY32PQ.jpg?quality=80&smart=true&auth=d27f0d5c9cafb87b0067a7e6a37ca4c85d2966f4b3c5a659b137e070de25840f&width=690&height=502'
      },
      {
        title: 'Iron Man',
        image: 'https://i.blogs.es/794234/vqstrq665vfavkvbmk6ptmd2nq/1366_2000.jpeg'
      },
    ],
    // Wiki Text
    nombreCorto: "Tony Stark",
    nombreCompleto: "Anthony Edward Stark",
    apodos: "Tony"+"<br>"+"Iron Man (Alterego)",
    genero: "Masculino",
    dateBirth: "29 de mayo de 1970",
    dateDeath: "17 de octubre de 2023",
    edad: "53 años",
    especie: "Humano",
    ocupation: "Millonario, Filántropo, Superheroe",
    procedencia: "Estadounidense",
    familiares: 
      "Peper Potts (Esposa)"+"<br>"+
      "Morgan Stark (Hija)"+"<br>"+
      "Howard Stark (Padre-Fallecido)",
    afiliados: 
      "Peter Parker (Aprendiz)"+"<br>"+
      "J.A.R.V.I.S / Vision (Creación - Asistente virtual)",
    /* Card 1_ Historia 
      Como Interactuar: 
        - Salto de texto = "+"<br>"+"
        - Integrar imagenes = <img src="" alt="Image">
    */
    historia: "Anthony Edward 'Tony' Stark fue un multimillonario industrial, anterior Director General de Industrias Stark y miembro fundador de los Vengadores. Siendo el hijo de Howard Stark y poseyendo un gran intelecto, Stark se volvió un inventor de armas mundialmente reconocido hasta que fue secuestrado por los Diez Anillos. En su cautiverio, él diseñó un traje blindado para escapar de la organización, regresando a casa y convirtiéndose en el superhéroe conocido como Iron Man, luchando contra los terroristas y su ex compañero de negocios, Obadiah Stane. Stark gozó de la fama que le llegó con su nueva identidad secreta y decidió compartirla con el mundo, anunciando públicamente que él era Iron Man. "+"<br>"+
    " Después de un tiempo y tras hacer la apertura de la Stark Expo, Stark se encontró muriendo debido a que su Reactor Arc estaba envenenando su cuerpo, y fue confrontado por el vengativo terrorista, Ivan Vanko. Stark nombró a Virginia Potts como la nueva Directora General de Industrias Stark, y decidió ignorar sus problemas para disfrutar de sus aparentes últimos días de vida. No obstante, Nicholas Fury se acercó para entregarle un viejo baúl de Howard Stark, donde este encontró lo necesario para desarrollar un nuevo elemento, el cual lo curó de su envenenamiento. Ya recuperado, Stark venció a Vanko con ayuda de James Rhodes, inició una relación romántica con Potts y aceptó trabajar como consultor de S.H.I.E.L.D. "+"<br>"+
    " Con el mundo nuevamente puesto bajo amenaza, Stark, a regañadientes, se unió a los Vengadores para ayudar a derrotar a Loki, desarrollando asímismo una amistad con Bruce Banner y entró en conflicto con Steven Rogers sobre sus ideales acerca del heroísmo. A pesar de su desconfianza, Stark aprendió a trabajar en equipo, consiguiendo derrotar a Loki y al ejército Chitauri destruyendo el Centro de Comando Chitauri en el espacio. No obstante, la Batalla de Nueva York hizo que Stark padeciera de trastorno de estrés postraumático, llevándolo a crear a la Legión de Hierro en un intento por proteger el mundo. "+"<br>"+
    " Más adelante, las amenazas del Mandarín obligaron a Stark a proteger a los Estados Unidos, poniendo en riesgo a sus seres queridos y dejándolo indefenso cuando su mansión fue destruida. Ayudado brevemente por Harley Keener, Stark descubrió que Aldrich Killian estaba detrás de los ataques y que Trevor Slattery era un Mandarín simulado para cubrir sus experimentos hechos a partir del Extremis. Finalmente, Stark y James Rhodes detuvieron sus planes, aunque Stark casi pierde a Potts en el proceso. A raíz de la batalla, él destruyó todas sus armaduras de la Legión de Hierro con el Protocolo Clean Slate y se tomó un descanso en su labor como superhéroe. "+"<br>"+
    " No obstante, Stark pronto se reunió con los Vengadores para desmantelar la amenaza creciente de HYDRA dirigida por Wolfgang von Strucker. Aunque ganaron, Stark y Bruce Banner decidieron crear a Ultrón para asegurar la protección del mundo, no obstante, la inteligencia artificial desertó la idea y en su lugar optó por destruir a la humanidad. Una vez más, Stark fue confrontado por Steven Rogers y el equipo al no informarles de su creación en un principio. Como estaban en desventaja, Stark ayudó a crear a Visión, quien finalmente destruyó a Ultrón. Más tarde, Stark decidió retirarse del equipo al sentirse culpable del caos ocasionado por la inteligencia artificial creada. "+"<br>"+
    " Posteriormente, Stark se reunió con Thaddeus Ross y crearon los Acuerdos de Sokovia para controlar las acciones de los Vengadores. Sin embargo, el gran apoyo de Stark sobre los documentos lo pusieron en desacuerdo con Steven Rogers, quien procedió a proteger a James Barnes de su arresto, por lo que Stark dirigió una persecución contra su viejo aliado, iniciando la Guerra Civil de los Vengadores. Durante una tregua por arrestar a Helmut Zemo, Stark descubrió que Barnes fue quien asesinó a sus padres, resultando en una pelea, la cual Rogers ganó y dejó caer su escudo, antes de tomar caminos separados. Liderando a los pocos Vengadores que quedaban, Stark regresó a Nueva York y se hizo mentor de Peter Parker, a quien convirtió en un mejor héroe de lo que nunca fue. "+"<br>"+
    " Pronto, Stark fue reclutado por Stephen Strange y Bruce Banner para defender la Tierra del ataque de Thanos. Como resultado, Stark y Peter Parker abordaron la Nave-Q para rescatar a Strange capturado por Ebony Maw, y aterrizaron Titán, donde junto con los Guardianes de la Galaxia, enfrentaron a Thanos. No obstante, cada uno fue derrotado, perdiendo la Gema del Tiempo. Después que Thanos realizó el Chasquido al reunir las Gemas del Infinito para eliminar a la mitad de la vida en el univeso, Stark y Nebula fueron los únicos sobrevivientes en Titán. Los dos abordaron el Benatar y fueron ayudados por Carol Danvers a volver a la Tierra. Aunque los Vengadores sobrevivientes consiguieron eliminar a Thanos, Stark se retiró, casándose con Virginia Potts y teniendo una hija, Morgan Stark. "+"<br>"+
    " En 2023, Stark fue convencido de ayudar a los Vengadores a viajar en el tiempo por medio del Reino Cuántico para recuperar las Gemas del Infinito del pasado. Stark le devolvió su escudo a Rogers, y recuperaron tanto la Gema de la Mente como la Gema del Espacio en los años 2012 y 1970, respectivamente, con este último viaje permitiéndole reencontrarse brevemente con su padre, Howard Stark. Con las Gemas reunidas, Stark fue testigo de como Bruce Banner consiguió revivir a la mitad de la vida en el universo. Después, él y los Vengadores fueron confrontados por el ejército de un Thanos alternativo en la Batalla de la Tierra, sin embargo, Stark decidió usar el poder de las Gemas para eliminar a Thanos y sus tropas, sacrificando su propia vida en el proceso. Salvando a todo el universo de la destrucción, dejando un legado como uno de los superhéroes más venerados de la Tierra.",
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
const card2_Img = [
  {id: 1 , title: 'Imagen 1',
    link: 'https://ionicframework.com/docs/img/demos/card-media.png'},
  {id: 2 , title: 'Imagen 2',
    link: 'https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg'},
  {id: 3 , title: 'Imagen 3',
    link: 'https://ionicframework.com/docs/img/demos/card-media.png'},
  {id: 4 , title: 'Imagen 4',
    link: 'https://images.squarespace-cdn.com/content/v1/606d159a953867291018f801/1619987265163-9XILMVT3TK4HZ5X6538M/VH_01_1080pjpg.jpg'},
]

// Change buttons ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
/* Cambiar versión personaje */
const versionsCount = card1_Text.length;
const currentNumber = ref(1);
const toggleChangeVersion = () => {
  currentNumber.value = currentNumber.value % versionsCount + 1;
};
/* Cambiar versión Wiki 
const versionsCountImages = card1_Text.wikiImages.length;
const currentNumberWiki = ref(1);
*/
/* Cambiar al modo edición (Pendiente) */
const editMode = ref(false);
const toggleEditMode = () => {
  editMode.value = !editMode.value;
};

// ... |
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
function calculateImages() {
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
  .textBold {
    font-weight: bold
    }
  .statStyle {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    }
    .statStyleBorder{
    border: 2px solid red;
    padding: 5px;
    }
    .statStyleContent1{
    text-align: center;
    width: 70%;
    margin: 0 15%;
    }
    .statStyleContent2{
    text-align: center;
    width: 70%;
    margin: 15%;
    }
  .abilitieStyle{
    width: 100%; 
    margin: 0
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

