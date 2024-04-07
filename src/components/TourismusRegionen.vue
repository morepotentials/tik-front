<template>
  <div class="relative">
    <div
      class="container h-screen flex my-auto min-h-[800px] mx-auto px-4 relative"
    >
      <div
        class="basis-full sm:basis-1/2 flex justify-center flex-col inline-block items-center"
      >
        <div class="flex flex-row mb-6 md:hidden">
          <a
            href="https://kultur.sachsen-anhalt.de/kultur-entdecken/kulturland-entdecken/industriekultur#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="../assets/lsa_logo_farbig.png"
              style="max-height: 50px; background-color: "
            />
          </a>
          <a
            href="https://moderndenken.sachsen-anhalt.de/moderne-denker"
            target="_blank"
            rel="noopener noreferrer"
            class="mx-5"
          >
            <img
              src="../assets/moderndenken_logo_weiss.png"
              style="max-height: 50px"
            />
          </a>
          <a
            href="https://www.ferropolis.de/de/cms/_redaktionell/28/Industriekultur.html"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-5"
          >
            <img src="../assets/nik_logo_weiss.png" style="max-height: 28px" />
          </a>
        </div>
        <div class="max-w-[300px] text-center sm:text-left">
          <div>
            <div class="mb-8 skew-x-[-10deg] bg-white inline-block h-[27px]">
              <div class="skew-x-[10deg]">
                <span
                  class="text-t-green px-2 text-2xl italic text-t-grey font-bold"
                >
                  SONNTAG 21.04.2024
                </span>
              </div>
            </div>
          </div>
          <h1 class="text-t-green text-3xl sm:text-5xl italic font-bold">
            14. TAG DER INDUSTRIE- KULTUR
            <span class="text-white">SACHSEN- ANHALT</span>
          </h1>
          <div class="flex justify-center sm:justify-start">
            <hr class="h-[1px] w-44 bg-t-green my-3 border-0 my-8" />
          </div>
          <div class="text-white">
            <p class="mb-8">
              Zum Aktionstag ist das industriekulturelle Erbe Sachsen-Anhalts
              landesweit erlebbar. Kommen und staunen Sie wie vielfältig und
              lebendig sich Orte, Personen und Ereignisse am Tag der
              Industriekultur (TIK) präsentieren und verbinden.
            </p>
          </div>
          <div class="flex justify-center sm:justify-start">
            <div
              class="w-[176px] text-center p-5 text-white bg-t-grey border border-solid border-t-green hover:bg-t-green hover:text-t-grey cursor-pointer"
              @click="scrollToProgramm"
            >
              ZUM PROGRAMM
            </div>
          </div>
        </div>
      </div>
      <div class="hidden sm:basis-1/2 sm:flex justify-start items-center">
        <div class="max-w-[575px] relative z-[-1] ml-[-60px] xl:ml-0">
          <img src="../assets/Tik_logo_v2.png" />
        </div>
      </div>
      <div class="w-[calc(100%-2rem)] absolute bottom-4 flex justify-center">
        <div class="w-10 cursor-pointer">
          <DownArrowIcon @click="scrollToProgramm"></DownArrowIcon>
        </div>
      </div>
    </div>

    <div ref="programm" class="h-screen min-h-[800px] flex flex-row">
      <div
        class="container mt-auto sm:my-auto mx-auto h-screen items-center justify-center flex relative"
      >
        <div
          v-if="!isModalOpen"
          class="absolute top-0 right-0 pl-4 pr-4 md:pr-0 md:ml-0 text-center md:text-left md:max-w-[350px] mt-4 sm:mt-8 md:mt-14"
        >
          <h2 class="text-t-green text-3xl lg:text-5xl italic font-bold">
            Das regionale Programm <br />
            <span class="text-white">70 kuratierte Standorte</span>
          </h2>
          <p class="inline text-white max-w-[250px] mt-4 w-full">
            Nähere Informationen zu einzelnen Standorten der Industriekultur
            Sachsen-Anhalts finden Sie auf
            <a
              href="https://industrietourismus.de/"
              class="cursor-pointer text-t-green hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              >industrietourismus.de</a
            >.
          </p>
        </div>
        <TikMap @some-event="setRegion" :is-modal-open="isModalOpen"></TikMap>
      </div>
      <div
        ref="programmDrawer"
        class="h-screen bg-t-grey overflow-y-scroll hidden sm:block relative t-scroll-bar"
        :class="[isModalOpen ? 'w-full change' : 'w-0 outline-0']"
      >
        <button
          class="h-11 w-11 mt-4 mr-4 cursor-pointer self-end t-modal-close-button fix right-4 top-0 hidden sm:flex"
          :class="[isModalOpen ? 'opacity-1' : ' opacity-0']"
          @click="closeModalOverlay"
        >
          <span class="t-modal-close-icon">
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"
              ></path>
            </svg>
          </span>
        </button>
        <div class="p-4 h-full">
          <div class="py-16 text-t-green text-4xl italic font-bold">
            {{ aktuelleRegion }}
          </div>
          <div
            v-for="(ort, i) in getOrte(aktuelleRegion)"
            :key="ort + i"
            class="pb-10"
          >
            <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
            <span class="text-white text-2xl italic font-bold"
              >{{ ort.Institution }} <br />
            </span>
            <span class="text-white text-2xl italic font-light">
              {{ ort.AktionsortStraße }}, {{ ort.PLZ }}, {{ ort.Ortsname }}
            </span>
            <div class="max-w-[800px]">
              <span class="text-t-green italic text-xl font-light">
                Öffnungszeiten: {{ ort.Oeffnungszeit }}
                <br />
                <br />
              </span>
              <span
                class="text-white italic text-xl font-light whitespace-pre-wrap"
              >
                {{ ort.AktivitätTIK_2024 }}
              </span>
              <div v-if="ort.Infos !== ''">
                <span class="italic font-bold text-t-green">
                  <br />
                  Infos zum Standort: <br />
                </span>
                <a
                  :href="createLink(ort.Infos)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="italic text-white font-bold cursor-pointer hover:underline"
                  >
                    {{ ort.Infos }}
                  </span>
                </a>
              </div>
              <div v-if="ort.Webseite !== ''">
                <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
                <span class="italic font-bold text-t-green"> KONTAKT: </span>
                <a
                  :href="createLink(ort.Webseite)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span
                    class="italic font-bold text-t-green cursor-pointer hover:underline"
                  >
                    {{ ort.Webseite }}
                  </span>
                </a>
              </div>
            </div>
            <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
          </div>
        </div>
      </div>
      <div
        ref="programmModal"
        :class="[isModalOpen ? 'z-[1] block sm:hidden' : 'z-[-1] hidden']"
        class="fixed bottom-0 left-0 right-0 top-0 bg-t-grey t-modal-overlay t-scroll-bar"
      >
        <div class="t-modal-overlay-container">
          <div class="t-modal-overlay">
            <div class="t-modal-content-container text-white max-w-full p-4">
              <div>
                <div class="py-16 text-t-green text-4xl italic font-bold">
                  {{ aktuelleRegion }}
                </div>
                <div
                  v-for="(ort, i) in getOrte(aktuelleRegion)"
                  :key="ort + i"
                  class="pb-10"
                >
                  <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
                  <span class="text-white text-2xl italic font-bold"
                    >{{ ort.Institution }} <br />
                  </span>
                  <span class="text-white text-2xl italic font-light">
                    {{ ort.AktionsortStraße }},
                    {{ ort.PLZ.replace(/['"]+/g, "") }}, {{ ort.Ortsname }}
                  </span>
                  <div class="max-w-[800px]">
                    <p class="text-t-green italic text-xl font-light">
                      Öffnungszeiten: {{ ort.Oeffnungszeit }}
                      <br />
                      <br />
                    </p>

                    <span
                      class="text-white italic text-xl font-light whitespace-pre-wrap"
                    >
                      {{ ort.AktivitätTIK_2024 }}
                    </span>
                    <div v-if="ort.Infos !== ''">
                      <span class="italic font-bold text-t-green">
                        <br />
                        Infos zum Standort: <br />
                      </span>
                      <a
                        :href="createLink(ort.Infos)"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          class="italic font-bold cursor-pointer hover:underline"
                        >
                          {{ ort.Infos }}
                        </span>
                      </a>
                    </div>
                    <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
                    <span class="italic font-bold text-t-green">
                      KONTAKT:
                    </span>
                    <a
                      :href="ort.Webseite"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span
                        class="italic font-bold text-t-green cursor-pointer hover:underline"
                      >
                        {{ ort.Webseite }}
                      </span>
                    </a>
                  </div>
                  <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
                </div>
              </div>
            </div>
            <button
              class="h-11 w-11 mt-4 mr-4 cursor-pointer flex self-end t-modal-close-button"
              @click="closeModalOverlay"
            >
              <span class="t-modal-close-icon">
                <svg
                  class="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M12.12,10l4.07-4.06a1.5,1.5,0,1,0-2.11-2.12L10,7.88,5.94,3.81A1.5,1.5,0,1,0,3.82,5.93L7.88,10,3.81,14.06a1.5,1.5,0,0,0,0,2.12,1.51,1.51,0,0,0,2.13,0L10,12.12l4.06,4.07a1.45,1.45,0,0,0,1.06.44,1.5,1.5,0,0,0,1.06-2.56Z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TikMap from "@/components/TikMap.vue";
import DownArrowIcon from "@/components/DownArrowIcon.vue";
export default {
  name: "TourismusRegionen",
  components: { TikMap, DownArrowIcon },

  setup() {
    const tourismusRegionen = [
      {
        Region: "",
        Institution: "Altmark",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Altmark",
        Institution: "Agraneum Iden/Zentrum für Tierhaltung und Technik",
        PLZ: "39606",
        Ortsname: "Iden",
        AktionsortStraße: "Lindenstrasse 18",
        Oeffnungszeit: "10-15.00 Uhr",
        AktivitätTIK_2024:
          "Das Agraneum ist an diesem Tag  geöffnet, \nund es werden bedarfsweise  Sonderführungen durch die Sammlung angeboten.",
        Webseite: "https://agraneum.de/",
        Infos: "",
        TeilnahmeBestätigt: "04.04.2024",
      },
      {
        Region: "Altmark",
        Institution: "Arbeitskreis Salzwedeler Altstadt e.V. ",
        PLZ: "29410",
        Ortsname: "Salzwedel ",
        AktionsortStraße:
          "Altperverstraße/Nicolaistraße \nAltperverstraße 26/28",
        Oeffnungszeit: "14-17.00 Uhr",
        AktivitätTIK_2024:
          "Alter Hopfendarreturm Salzwedel\nInformation & Protest gegen den Abriss und Gespräche für dessen Erhalt und Umnutzung",
        Webseite: "Vereinsbüro Altperverstraße 26/28",
        Infos: "",
        TeilnahmeBestätigt: "07.03.2024",
      },
      {
        Region: "Altmark",
        Institution: "Kernkraftwerk Stendal",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "Keine Möglichkeit – Sicherheitsbedenken",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Altmark",
        Institution: "Landesfeuerwehrmuseum Stendal",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "erst 2025",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Altmark",
        Institution: "Museumsdorf Diesdorf",
        PLZ: "29413 ",
        Ortsname: "Diesdorf",
        AktionsortStraße: "Molmker Str. 23",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "TIK im Rahmen des landwirtschaftlichen Aktionstages 2024\nu.a. mit  Schmiedevorführungen und Mühlenbesichtigungen dazu  Kindermitmachaktionen & Musik mit Drehorgelorchester Hitzacker",
        Webseite:
          "https://www.museen-altmarkkreis.de/Freilichtmuseum-Diesdorf.html",
        Infos: "",
        TeilnahmeBestätigt: "02.04.2024",
      },
      {
        Region: "Altmark",
        Institution: 'Raseneisenerz Tangerhütte "Aus einem Guss" e.V. ',
        PLZ: "39517",
        Ortsname: "Tangerhütte",
        AktionsortStraße: "Bahnhofsvorplatz",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Präsentation einer 150 Jahre alten in Tangerhütte gegossenen Laterne auf dem Bahnhofsvorplatz\n\nStadtspaziergang zur Industriekultur in Tangerhütte um 10.30 Uhr und 14.00 Uhr von der Gußlaterne Bahnhofsvorplatz über die Alte Gießerei zum  Weltausstellungspavillion im Schloßpark ",
        Webseite:
          "https://www.industriekultur-tangerhuette.de/industriekultur.htm",
        Infos: "",
        TeilnahmeBestätigt: "31.03.2023",
      },
      {
        Region: "Altmark",
        Institution: "Schöpfwerk Vehlgast",
        PLZ: "39539",
        Ortsname: "Havelberg",
        AktionsortStraße: "Vehlgast 16",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Bürgerprojekt zur Reaktivierung\nSonderführung & Vortrag um 15.00 Uhr mit geselligem Austausch bei Kaffee und Kuchen",
        Webseite: "https://www.altes-schoepfwerk-vehlgast.info/\n\n",
        Infos: "https://industrietourismus.de/altes-schoepfwerk-vehlgast/",
        TeilnahmeBestätigt: "27.02.2024",
      },
      {
        Region: "Altmark",
        Institution: 'Traditionsverein "Erdöl-Erdgas" Salzwedel e.V.',
        PLZ: "29410",
        Ortsname: "Hansestadt Salzwedel",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: 'Traditionsverein "Erdöl-Erdgas" e.V.',
        Webseite: "erst 2025",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Altmark",
        Institution: "Tunnelhäuschen Bahnhof Stendal",
        PLZ: "39576",
        Ortsname: "Stendal",
        AktionsortStraße: "Bahnhofstraße 34",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Informationen zum Bürgerprojekt\nLicht- und Leseinstallation in Kooperation\nmit lokaler Buchhandlung",
        Webseite: "https://tunnelhaeuschen-stendal.de/",
        Infos: "",
        TeilnahmeBestätigt: "07.03.2024",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "Magdeburg-Elbe-Börde-Heide",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Eisenbahnclub Aschersleben (Romonta)",
        PLZ: "06449",
        Ortsname: "Aschersleben",
        AktionsortStraße: "Magdeburger Chaussee 2",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "www.eisenbahnclub-asl.de",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Fernmeldemuseum Bottmersdorf",
        PLZ: "39164",
        Ortsname: "Bottmersdorf",
        AktionsortStraße: "Walther-Rathenau-Strasse 1a",
        Oeffnungszeit: "10-16.00 Uhr",
        AktivitätTIK_2024:
          'Museumsöffnung unter dem Motto:\n"Die Wunder der Fernmeldetechnik, über Telegraphie und Telephonie zum Rundfunk"',
        Webseite: "http://www.fernmeldemuseum-bottmersdorf.de/home.htm\n\n",
        Infos: "https://industrietourismus.de/fernmeldemuseum-bottmersdorf/",
        TeilnahmeBestätigt: "12.02.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Gröninger Bad Salbke",
        PLZ: "39122",
        Ortsname: "Magdeburg",
        AktionsortStraße: "Gröninger Straße 2",
        Oeffnungszeit: "14-17.00 Uhr",
        AktivitätTIK_2024:
          "14.30 / 15.30/ 16.30 Uhr\n- Sonderführung durch das Göninger Badehaus\n- Stadtgang zum  Salbker Wasserturm mit Modell zur Entwicklungsmaßnahme \nRAW-Gelände",
        Webseite: "https://www.groeningerbad.de/",
        Infos: "",
        TeilnahmeBestätigt: "13.03.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Historische Gerberei Burg",
        PLZ: "39288",
        Ortsname: "Burg",
        AktionsortStraße: "Hainstraße 11-12",
        Oeffnungszeit: "",
        AktivitätTIK_2024:
          "Lesung Herbert Beesten & Gundula Ihlefeldt \nFörderverein der Schriftsteller e.V. ",
        Webseite: "www.heimatverein-burg.com\n\n",
        Infos: "https://industrietourismus.de/historische-gerberei-burg/",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Industrie- und Kunstmuseum Schönebeck (iMUSEt)",
        PLZ: "39218",
        Ortsname: "Schönebeck/Elbe",
        AktionsortStraße: "Ernst-Thälmann-Strasse 5a",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          'Aktionstag mit Eröffnung neuer Ausstellungen, Sonderführungen und Familienfest\n- Eröffnung der neuen Ausstellung "Zündmaschinen"\n\n- Eröffnung der Nebenausstellung "Städtebauliche Beeinflussungen durch die Industrielle Revolution und Transformationen in der Region und Schönebeck"\n\n- Eröffnung der Nebenausstellung im Außenbereich "Die Wechselwirkungen der industriellen Entwicklung mit der Entwicklung des Schienenverkehrs in der Region"\n\n- iMUSEt-Schiebepuzzles für Kids im Einsatz',
        Webseite: "https://imuset.de/\n\n",
        Infos:
          "https://industrietourismus.de/industrie-und-kunstmuseum-imuset/",
        TeilnahmeBestätigt: "12.02.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Kali-Bergwerk Zielitz/Kalimandscharo",
        PLZ: "39326",
        Ortsname: "Colbitz OT Zielitz",
        AktionsortStraße: "Kalimandscharo, Teichstraße 1",
        Oeffnungszeit: "10-16.00 Uhr",
        AktivitätTIK_2024:
          'Bergmannsverein Zielitz e.V. \n"Scholle von Calvörde" Bergtouren\n\n10.30 Uhr und 14.00 Uhr mit den Kameraden Matthias Schlesiger und Manfred Witzel\n\nTreffpunkt: Infopoint Halde II ca. 2 h über eine Gesamtstrecke von ca. 6,5 km davon ca. 3 km Anmarsch auf das 120 m Haldenplateau mit einem imposanten Blick auf  das Kaliwerk, die umliegenden Ortschaften, das Wasserstraßen-kreuz u.v.m. \n\nBitte mit festem Schuhwerk!\n\nEintritt gegen Spende',
        Webseite: "https://www.kalimandscharo.com/de/home/",
        Infos: "",
        TeilnahmeBestätigt: "07.03.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Kunsthof Bad Salzelmen",
        PLZ: "39218",
        Ortsname: "Schönebeck (Elbe) OT Bad Salzelmen",
        AktionsortStraße: "Badepark 1",
        Oeffnungszeit: "14-17.00 Uhr",
        AktivitätTIK_2024:
          "ab 14.00 Uhr Kunsthofführung auf Anmeldung, \n\nBei diesem Rundgang erklimmen Sie die Höhen des Gradierwerkes, gehen in den Soleturm, steigen hinab in die Tiefe zur verborgenen Viktoriaquelle und bestaunen die kleinste produzierende Pfannensaline Deutschlands, inklusive Schausieden.\n\nSie begeben sich auf eine spannende Erlebnisreise in die Welt der Salz-, Salinen- Industrie- und Kurgeschichte und erfahren auf unterhaltsame Art und Weise, von einem ausgebildeten Fremdenführer, viel über die Region und die Menschen im Wandel der Zeit.\n\nIm Anschluss an die Führung haben Sie die Möglichkeit allein den Soleturm bis in die sechste Etage zu erkunden und können sich im Schausiedehaus die fortlaufend gezeigten Infofilme zum Gradierwerk, dem Schausieden und dem Soleturm ansehen.\n\nPreis pro Person:\n7,00 € Erw.,  5,00 €  Kinder (6-12 Jahre)\n\nTreffpunkt:\nTourist-Info „Am Soleturm“ (Rotes Haus)\n\nDauer: ca. 1 Stunde\n\nUm telefonische Anmeldung wird gebeten: 03928 705555\n\nab 14.30 Uhr bis 17.00 Uhr\nQR- Code Rundgang + Info Filme\n\nBegeben Sie sich allein auf eine spannende Entdeckungsreise in die Salz- und Kurgeschichte unserer Stadt. \n\nIm Roten Haus, im Soleturm und im Schausiedehaus finden Sie Infotafeln, dort kann per Handy der QR-Code gescannt und viele spannende Informationen abgerufen werden. \n\nSie können sich dort Videos ansehen, Audiodateien hören  oder in pdf-Dateien lesen und Bilder ansehen.\n\nIm Schausiedehaus werden fortlaufend kurze Infofilme zum Gradierwerk, dem Schausieden und dem Soleturm gezeigt.\n\nPreis pro Person:\n4,00 € Erw.,  2,00 €  Kinder (6-12 Jahre)\n\nTreffpunkt:\nTourist-Info „Am Soleturm“ (Rotes Haus)\n\nDauer: individuell\n",
        Webseite: "www.solepark.de\n\n\n\n",
        Infos: "https://industrietourismus.de/kunsthof-bad-salzelmen/",
        TeilnahmeBestätigt: "13.03.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Optische Telegraphie in Preußen e.V. ",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          'Folgende im Gebiet von Sachsen-Anhalt liegende Stationen der historischen\n"Optischen Telegraphenlinie Berlin-Koblenz" sind an diesem Tag geöffnet:\n\nStation Nr. 11 - Ziegelsdorf, Telegraphenberg\nvoll funktionsfähiger Signalmast\nOT Ziegelsdorf \nTelegrafenstraße \n39291 Möckern\nFührungen und Besichtigung: 14.00 – 17.00 Uhr\nAnsprechpartner für Rückfragen: Torsten Wambach (Tel.: 01 60 / 8 10 17 07)\n\nStation Nr. 16 - Ampfurth, Schlossturm\nSchloss- und Telegraphenturm\nOT Ampfurth \nAlte Schermcker Str. 14 c\n39387 Oschersleben (Bode) \nFührungen und Besichtigung: 14.00 – 17.00 Uhr\nAnsprechpartner für Rückfragen: Achim Röttger (Tel.: 03 94 07 / 57 47)\n\nStation Nr. 18 - Neuwegersleben\nStationsgebäude mit funktionsfähiger Telegraphenanlage, \nMuseum zur Geschichte und Technik der optischen Telegraphie \nHornhäuser Straße, Telegrafenberg\t\nOT Neuwegersleben 39396 Am Großen Bruch\n\nFührungen und Besichtigung:\n14.00 – 17.00 Uhr\nAnsprechpartner für Rückfragen:\nHenning Fuchs Tel.: 0152/01690041\n\nStation Nr. 19 - Pabstorf\nSommeringberg\nDauerausstellung im Heimatmuseum Dedeleben \nErnst-Thälmann-Str.64b\nOT Dedeleben\n38836 Huy\n\nFührungen und Besichtigung:\n14.00 – 17.00 Uhr\n\nAnsprechpartner für Rückfragen:\nUwe Krebs Tel.: 03 94 22 /6 12 18\n',
        Webseite:
          "http://www.telegraphenradweg.de/startseite.html\n\nhttps://www.optische-telegrafie.de/\n\nhttps://www.museum-dedeleben.de/",
        Infos: "https://industrietourismus.de/optische-telegraphenlinie/",
        TeilnahmeBestätigt: "28.03.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Pretziner Wehr",
        PLZ: "39217",
        Ortsname: "\nSchönebeck, OT Pretzin",
        AktionsortStraße: "Am Weinberg",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "frei zugänglich",
        Webseite: "",
        Infos: "https://industrietourismus.de/pretziener-wehr/",
        TeilnahmeBestätigt: "02.04.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "RAW-Gelände Magdeburg",
        PLZ: "39122",
        Ortsname: "Magdeburg",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "Führungen",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Schiffshebewerk MD-Rothensee",
        PLZ: "39126",
        Ortsname: "Magdeburg",
        AktionsortStraße: "Rothensee Schiffshebewerk",
        Oeffnungszeit: "10-14.00 Uhr",
        AktivitätTIK_2024:
          'jeweils um 10.00 / 11.00 / und 12.00 Uhr werden Sonderführungen zur Technikgeschichte durch die Urania Magdeburg e.V. kostenfrei angeboten.\n\nTreffpunkt ist der Parkplatz vor der "Gaststätte zum Anker". ',
        Webseite: "https://www.magdeburg-tourist.de/\n\n",
        Infos:
          "https://industrietourismus.de/schiffshebewerk-magdeburg-rothensee/",
        TeilnahmeBestätigt: "13.02.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Technikmuseum Magdeburg",
        PLZ: "39112",
        Ortsname: "Magdeburg",
        AktionsortStraße: "Dodendorfer Straße 65",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Ankerpunkt Region Magdeburg\n\nvon 10-17 Uhr geöffnet\nEintritt: regulär 4 €, ermäßigt 2 €, \nKinder und Jugendliche frei\n\n- von 10-14.00 Uhr \nbietet der Förderverein ein Kinderprogramm an\n\n- von 10-15 Uhr \nSchaubetrieb in der historischen Druckerei mit Mitmachaktionen für die ganze Familie\n\n- um 15.00 Uhr \nspricht der Direktor Dr. Hajo Neumann über die Geschichte und Neukonzeption des Museums\n\n- zu wechselnden Uhrzeiten werden Kurzführungen, Depotführungen und Vorführungen des historischen Portalkranes angeboten\n\n- Der Förderverein stellt ein Projekt zur Objektvisualisierung mittels VR vor.\n\n- gegen Spende werden Getränke & kleine Snacks angeboten",
        Webseite: "https://www.magdeburg.de//technikmuseum\n\n",
        Infos: "https://industrietourismus.de/technikmuseum-magdeburg/",
        TeilnahmeBestätigt: "12.02.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Waschmittelmuseum Genthin, Altes Badehaus",
        PLZ: "39307",
        Ortsname: "Genthin",
        AktionsortStraße: "Altes Badehaus Ziegeleistraße 56",
        Oeffnungszeit: "14-17.00 Uhr",
        AktivitätTIK_2024:
          "15:00 Uhr Erzählcafé \nmit Genthiner Waschfrauen \n\nDie Koordinatorin der FrauenOrte Sachsen-Anhalt wird mit den Zeitzeuginnen über ihre Arbeitsbiografien sprechen und warum sie seit\nJahren ehrenamtlich den Fortbestand dieses einzigartigen Waschmittelmuseums Deutschlands absichern.\n\nWichtiger Hinweis: \nDer Zugang zum Museumsgelände ist sowohl von der Ziegeleistraße als auch direkt vom Genthiner Stadtzentrum über die Fußgängerbrücke ins Gewerbegebiet am Elbe-Havel-Kanal möglich. \n\nDer Eintritt ist frei, um Spende für den Erhalt wird gebeten. \n\nKontakt:\nAnke Triller \n(Koordinatorin der FrauenOrte Sachsen-Anhalt) \ninfo@frauenorte.net",
        Webseite:
          "https://henkel-pensionaere.de/mediathek/aktuelles/1619-das-henkel-waschmittel-museum-in-genthin",
        Infos: "",
        TeilnahmeBestätigt: "23.02.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Wasserturm Salbke",
        PLZ: "\n39122",
        Ortsname: "Magdeburg",
        AktionsortStraße: "Alt Salbke 110 c",
        Oeffnungszeit: "14-17.00 Uhr",
        AktivitätTIK_2024:
          "14.30 / 15.30/ 16.30 Uhr\n- Sonderführung zum Projekt Salbker Wasserturm mit Modell zur Entwicklungsmaßnahme RAW-Gelände \n\n- Stadtgang zum benachbarten Göninger Badehaus ",
        Webseite: "http://www.turmpark.de/turmpark",
        Infos: "",
        TeilnahmeBestätigt: "13.03.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Wissenschaftshafen Magdeburg",
        PLZ: "39106",
        Ortsname: "Magdeburg",
        AktionsortStraße: "Elbe-Silo B, Werner-Heisenberg-Straße 19-25",
        Oeffnungszeit: "10-13.00 Uhr",
        AktivitätTIK_2024:
          '10-13.00 Uhr \nBaustellenführungen durch die "Reichseinheitsspiecher" und deren Umnutzung mit Bauleiter Herrn Paulus & Architekt Uwe Thal ',
        Webseite: "https://www.architekturbüro-thal.de/",
        Infos: "",
        TeilnahmeBestätigt: "28.02.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Ziegelei Hundisburg",
        PLZ: "39343",
        Ortsname: "Hundisburg",
        AktionsortStraße: "Jacob-Bührer-Strasse 2",
        Oeffnungszeit: "14-17.00 Uhr",
        AktivitätTIK_2024:
          "- Sonderführungen\n- Feldbahnfahrten\n- Kreativarbeiten in der Keramikwerkstatt für die ganze Familie\n- Selbstversuch Handstrichziegel herzustellen",
        Webseite: "https://www.ziegelei-hundisburg.de/\n\n",
        Infos: "https://industrietourismus.de/ziegelei-hundisburg/",
        TeilnahmeBestätigt: "07.02.2024",
      },
      {
        Region: "Magdeburg-Elbe-Börde-Heide",
        Institution: "Ziegelei Wetseregeln",
        PLZ: "33607",
        Ortsname: "Westeregeln",
        AktionsortStraße: "Meisenstrasse 65",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "Kontakt steht aus",
        Webseite: "www.museumsziegelei.de",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "Harz",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Harz",
        Institution: "Alte Krellsche Schmiede Wernigerode",
        PLZ: "38855",
        Ortsname: "",
        AktionsortStraße: "Marktplatz 10",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "info@wernigerode-tourismus.de",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Harz",
        Institution: "Bergwerk Braunsesumpf Hüttenrode (Blankenburg)",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "erst 2025",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Harz",
        Institution:
          "Besucherbergwerk Drei Kronen & Ehrt Pyritlagerstätte Elbingerode",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "erst 2025",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Harz",
        Institution: "Burg und Schloss Allstedt",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "erst 2025",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Harz",
        Institution: "Carlswerk Mägdesprung",
        PLZ: "06493",
        Ortsname: "",
        AktionsortStraße: "Schloßplatz 3",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "?",
        Webseite: "www.harzgerode-tourismus.de",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Harz",
        Institution: "Eisenmuseum in der Fürst Stolberg - Hütte Ilsenburg",
        PLZ: "38871",
        Ortsname: "Ilsenburg (Harz)",
        AktionsortStraße: "Eduard-Schott-Straße 3",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "Eisenguß Ofentüren Ausstellung in der Gußhalle ",
        Webseite: "https://www.heimatverein-ilsenburg.de/eisen-museum/",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Harz",
        Institution: "Eisernes Band - Bahnhof Gerbstedt",
        PLZ: "06347",
        Ortsname: "Gerbstedt",
        AktionsortStraße: "Bahnhofsstraße 21",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          'Erstmals ist das Eiserne Band aus beiden Richtungen als historische industrielle Verbindung erlebbar!\n\n\n- 10.00 bis 12.00 Uhr \ngeführte Radtour durch Halle (Saale) \nauf der Hafenbahntrasse zwischen dem ehem. Thüringer Bahnhof und dem ehem. Sophien-hafen, dabei wird insbesondere auf die ehem. ca. 30 Gleisanschlüsse Bezug genommen\n\n- 10.00 bis 16.00 Uhr\nVorstellung des künftigen Netzwerkes "Am Eisernen Band" im Bahnhof "Drei Annen Hohne" der Harzer Schmalspurbahnen\n\n- 10.00 bis 17.00 Uhr \nBahnhof Gerbstedt - Öffnung der Interims-Ausstellung zur Geschichte der Halle-Hettstedter Eisenbahn auf dem Güterboden\n\n\nSternfahrt mit zwei historischen Bussen der Marke Saurer von Halle und Wernigerode nach Harzgerode und zurück mit vielfältigem "Unterwegs-Programm".\n\nHalle-Beesenstedt-Gerbstedt-Hettstedt-Harzgerode-Halle\n \n- 9:30 Uhr Abfahrt am Busbahnhof des Hbf. Halle (Saale)\n\n- Besichtigung des historischen Straßenbahn-depots in Halle, Seebener Straße\n\n- Führung am ehemaligen Wasserturm der Halle-Hettstedter Eisenbahn in Beesenstedt\n\n- Imbiss im Bahnhof Gerbstedt mit Besichtigung der Ausstellung zur HHE\n\n- Fahrt mit der Mansfelder Bergwerksbahn vom Bf Siersleben bis Bf Kupferkammerhütte in Hettstedt und Besichtigung der neuen Ausstellung im Lokschuppen sowie der  Fahrzeugausstellung auf dem Freigelände\n\n- Besichtigung der Ausstellung Harz-Kugeleum zu Bergbau und Regionalgeschichte im Schloss Harzgerode\n\nRückankunft am Busbahnhof des Hbf. Halle (Saale) gegen 19:00 Uhr.\n\nDer Preis pro Teilnehmer mit Busfahrt und Eintrittsgeldern in die Museen einschließlich Kaffee & Kuchen in Harzgerode beträgt 65 Euro für Erwachsene und 39 Euro für Kinder (bis 14 Jahre).\n\nDen Mittagsimbiss im Bahnhof Gerbstedt trägt jeder Teilnehmer bitte selbst.\n\n\n\nWernigerode-Todtenrode-Strassberg-Harzgerode-Wernigerode\n- 9:45 Uhr Abfahrt am Hbf. Wernigerode\n\n- Besichtigung des Luftfahrtmuseums in Wernigerode\n\n- Mittagessen im Restaurant „Zum alten Forsthaus“ in Todtenrode\n\n- Über- und unter-Tage-Führung durch das Besucher-Bergwerk "Grube Glasebach" in Straßberg\n \n- Befahrung eines Teils des Glasebacher Stollens mit der Grubenbahn\n\n- Besichtigung der Ausstellung Harz-Kugeleum zu Bergbau und Regionalgeschichte im Schloss Harzgerode\n\nRückankunft am Hbf. Wernigerode gegen\n19:00 Uhr\n\nDer Preis pro Teilnehmer mit Busfahrt und Eintrittsgeldern in die Museen einschließlich Kaffee und Kuchen in Harzgerode beträgt 65 Euro für Erwachsene und 39 Euro für Kinder (bis 14 Jahre).\n\nDas Mittagessen im Forsthaus Todtenrode trägt jeder Teilnehmer bitte selbst.\n\nBitte melden Sie sich bei Interesse für die geführte Fahrradtour auf der Hafenbahn sowie beide Busfahrten via Mail bis zum 12. April 2024 unter info@halle-hettstedter-eisenbahn.de an.',
        Webseite: "https://hhe.de/",
        Infos: "",
        TeilnahmeBestätigt: "28.03.2024",
      },
      {
        Region: "Harz",
        Institution: 'Erlebnisbergwerk "Glasebach" Harzgerode',
        PLZ: "06493",
        Ortsname: "Harzgerode OT Straußberg",
        AktionsortStraße: "Glasebacher Weg",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          '- Zusatzöffnung Schachthalle & Haspelkammer\n- Montanverein Sonderöffnung Kuhstollen\n\nsiehe auch Programm "Am Eisernen Band" Station der Bustour Wernigerode-Harzgerode',
        Webseite: "https://grubeglasebach.afgharz.eu/",
        Infos: "",
        TeilnahmeBestätigt: "24.03.2024",
      },
      {
        Region: "Harz",
        Institution: "Erlebniszentrum Bergbau Röhrigschacht Wettelrode",
        PLZ: "06526 ",
        Ortsname: "Sangerhausen",
        AktionsortStraße: "Lehde 17",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          'Ankerpunkt Mansfelder Land\n\n- Schachterkundungen unter Tage\n\n- verschiedene Spiele und Erkundungsangebote für Kinder\n\n- Präsentation der regionalen Bergbauvereine\n\n- Photoausstellung des Projektes Revierpioniere "Wasserkraft die Kunstwerke schafft"\n\n- Filmvorführungen (historische Aufnahmen)\n\n- Erklimmen des historischen Fördergerüstes bis zur ersten Plattform\n\n\n',
        Webseite: "https://www.roehrigschacht.de/de/\n\n",
        Infos: "https://industrietourismus.de/roehrigschacht-wettelrode/",
        TeilnahmeBestätigt: "26.03.2024",
      },
      {
        Region: "Harz",
        Institution: "Harzer Schmalspurbahnen Wernigerode",
        PLZ: "\n38855 ",
        Ortsname: "Wernigerode",
        AktionsortStraße: "Friedrichstraße 151",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "2025",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Harz",
        Institution: "Harzer Werke Blankenburg",
        PLZ: "38889",
        Ortsname: "Blankenburg (Harz)",
        AktionsortStraße: "Michaelsteiner Strasse 29",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "www.harzerwerke.de",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Harz",
        Institution: "Höhlenwohnungen Langenstein",
        PLZ: "38895 ",
        Ortsname: "Langenstein",
        AktionsortStraße: "Schäferberg 23",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Sonderführungen mit Voranmeldung \nüber die Stadtinformation Halberstadt\nTel.  03941 551815",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "06.03.2024",
      },
      {
        Region: "Harz",
        Institution: "Hüttenmuseum Thale",
        PLZ: "06502",
        Ortsname: "Thale",
        AktionsortStraße: "Walther-Rathenau-Straße 1",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          'Ankerpunkt Harz\n\n11:00 Uhr\nim Dampfmaschinengebäude auf dem Großparkplatz „An der Hütte“ in 06502 Thale\nVortrag von Heiko Golla\n\nDer Vortrag beweist die Bedeutung der Eisenbahn für die Entwicklung des Eisenhüttenwerkes Thale. Heiko Golla, Kenner der Eisenbahngeschichte von Thale, wird die Geschichte des Transports von Rohstoffen und Waren einschließlich der Werksanschlüsse und der Entwicklung des Fuhrparks ab 1862 über einen Zeitraum von 130 Jahren sichtbar machen.\n\nca. 12:15 Uhr\nFührung an der Dampfmaschine Nr. 7\n\n\n15.00 Uhr \nLesung Bettina Fügemann vom Förderverein der Schriftsteller e.V „Finkenmanöver“ \n\nDie Geschichte der Autorin Bettina Fügemann erzählt vom Finkenmanöver im Harz, das jedes Jahr zu Pfingsten stattfindet. Durch die Geschichte schwirren Buchfinken, die uns zu Marie führen. Der Vogelfänger Karl liebt Marie, muss jedoch Soldat werden und in die Gräben Frankreichs ziehen.\n\nIn Koopertaion mit dem Landesliteraturprojekt „Industriekultur und die Rolle der Frauen" des Förderverein der Schriftsteller e.V..\n\nDer Eintritt ist frei. \nUm eine Spende wird gebeten.',
        Webseite: "https://hüttenmuseum-thale.de\n\n",
        Infos: "https://industrietourismus.de/huettenmuseum-thale/",
        TeilnahmeBestätigt: "12.03.2024",
      },
      {
        Region: "Harz",
        Institution: "Luftfahrtmuseum Wernigerode",
        PLZ: "38855",
        Ortsname: "Wernigerode",
        AktionsortStraße: "Gießerweg 1",
        Oeffnungszeit: "10-18.00 Uhr",
        AktivitätTIK_2024:
          'Sonderführungen zum TIK\n\n- Online-Buchung empfohlen (Quick Check-In)\n- Kostenfreie Audioführung via Smartphone\n- Kostenloses W-LAN im gesamten Museum\n- Hangars sind unbeheizt\n- Die Ausstellung in den Hangars ist barrierefrei, die Transall auf dem Dach ist über eine Treppe zu erreichen.\n- Haustiere müssen leider draußen bleiben.\n\nsiehe Programm " Am Eisernen Band"\nStation der Bustour Wernigerode-Harzgerode',
        Webseite: "https://www.luftfahrtmuseum-wernigerode.de/",
        Infos: "",
        TeilnahmeBestätigt: "26.03.2024",
      },
      {
        Region: "Harz",
        Institution: "Mansfelder Bergwerksbahn",
        PLZ: "06308",
        Ortsname: "Benndorf",
        AktionsortStraße: "Hauptstraße 15",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          'Sonderfahrten – diverse Aktionen - siehe auch Programm "Am Eisernen Band"\n\n- Personenzug ab Benndorf \n9:40 Uhr, 11:40 Uhr, 13:40 Uhr, 15:40 Uhr\n\n- Führungen Kupferkammerhütte \n10:30 Uhr, 12:30 Uhr, 14:30 Uhr / nach Bedarf\n\n- Treffpunkt zur Führung am Uhrenturm Kupferkammerhütte\n\n- Dauer einer Führung etwa 1 Stunde\n\n- Führung durch das ehemalige Stellwerk mit Uhrenturm\n\n- Führung durch den historischen Lokschuppen inkl. neuer Ausstellung\n\n- Führung über das Freigelände\n\n- Fahrzeugausstellung historischer Schienenfahrzeuge\n\n- Souvenirverkauf, kleine Imbissversorgung\n\n- Temporäre Stempelstelle „Sonderstempel Zirkelschacht und Lok 11 der MBB“\n\n- Bus-Shuttle zum Mansfeld Museum im Humboldt-Schloss\n\n- Sonderausstellung Eisenbahnen im Mansfelder Land im Mansfeld-Museum\n\n- Vorträge im Mansfeld-Museum, Dampfmaschinenführungen auf Bedarf',
        Webseite: "https://www.mansfelder-bergwerksbahn.de/\n",
        Infos: "\nhttps://industrietourismus.de/mansfelder-bergwerksbahn/",
        TeilnahmeBestätigt: "12.03.2024",
      },
      {
        Region: "Harz",
        Institution: "Mansfeldmuseum im Humboldt-Schloss Hettstedt",
        PLZ: "06333 ",
        Ortsname: "Hettstedt Burgörner-Altdorf",
        AktionsortStraße: "Schloßstr. 7",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          'Themenführungen &  Shuttle der MBB \n\nDie Fahne von Grigorok Gerbstedt als \nKooperation zwischen dem Mansfeld-Museum im Humboldt-Schloss und dem Förderverein Mansfeld-Museum e. V.\n \nVon 10-17 Uhr geben die Mitglieder des Fördervereins mit verschiedenen Sonderführungen einen Einblick in die Themenvielfalt des Museums.\n\nDabei gibt es Wissenswertes über die Zeugnisse der Hüttentechnik oder die Walz- und Drahtziehmaschinen im Freigelände.\n\nBei einem Blick in die Tiefe des Lichtlochs 24 gibt es die Geschichte des Schlüsselstollens und seine heutigen Funktion zu erfahren.\n\nDer 1:1 Nachbau, der von Carl Friedrich Bückling gebauten Dampfmaschine, die 1785 auf dem König-Friedrich-Schacht in Betrieb ging und damit die Industrialisierung Preußens einleitete, ist in Bewegung zu erleben.\n\nUnsere kleinen Besucher erleben kurze Geschichten beim Gang durch den "Museumsstolln", aus dem sie anschließend selbstständig ausfahren dürfen. \n\nZusätzlich haben wir geplant den Tag mit einem historischen Film im Festsaal des Museums ausklingen zu lassen. \n\nGanz im Sinne der Nachhaltigkeit, richtet die Mansfelder Bergwerksbahn (mit der wir eisern verbunden sind) einen Shuttle von ihrem Aktionsort, der Hettstedter Kupferkammerhütte, zum Parkplatz des Mansfeld-Museums ein, um dem Publikum ein gebündeltes Erlebnis zu bieten sowie kurze Fahrten mit vielen Fahrzeugen zu vermeiden.',
        Webseite: "https://www.mansfeld-museum-hettstedt.de/\n\n",
        Infos: "https://industrietourismus.de/humboldt-schloss-hettstedt/",
        TeilnahmeBestätigt: "12.03.2024",
      },
      {
        Region: "Harz",
        Institution: "Schaubergwerk Büchenberg Elbingerode",
        PLZ: "38875",
        Ortsname: "Elbingerode (Harz)",
        AktionsortStraße: "Büchenbergstraße 2",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Besichtigung und Sonderführungen zu den historischen Bergmaschinen & Stollen unter Tage.",
        Webseite: "https://www.schaubergwerk-elbingerode.de/",
        Infos: "",
        TeilnahmeBestätigt: "07.02.2024",
      },
      {
        Region: "Harz",
        Institution: "Schmidt-Schacht Helbra",
        PLZ: "06311",
        Ortsname: "An d. Hütte 2",
        AktionsortStraße: "Helbra",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Ausstellung von historischen Bergmannsausstattungen und Maschinen.",
        Webseite: "https://www.erlebnisweltkupfer.de/",
        Infos: "",
        TeilnahmeBestätigt: "15.03.2024",
      },
      {
        Region: "Harz",
        Institution: "Stadtmuseum Ilsenburg",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "2025",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "Anhalt-Dessau-Wittenberg",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Alte Schmiede - August Reinhardt Gräfenhainichen",
        PLZ: "06773",
        Ortsname: "Gräfenhainichen",
        AktionsortStraße: "Marktstraße 10",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "- Sonderführungen bei Bedarf \n\n- Schmiedefeuer und Schauschmieden\n\n- Das Schauschmieden ist frei zugänglich.\n\n- Auf dem Hof gibt es Geschichte(n) über das Fahrrad insbesondere auch aus Gräfenhainichen und über Marianne eine Frau mit Geschäftssinn und Weitblick.\n\n- Weitere Besichtigungen der Ausstellungs-räume sind nur mit Führung möglich.\n\nPreis 5,00€ pro für Erwachsene. \n\nWir werden einen kleinen Imbiss mit Getränken aller Art und Würstchen bzw. nachmittags Kuchen bereithalten.",
        Webseite: "https://www.eisen-reinhard.de/",
        Infos: "",
        TeilnahmeBestätigt: "26.03.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Dampfsägewerk Plossig/Annaburg",
        PLZ: "06925",
        Ortsname: "",
        AktionsortStraße: "Lebiener Str. 49 b",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "2025",
        Webseite: "www.gft-plossig.de",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Darre Samentrocknung Annaburg",
        PLZ: "06925",
        Ortsname: "Annaburg",
        AktionsortStraße: "Lebiener Weg 6",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Sonderführungen durch die Landesdarre für max. 20 Personen\n10.00 Uhr/12.00 Uhr/ 14.00 Uhr/16.00 Uhr\nUm Voranmeldungen wird gebeten. Tel. +49 35385 31370 ",
        Webseite:
          "https://landeszentrumwald.sachsen-anhalt.de/ueber-uns/landesdarre",
        Infos: "",
        TeilnahmeBestätigt: "\n14.02.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Dessau-Wörlitzer Eisenbahn",
        PLZ: "06844",
        Ortsname: "Dessau-Roßlau",
        AktionsortStraße: "Albrechtstraße 48",
        Oeffnungszeit: "",
        AktivitätTIK_2024:
          "Verbindung zum Welterbe Dessau-Wörlitzer Gartenreich/ Öffnung und Baustellenführung im Bahnhof Wörlitz",
        Webseite:
          "https://www.dvv-dessau.de/verkehr/fahrplan-woerlitzer-eisenbahn/",
        Infos: "",
        TeilnahmeBestätigt: "28.03.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: 'Fahrradladen Bitterfeld (Hersteller Marke "Irene")',
        PLZ: "06749",
        Ortsname: "Bitterfeld",
        AktionsortStraße: "Burgstrasse 8",
        Oeffnungszeit: "10-15.00 Uhr",
        AktivitätTIK_2024:
          "Sonderführungen durch eine der letzten Fahrradmanufakturen inkl. Einblicke in die historische Zweiradwerkstatt.",
        Webseite:
          "https://www.facebook.com/p/Irene-Fahrrad-Haus-100089951304444/",
        Infos: "",
        TeilnahmeBestätigt: "09.02.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Fahrzeugmuseum Stassfurt",
        PLZ: "39418",
        Ortsname: "Staßfurt",
        AktionsortStraße: "Berlepsch-Strasse 14",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "Sonderführungen  DDR-Fahrzeuge",
        Webseite: "http://www.fahrzeugmuseum-gloethe.de/",
        Infos: "",
        TeilnahmeBestätigt: "08.02.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Ferropolis - Stadt aus Eisen - Gräfenhainichen",
        PLZ: "06773",
        Ortsname: "Gräfenhainichen",
        AktionsortStraße: "Ferropolistraße 1",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Ankerpunkt ERIH\n- Action mit Real Life Guys\n- Barfußpfad & Kinderspiel",
        Webseite: "https://www.ferropolis.de/de/cms/\n\n",
        Infos: "https://industrietourismus.de/ferropolis/",
        TeilnahmeBestätigt: "28.03.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Heimatmuseum Aken (Schifffahrt)",
        PLZ: "06385",
        Ortsname: "Aken / Elbe",
        AktionsortStraße: "Köthener Strasse 15",
        Oeffnungszeit: "14-16.00 Uhr",
        AktivitätTIK_2024: "Sonderführung zur Elbschifffahrt",
        Webseite: "https://www.aken.de/",
        Infos: "",
        TeilnahmeBestätigt: "12.02.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Heizhaus Gröbern",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Industrie- und Filmmuseum Wolfen",
        PLZ: "06766",
        Ortsname: "Bitterfeld-Wolfen",
        AktionsortStraße: "Bunsenstraße 4",
        Oeffnungszeit: "10-16.00 Uhr",
        AktivitätTIK_2024:
          'Jeweils um 10:00, 12:00 und 14:00 Uhr beginnen geführte Rundgänge durch den Bereich Filmherstellung.\n\nDer Eintritt ist frei, eine Führungsgebühr wird nicht erhoben.\n\nZusätzlich bietet die Stadt Bitterfeld-Wolfen anlässlich des Stadtjubiläums 800 Jahre Bitterfeld vier Führungen in benachbarten Standorten der Industriekultur an:\n\n11.30 Uhr  Kulturhaus (45 Minuten)\n\n13.00 Uhr Kulturhaus (45 Minuten)\n\n11.30 Uhr Rathaus Wolfen (45 Minuten)\n\n13.00 Uhr Rathaus Wolfen (45 Minuten)\n\nDie Teilnehmerzahl ist jeweils auf 25 Personen begrenzt.\n\nWer möchte, kann so alle drei Orte an einem Tag besuchen.\n\n\nUm 14:00 Uhr findet im IFM eine Lesung mit Charlotte Buchholz statt. \nSie erzählt über die Generaldirektorin und zwei fiktive Arbeiterinnen aus dem Werk. Eine dokufiktionale Erzählung &  über die Welterfolge von Agfa und ORWO sowie die größte und teuerste Werbekampagne der DDR.\n\nIn Koopertaion mit dem Landesliteraturprojekt „Industriekultur und die Rolle der Frauen" des Förderverein der Schriftsteller e.V..',
        Webseite: "https://www.bernsteinundfilm.de/\n\n",
        Infos: "https://industrietourismus.de/industrie-und-filmmuseum-wolfen/",
        TeilnahmeBestätigt: "15.03.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Kali- und Bergbaumuseum Stassfurt",
        PLZ: "39148",
        Ortsname: "Staßfurt",
        AktionsortStraße: "Pestalozzistrasse 6",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "2025",
        Webseite: "www.salzgrafenhaus.de",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Kraftwerk & Kolonie Zschornewitz",
        PLZ: "06772",
        Ortsname: "Gräfenhainischen OT Zschornewitz",
        AktionsortStraße: "Karftwerksstraße 13",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "2025",
        Webseite:
          "https://www.kohle-dampf-licht-seen.de/staedte-sehenswuerdigkeiten-landschaften/werkssiedlung-zschornewitz",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Kreismuseum Bitterfeld (Bernsteinsammlung)",
        PLZ: "06749",
        Ortsname: "Bitterfeld-Wolfen",
        AktionsortStraße: "Kirchplatz 3",
        Oeffnungszeit: "10-16.00 Uhr ",
        AktivitätTIK_2024:
          "Im Kreismuseum Bitterfeld stehen die Synthetischen Edelsteine im Mittelpunkt, die seit dem 10. März 2024 in der neuen Sonderausstellung:\n\n„Gems through the lens – Syn-thetische Edelsteine in neuem Licht“ zu sehen sind.\n\nUm 11 Uhr und 13 Uhr wird es je eine Sonderführung zur Herstellung der Synthetiksteine und zur Ausstellung mit den beiden Künstlerinnen Justina Sieber & Dominique Nicole Daßler geben.\n\n\n\n",
        Webseite: "https://www.kreismuseum-bitterfeld.de/",
        Infos: "",
        TeilnahmeBestätigt: "22.03.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Kulturpalast Bitterfeld (KUPA)",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "erst 2025",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Kuperhammer Thießen",
        PLZ: "06868",
        Ortsname: "Coswig(Anhalt)OT Thießen",
        AktionsortStraße: "Kupferhammer 43",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Besichtigung des historischen Kuperhammers mit der Möglickiet zum Kaffeklatsch im Hofcafè.",
        Webseite: "http://www.kupferhammer-thiessen.de/",
        Infos: "",
        TeilnahmeBestätigt: "08.02.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Nahverkehrsfreunde Dessau e.V.",
        PLZ: "06844",
        Ortsname: "Dessau-Roßlau",
        AktionsortStraße: "Busbahnhof",
        Oeffnungszeit: "11-17.00 Uhr",
        AktivitätTIK_2024:
          "Drei geführte Bustouren mit dem historischen Doppeldeckerbus zu den Stätten der industriellen Entwicklung in Dessau-Roßlau unter dem Motto:\n\n„Von der Conti-Gas und Fine bis Junkers“\n\n11:00 / 13:00 / 15:00 Uhr\n\nAbfahrt Hauptbahnhof Steig D\nStation 1\nWörlitzer Platz  - Deutsche Continental Gas Gesellschaft\n\nStation 2\nWaggonbau - Weiterentwicklung der DCGG bis zur Dessauer Waggonbaufabrik\n\nStation 3 \nAm Leipziger Tor - Berlin-Anhaltische Maschinen AG (BAMAG) \n\nStation 4  \nAn der Fine - Zuckerraffinerie\n\nStation5\nBrauereistraße - Schultheiß Brauerei\n\nStation 6\nAm Junkerswerk - Kaloriferwerk Junkalor\n\nStation 7\nKühnauer Straße - Technikmuseum Hugo Junkers \n\n12:05 / 14:05 / 16:05 Uhr Ankunft Technikmuseum\n\nRückfahrten ab Technikmuseum zum Hauptbahnhof oder auch Bauhausmuseum /Rathaus 14:15 / 16:15 / 17:00 Uhr\n\nFahrpreise:  \n9,00 Euro normal, ermäßigt 6,00 Euro\n\nAn den Stationen besteht die Möglichkeit weitere Sonderführungen zu unternehmen und mit dem nachfolgenden Bus die Tour fortzusetzen.",
        Webseite: "http://www.nahverkehrsfreunde-dessau.de/index.html",
        Infos: "",
        TeilnahmeBestätigt: "27.02.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Porzellaneum Annaburg",
        PLZ: "06925",
        Ortsname: "Annaburg",
        AktionsortStraße: "Torgauer Strasse 68",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "erst 2025 (kein Personal)",
        Webseite:
          "https://annaburg-porzellan.de/\n\nhttps://industrietourismus.de/porzellaneum-annaburg/",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Rundfunk- und Fernsehtechnik Stassfurt",
        PLZ: "39418",
        Ortsname: "",
        AktionsortStraße: "Löderburger Strasse 73",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "2025",
        Webseite:
          "www.rft-verein-stassfurt.de\n\nhttps://industrietourismus.de/rundfunk-und-fernsehtechnik-stassfurt/",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Schiffermuseum Roßlau/Elbe",
        PLZ: "06862",
        Ortsname: "Roßlau/Elbe",
        AktionsortStraße: "Clara-Zetkin-Str. 31 ",
        Oeffnungszeit: "10-14.00 Uhr",
        AktivitätTIK_2024:
          "Sonderführung durch die größte Schifferausstellung des Landes mit historischen Schiffsmodellen und Ausstattungen.",
        Webseite: "https://maritime-museum.de/museum/ID214.html",
        Infos: "",
        TeilnahmeBestätigt: "15.03.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Schloßmuseum Bernburg (Mineraliensammlung)",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Schultheiß-Brauerei Dessau",
        PLZ: "06847",
        Ortsname: "Dessau-Roßlau",
        AktionsortStraße: "Brauereistraße",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Sonderöffnung mit Führungen über das Gelände und den historischen Gebäudekomplex\nVorstellung neuer Nutzungen durch die Vertreter von NEWKID & Musikgenossenschaft Dessau e.G.\n\n„Von der Conti-Gas und Fine bis Junkers“\nStation 5\nBrauereistraße - Schultheiß Brauerei der Bustour der Nahverkehrsfreunde Dessau e.V. (Infos siehe dort).",
        Webseite: "https://www.newkid.club/\n",
        Infos: "",
        TeilnahmeBestätigt: "28.03.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Spinndüsenmuseum Gröbzig",
        PLZ: "06388",
        Ortsname: "Gröbzig",
        AktionsortStraße: "Breitscheidstraße 15 ",
        Oeffnungszeit: "10-13.00 Uhr",
        AktivitätTIK_2024: "Sonderführung durch den Museums- & Sammlungsleiter",
        Webseite: "www.spinnduesenmuseum.de",
        Infos: "",
        TeilnahmeBestätigt: "15.03.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Technikmuseum Hugo Junkers e.V.",
        PLZ: "06846",
        Ortsname: "Dessau-Roßlau",
        AktionsortStraße: "Kühnauer Straße 161a",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Ankerpunkt ERIH Region Dessau mit  Verbindung zum Welterbe Bauhaus Dessau\n\n20.04.2024 Illumination des Museums mit Abendführungen ab 18.00-22.00 Uhr (Vorabend)\n\n21.04.2024 Vorführung des Windkanals\n- Vorträge & Sonderführungen zur Technikgeschichte\n\n\n„Von der Conti-Gas und Fine bis Junkers“ \nStation 7 \nKühnauer Straße - Technikmuseum Hugo Junkers der Bustour der Nahverkehrsfreunde Dessau e.V. (Infos siehe dort).",
        Webseite: "https://technikmuseum-dessau.org/\n\n",
        Infos: "https://industrietourismus.de/technikmuseum-hugo-junkers/",
        TeilnahmeBestätigt: "07.03.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Triebwagenmuseum Dessau e.V.",
        PLZ: "06844",
        Ortsname: "Dessau-Roßlau",
        AktionsortStraße: "An der Großen Halle",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "- Vorstellung der Maßnahmen zur Ertüchtigung der Großen Halle als Ausstellungs- und Abstellhalle anhand von Plänen und Entwurfszeichnungen\n\n- Sonderführung durch die Große Halle inklusive  Schmiede und Werkstatt\n\n- Sonderführung durch die Fahrzeugausstellung auf dem Freigelände  mit Vorführung des Eisenbahndrehkranes\n\n„Von der Conti-Gas und Fine bis Junkers“\nStation 2 \nWaggonbau - Weiterentwicklung der DCGG bis zur Dessauer Waggonbaufabrik der Bustour (Infos siehe dort)",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "28.03.2024",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "WASAG Hauptwerk Reinsdorf e.V.",
        PLZ: "06886",
        Ortsname: "Lutherstadt Wittenberg",
        AktionsortStraße: "Heuweg 13 a",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "- Infozentrum geöffnet\n\n- Sonderführung über das historische Werksgelände ca. 1h zum Sonderpreis 10 €  \n\n- max. 30 Personen \n\nUm Voranmeldung unter \njoachim-zander@freenet.de oder\n +49 172 3421689 wird gebeten.\n\n- Getränke, Kuchen & Wiener werden angeboten ",
        Webseite: "\n\nhttps://www.wasag-hauptwerk-reinsdorf.de/\n\n",
        Infos: "https://industrietourismus.de/wasag-haupt-werk-reinsdorf/",
        TeilnahmeBestätigt: "05.04.2024",
      },
      {
        Region: "Anhalt-Dessau-Wittenberg",
        Institution: "Zahna - Fliesen GmbH",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "2025",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "Halle-Saale-Unstrut",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Bergbaumuseum Deuben",
        PLZ: "06682",
        Ortsname: "Teuchern OT Deuben",
        AktionsortStraße: "Schulstrasse 65",
        Oeffnungszeit: "11-16.00 Uhr",
        AktivitätTIK_2024:
          "Saisoneröffnung\n\n- Besichtigung von Ausstellung und Außengelände\n\n- Sonderführungen durch die Tiefbaustrecke (an diesem Tag kostenlos)\n\nKosten:\npro Person 6 €, ermäßigt 3 €, \nKinder unter 7 Jahren frei\n\nKaffee & Kuchen werden gegen Spende angeboten.",
        Webseite: "https://www.recarbo.de/bergbaumuseum-deuben/",
        Infos: "",
        TeilnahmeBestätigt: "07.02.2024\n14.03.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Borlachturm/Saline Bad Kösen",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "?",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Brikettfabrik Herrmannschacht Zeitz",
        PLZ: "06712",
        Ortsname: "Zeitz",
        AktionsortStraße: "Naumburger Strasse 99",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Ankerpunkt Revier Zeitz\n\nab 11:30 Uhr\nkombinierte Führungen - Brikettfabrik Herrmannschacht / Elsterfloßgraben\n\n11.30-12.30 Brikettfabrik\n\n12.30-13.30 Elsterfloßgraben\n\n13.30-14.30 Brikettfabrik\n\n14.30-15.30 Elsterfloßgraben\n\nEinzelführung: 5 € / kombinierte Führung: 9 €\n\nStartpunkt für alle Führungen: \nParkplatz der Brikettfabrik Herrmannschacht\n\nHeiße & kalte Getränke sind in unserer Revierstube erhältlich. \n\nAnmeldungen sind nicht erforderlich!",
        Webseite: "https://www.recarbo.de/brikettfabrik-herrmannschacht/\n\n",
        Infos: "https://industrietourismus.de/brikettfabrik-herrmannschacht/",
        TeilnahmeBestätigt: "21.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Deutsches Chemiemuseum Merseburg",
        PLZ: "06217",
        Ortsname: "Merseburg",
        AktionsortStraße: "Rudolf-Bahro-Straße 11",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "Besichtigung der Erlebniswelt Chemie",
        Webseite: "https://www.deutsches-chemie-museum.de/\n\n/",
        Infos:
          "https://industrietourismus.de/deutsches-chemie-museum-merseburg",
        TeilnahmeBestätigt: "28.03.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Drahtseilbahn Zeitz",
        PLZ: "06712",
        Ortsname: "Zeitz",
        AktionsortStraße: "Kalkstrasse 25",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "10-16.00 Uhr Sonderführungen durch die Sicherungsbaustelle der Bergstation - \nmit Einblicken in die Beschererfabrik, das Maschinen- und Kesselhaus der Drahtseilbahn anhand von Plänen und Bildern durch den Verein.\n\nKooperation zwischen dem Verein Historische Drahtseilbahn Zeitz und den Zeitzer Oldtimerfreunde.\n\nPräsentation der Industriekulturstandorte beim Zeitzer  Oldtimertreffen von 9.00Uhr bis 16.00Uhr durch den Moderator Thomas Vogel.\n\nUm 14.00Uhr beginnt die geführte Ausfahrt der Oldtimer im Raum Zeitz. \n\nDer Zifft e.V  (www.zifft.de) wird während des Sonntags ein Feuerwehrfahrzeug vor der Drahtseilbahn positionieren und auch an der Ausfahrt teilnehmen.\n\nOldtimer, wie LKW und  Traktoren werden Sonderfahrten zwischen Altstadt,  Drahtseilbahn und Hermannschacht unternehmen.",
        Webseite: "https://www.drahtseilbahn-zeitz.de/\nhttps://zifft.de/",
        Infos: "",
        TeilnahmeBestätigt: "21.03.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Drahtwerkstätten Jähnicke Weißenfels",
        PLZ: "06667",
        Ortsname: "Weißenfels",
        AktionsortStraße: "Große Burgstrasse 24",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "erst 2025",
        Webseite: "www.drahtwerkstaetten-weissenfels.de",
        Infos: "",
        TeilnahmeBestätigt: "13.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: 'Druckerei "Glück" Lützen/Schloßmuseum Lützen',
        PLZ: "06686",
        Ortsname: "Lützen",
        AktionsortStraße: "Schlossstrasse 4",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "erst 2025",
        Webseite: "www.stadt-luetzen.de",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Eisenbahnmuseum DB Halle",
        PLZ: "06112",
        Ortsname: "Halle (Saale)",
        AktionsortStraße: "Volkmannstraße 39",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "erst 2025",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Eisenbahnmuseum Kötzschau/Eisenbahnfreunde Kötzschau e.V",
        PLZ: "06237",
        Ortsname: "Leuna / OT Kötzschau",
        AktionsortStraße: "Am Bahnhof 27",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Ausstellung im historischen Bahnhofsgebäude in Verbindung mit Angeboten der Landesgartenschau 2024 in Bad Dürrenberg.",
        Webseite: "www.eisenbahnfreunde-koetzschau.com\n\n",
        Infos: "https://industrietourismus.de/eisenbahnmuseum-koetzschau/",
        TeilnahmeBestätigt: "14.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Elsterfloßgraben",
        PLZ: "06722",
        Ortsname: "Wetterzeube",
        AktionsortStraße: "Schulstraße 12",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Verbindungspunkt zur Landesgartenschau Sachsen-Anhalt Bad Dürrenberg 2024/ Herrmannschacht\n\nab 11:30 Uhr\nkombinierte Führungen - Brikettfabrik Herrmannschacht / Elsterfloßgraben\n\n11.30-12.30 Brikettfabrik\n\n12.30-13.30 Elsterfloßgraben\n\n13.30-14.30 Brikettfabrik\n\n14.30-15.30 Elsterfloßgraben\n\nEinzelführung: 5 € / kombinierte Führung: 9 €\n\nStartpunkt für alle Führungen:\nParkplatz der Brikettfabrik Herrmannschacht\n\nHeiße & kalte Getränke sind in unserer Revierstube erhältlich.\n\nAnmeldungen sind nicht erforderlich!",
        Webseite: "https://www.elsterflossgraben.com/\n\n",
        Infos: "https://industrietourismus.de/der-elsterflossgraben/",
        TeilnahmeBestätigt: "21.03.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Gasometer Halle (Planetarium)",
        PLZ: "06110",
        Ortsname: "Halle (Saale)",
        AktionsortStraße: "Holzplatz 5",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          'Umnutzung des alten Gasometers zum Großplanetarium\n\nBustour "Am Eisernen Band" Halle-Harzgerode (Info siehe dort)',
        Webseite: "https://www.planetarium-halle.de/",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Hydrierwerk Zeitz",
        PLZ: "06712",
        Ortsname: "Zeitz",
        AktionsortStraße: "Friedensstrasse 28",
        Oeffnungszeit: "10-14.00 Uhr",
        AktivitätTIK_2024:
          "Sonderführung im Betriebsmuseum mit Modellaustellung",
        Webseite:
          "https://www.gemeinde-elsteraue.de/de/museen/betriebsmuseum-damals-wars-des-ehemaligen-hydrierwerk-zeitz.html",
        Infos: "",
        TeilnahmeBestätigt: "07.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution:
          "Kachelwerke Osterfeld (Straßen- und Tiefbau GmbH) Osterfeld",
        PLZ: "06721 ",
        Ortsname: "Osterfeld",
        AktionsortStraße: "Stößener Weg 40",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "erst 2025",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Kulturstiftung Hohenmölsen",
        PLZ: "06679",
        Ortsname: "Hohenmölsen",
        AktionsortStraße: "Altmarkt 2",
        Oeffnungszeit: "10-16.00 Uhr",
        AktivitätTIK_2024:
          "Ausstellung Historische Stadtentwicklung Hohenmölsen (mit Schwerpunkt Bergbau)\nHaus der Stadtgeschichte, Altmarkt 2\n\nGedenkraum für überbaggerte Kirchen im Zeitz-Weißenfelser Braunkohlenrevier\nEvang. Stadtkirche St. Peter, Altmarkt",
        Webseite:
          "https://www.stadt-hohenmoelsen.de/de/kulturstiftung-hohenmoelsen.html",
        Infos: "",
        TeilnahmeBestätigt: "21.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Naumburger Straßenbahn",
        PLZ: "06618",
        Ortsname: "Naumburg",
        AktionsortStraße: "Heinrich-von-stephan-Platz 5",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          '14.15 Uhr zusätzliche öffentliche Sonderführung durch das historische Straßenbahndepot (Heinrich-von-Stephan-Platz 5, 06618 Naumburg/ Straßenbahn-Haltestelle "Poststraße")\n \nEinsatz des TW 17 (Lindner-Triebwagen von 1928) als Linienbahn von 13:49 bis 17:19 Uhr nach dem Sonntagsfahrplan alle 30 min.\n',
        Webseite: "https://naumburger-strassenbahn.de/\n\n",
        Infos: "https://industrietourismus.de/naumburger-strassenbahn/",
        TeilnahmeBestätigt: "18.03.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Saline Bad Dürrenberg LAGA2024",
        PLZ: "06231",
        Ortsname: "Bad Dürrenberg",
        AktionsortStraße: "Witzlebenweg 7a",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          '"Weißes Gold & Kohlenstaub"\n\nErkundungen mit Spaziergangsforscher Bertram Weisshaar in Kooperation mit Laga 2024\n\nBeginn Führung: 13.00 Uhr\n\nDauer ca. 2 1/2 Stunden\n\nStartpunkt: An der Kirche St. Bonifatius, Platz der Freiheit, Bad Dürrenberg\n(ca. 700 m von Bahnhof entfernt)\n\nFührungsentgelt:\n»Weißes Gold & Kohlenstaub« inklusive Eintritt Borlach-Museum: 7,00 € (ohne Eintritt LaGa)\n\nBesuch Landesgartenschau (optional):\nIm Anschluss an die Führung empfiehlt sich ein individueller Besuch der Landesgartenschau Bad Dürrenberg, mit Möglichkeit zur Besichtigung Gradierwerke, Modellsiedeanlage, Kohlebahntunnel, Kalt-Inhalierhalle – und jeder Menge Pflanzen.\n(Nicht Teil der Führung. Eintrittskarte der Landesgartenschau erforderlich.)\n\nBegrenzte Teilnehmerzahl!\n\nAnmeldung erforderlich per E-Mail an: anmeldung@atelier-latent.de',
        Webseite: "http://www.atelier-latent.de/\n\n",
        Infos: "https://laga-badduerrenberg.de/",
        TeilnahmeBestätigt: "26.03.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Schlackenhalde Rothenburg",
        PLZ: "06193",
        Ortsname: "Wettin-Löbejün",
        AktionsortStraße: "Schleuse 4A ",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "frei zugängliche Aussichtsplattform mit Schautafeln zur Geschichte der Halde",
        Webseite: "http://www.500-indu-rothenburg.de/schlackenhalde.htm\n\n",
        Infos: "https://industrietourismus.de/schlackehalde-rothenburg/",
        TeilnahmeBestätigt: "13.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Schuhmuseum Weißenfels",
        PLZ: "06667",
        Ortsname: "Weißenfels",
        AktionsortStraße: "Zeitzer Strasse 4",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Sonderführungen durch die Ausstellungen der  fast vollständigen Dokumentation der DDR-Schuhherstellung.\n\nMit Ergänzungen, besonders auch im Hinblick auf Schuhgestaltung und Design des 21. Jahrhunderts.\n\nBesonderes Augenmerk wir zum TIK auf die Exponate der technischen Anlagen, Maschinen, Konstruktionszeichnungen und Entwürfe aus der Schuhindustrie gelegt von denen in den vergangenen Jahren konnten  einige Objekte restauriert werden konnten.",
        Webseite:
          "https://weissenfels-erlebnis.de/Entdecken-/Museum-Wei%C3%9Fenfels-im-Schloss-Neu-Augustusburg/",
        Infos: "",
        TeilnahmeBestätigt: "13.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Spenglermuseum Sangerhausen",
        PLZ: "06526",
        Ortsname: "Sangerhausen",
        AktionsortStraße: "Bahnhofstraße 33",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Sonderschau von zwei Vitrienen zur regionalen Industriegeschichte.",
        Webseite: "https://www.spenglermuseum.de/de/",
        Infos: "",
        TeilnahmeBestätigt: "04.04.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Stadtwerke Halle (Technisches Kabinett)",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "Öffnung? HAVAG?",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Hallesche Straßenbahnfreunde e.V.",
        PLZ: "06114",
        Ortsname: "Halle (Saale)",
        AktionsortStraße: "Seebener Straße 191",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "siehe Programm Eisernes Band",
        Webseite: "www.hsf-eV.de/Vereine",
        Infos: "",
        TeilnahmeBestätigt: "12.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Technisches Halloren und Salinemuseum Halle",
        PLZ: "06108",
        Ortsname: "Halle (Saale)",
        AktionsortStraße: "Mansfelder Straße 15",
        Oeffnungszeit: "10-16.00 Uhr",
        AktivitätTIK_2024:
          '10.00 Uhr bis 12.00 Uhr &\n14.00 Uhr bis 16.00 Uhr\n\nSonderführung durch die aktuelle Baustellen des Salinemuseums Halle unter dem Motto:\n\n"Ein museales Großprojekt zwischen Industriegeschichte und gelebter Industriekultur" \ndurch den Aufbaustab Salinemuseum Halle und Erik Neumann\n\nDer spannende Rundgang durch das bedeutende Industriedenkmal mit den beiden Großsiedehallen Süd und Nord bietet einen exklusiven Einblick in die Arbeit an der zukünftigen Ausstellung und in die geplante Etablierung des Saline-Ensembles als industriekulturellen Leuchtturm Sachsen-Anhalts.\n\nIm zweiten Teil der Führung wird der Industriegeschichtsexperte Erik Neumann bei einem Rundgang über die Saline-Insel zeigen, welche Bedeutung der Standort in der Industriegeschichte der Stadt Halle (Saale) einnahm. Es wird erfahrbar werden wie die Saline, welche von 1721 bis 1964 Salz produzierte, ihr Umfeld prägte.  \n\nTreffpunkt:\nEingang Uhrenhaus auf dem Salinen-Gelände Salinemuseum Halle, Mansfelder Straße 52, 06108 Halle (Saale)\n\nBitte beachten Sie, dass die Zahl der Teilnehmenden der beiden Führungen auf 20 Personen je Führung begrenzt ist.\n\nAnmeldungen sind nur unter Telefon: \n0345 221-3089/ 3087 bzw. per Mail an info@salinemuseumhalle.de möglich.',
        Webseite: "https://www.salinemuseum.de/\n\n",
        Infos:
          "https://industrietourismus.de/technisches-halloren-und-salinemuseum/",
        TeilnahmeBestätigt: "12.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Traditionsverein der Bergschule Eisleben e.V.",
        PLZ: "06295",
        Ortsname: "Eisleben",
        AktionsortStraße: "Geiststrasse 2",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "erst 2025?",
        Webseite: "www.tvb-bergschule-eisleben.com",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Dt. Kinderwagenmuseum Zeitz (ZEKIWA )",
        PLZ: "06712",
        Ortsname: "Zeitz",
        AktionsortStraße: "Schloßstraße 6",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "Sonderführung durch die Magazinräume",
        Webseite:
          "https://museum-moritzburg-zeitz.de/portfolio-item/deutsches-kinderwagenmuseum/",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Zentralwerkstatt Pfännerhall",
        PLZ: "06242",
        Ortsname: "Pfännerhall",
        AktionsortStraße: "Grubenweg 4",
        Oeffnungszeit: "10-18.00 Uhr",
        AktivitätTIK_2024:
          "- Sonderführungen in der neuen Ausstellung\n\n- kulinarische Versorgung im Geiseltal Café \n12-18 Uhr",
        Webseite: "https://www.pfaennerhall-geiseltal.de/\n\n",
        Infos: "https://industrietourismus.de/zentralwerkstatt-pfaennerhall/",
        TeilnahmeBestätigt: "07.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Historische Feuerwehren Droyßig",
        PLZ: "06722",
        Ortsname: "Droyßig",
        AktionsortStraße: "Zeitzer Strasse 9a",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024:
          "Sammlung von historische Feuerwehren in Verbindung mit dem Oldtimertreffen in Zeitz\n\n(siehe auch die Angebote zur Drahtseilbahn und im  Hermannschacht Zeitz).",
        Webseite: "https://zifft.de/",
        Infos: "",
        TeilnahmeBestätigt: "09.02.2024",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Kösener Spielzeugmanufaktur GmbH Bad Kösen",
        PLZ: "06628 ",
        Ortsname: "Bad Kösen",
        AktionsortStraße: "Rudelsburgpromenade 20c",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "erst 2025?",
        Webseite: "www.koesener.de",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Industriemuseum Wettin-Löbejün/OT Rothenburg",
        PLZ: "06193 ",
        Ortsname: "Wettin-Löbejün/OT Rothenburg",
        AktionsortStraße: "An der Schule 4",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "erst 2025?",
        Webseite: "www.500-indu-rothenburg.de",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "Halle-Saale-Unstrut",
        Institution: "Zuckerfabrik Oldisleben in Thüringen",
        PLZ: "06577 ",
        Ortsname: "An der Schmücke / OT Oldisleben",
        AktionsortStraße: "Esperstedter Straße 9 ",
        Oeffnungszeit: "10-17.00 Uhr",
        AktivitätTIK_2024: "Standort in Thüringen",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
      {
        Region: "",
        Institution: "",
        PLZ: "",
        Ortsname: "",
        AktionsortStraße: "",
        Oeffnungszeit: "",
        AktivitätTIK_2024: "",
        Webseite: "",
        Infos: "",
        TeilnahmeBestätigt: "",
      },
    ];
    const programmModal = ref();
    const programmDrawer = ref();
    const isModalOpen = ref(false);
    const closeModalOverlay = () => {
      isModalOpen.value = false;
      document.body.style.overflow = "visible";
    };

    const aktuelleRegion = ref("");
    const setRegion = (region) => {
      programm.value.scrollIntoView();
      document.body.style.overflow = "hidden";
      aktuelleRegion.value = region;
      isModalOpen.value = true;
      programmDrawer.value.scrollTop = 0;
      programmModal.value.scrollTop = 0;
    };

    const getOrte = (region) => {
      if (region !== "") {
        const orte = tourismusRegionen.filter(
          (ort) => ort.Region === region && ort.TeilnahmeBestätigt !== ""
        );
        return orte.sort((a, b) => (a.Institution > b.Institution ? 1 : -1));
      }
    };

    const programm = ref(null);

    const scrollToProgramm = () => {
      programm.value.scrollIntoView({ behavior: "smooth" });
    };

    const createLink = (link) => {
      if (link.substring(0, 3) === "htt") {
        return link;
      }
      if (link.substring(0, 3) === "www") {
        return "https://" + link;
      } else {
        return "https://www." + link;
      }
    };

    return {
      createLink,
      tourismusRegionen,
      isModalOpen,
      closeModalOverlay,
      aktuelleRegion,
      setRegion,
      getOrte,
      scrollToProgramm,
      programm,
      programmDrawer,
      programmModal,
    };
  },
};
</script>

<style lang="css">
.t-scroll-bar::-webkit-scrollbar {
  width: 2px;
  background-color: #343434;
}
.t-scroll-bar::-webkit-scrollbar-thumb {
  background-color: #9b9b9b;
}

.t-modal-overlay {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
  overflow-y: auto;
  scrollbar-color: #191919;
}

.t-modal-overlay-container {
  display: flex;
  align-items: center;
  min-height: 100%;
  flex-direction: column;
  overflow: hidden;
}

.t-modal-content-container {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  order: 2;
}

.t-modal-close-button {
  cursor: pointer;
  position: fixed;
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-item-align: end;
  align-self: flex-end;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 9999;
  margin: 0;
  padding: 0;
  border: 0;
}

.t-modal-close-icon {
  background: #f6e82e;
  border-radius: 50%;
  color: rgba(0, 0, 0, 0.56);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 36px;
  width: 36px;
  outline: none;
  -webkit-transition: color 100ms linear, background 100ms linear;
  transition: color 100ms linear, background 100ms linear;
  position: relative;
}

.t-modal-close-button .t-modal-close-icon svg {
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  fill: currentColor;
  position: absolute;
  inset-inline-start: 50%;
}
</style>
