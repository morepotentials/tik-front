<template>
  <div class="container h-screen flex my-auto mx-auto px-4 relative">
    <div
      class="basis-full sm:basis-1/2 flex justify-center flex-col inline-block items-center"
    >
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
        <h1 class="text-t-green text-5xl italic font-bold">
          14. TAG DER <br />
          INDUSTRIE- <br />
          KULTUR <br />
          <span class="text-white"
            >SACHSEN- <br />
            ANHALT</span
          >
        </h1>
        <div class="flex justify-center sm:justify-start">
          <hr class="h-[1px] w-44 bg-t-green my-3 border-0 my-8" />
        </div>
        <div class="text-white">
          <p class="mb-8">
            Der 14. Tag der Industriekultur wird am Sonntag, dem 21.04.2024
            stattfinden.
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

  <div ref="programm" class="h-screen flex flex-row">
    <div
      class="container my-auto mx-auto h-screen items-center justify-center flex"
    >
      <TikMap @some-event="setRegion" :is-modal-open="isModalOpen"></TikMap>
    </div>
    <div
      ref="programmDrawer"
      class="h-screen bg-t-grey overflow-y-scroll hidden sm:block relative"
      :class="[isModalOpen ? 'w-8/12 change' : 'w-0 outline-0']"
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
        <div v-for="(ort, i) in getOrte()" :key="ort + i" class="pb-10">
          <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
          <span class="text-white text-2xl italic font-bold"
            >{{ ort.name }},
          </span>
          <span class="text-white text-2xl italic font-light">
            {{ ort.adresse }}
          </span>
          <div class="max-w-[500px]">
            <span class="text-t-green italic text-xl font-light">
              {{ ort.oeffnungszeit }}
            </span>
            <span class="text-white italic text-xl font-light">
              {{ ort.aktivitaet }}
            </span>
            <span class="text-t-green italic text-xl">
              {{ ort.details }}
            </span>
            <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
            <span class="italic font-bold text-t-green">
              KONTAKT: {{ ort.kontakt }}
            </span>
          </div>
          <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
        </div>
      </div>
    </div>
    <div
      ref="programmModal"
      :class="[isModalOpen ? 'z-[1] block sm:hidden' : 'z-[-1] hidden']"
      class="fixed bottom-0 left-0 right-0 top-0 bg-t-grey t-modal-overlay"
    >
      <div class="t-modal-overlay-container">
        <div class="t-modal-overlay">
          <div class="t-modal-content-container text-white max-w-full p-4">
            <div>
              <div class="py-16 text-t-green text-4xl italic font-bold">
                {{ aktuelleRegion }}
              </div>
              <div v-for="(ort, i) in getOrte()" :key="ort + i" class="pb-10">
                <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
                <span class="text-white text-2xl italic font-bold"
                  >{{ ort.name }},
                </span>
                <span class="text-white text-2xl italic font-light">
                  {{ ort.adresse }}
                </span>
                <div class="max-w-[500px]">
                  <span class="text-t-green italic text-xl font-light">
                    {{ ort.oeffnungszeit }}
                  </span>
                  <span class="text-white italic text-xl font-light">
                    {{ ort.aktivitaet }}
                  </span>
                  <span class="text-t-green italic text-xl">
                    {{ ort.details }}
                  </span>
                  <hr class="h-[1px] w-24 bg-t-green my-3 border-0" />
                  <span class="italic font-bold text-t-green">
                    KONTAKT: {{ ort.kontakt }}
                  </span>
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
        name: "Altmark",
        orte: [
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
        ],
      },
      {
        name: "Magdeburg-Elbe-Börde-Heide",
        orte: [
          {
            region: "Magdeburg-Elbe-Börde-Heide",
            name: "NOVALIS GEDENKSTÄTTE WEIßENFELS",
            adresse: "Klosterstraße 26",
            oeffnungszeit:
              "Ausstellung 10 – 17 Uhr: Novalis der Bergmann und Geologe,",
            aktivitaet:
              "10 Uhr Sonderführung von Herrn Riemer mit dem Thema Friedrich\nvon Hardenberg",
            details: "– Pionier der Braunkohlennutzung, Eintritt: 4 €",
            kontakt: "KONTAKT: LIT_NOVALIS@GMX.DE",
            url: "",
          },
          {
            region: "Magdeburg-Elbe-Börde-Heide",
            name: "NOVALIS GEDENKSTÄTTE WEIßENFELS",
            adresse: "Klosterstraße 27",
            oeffnungszeit:
              "Ausstellung 10 – 17 Uhr: Novalis der Bergmann und Geologe,",
            aktivitaet:
              "10 Uhr Sonderführung von Herrn Riemer mit dem Thema Friedrich\nvon Hardenberg",
            details: "– Pionier der Braunkohlennutzung, Eintritt: 4 €",
            kontakt: "KONTAKT: LIT_NOVALIS@GMX.DE",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Altmark",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
        ],
      },
      {
        name: "Harz",
        orte: [
          {
            region: "Harz",
            name: "NUDELFABRIK ZEITZ",
            adresse: "Neue Werkstraße 4, 06712 Zeitz",
            oeffnungszeit: "Öffnungszeiten: 10:00-18:00 Uhr -",
            aktivitaet: " 10, 12, und 14 Uhr Besichtigung und Führung ",
            details: "– jeweils 3 Gruppen mit 10 Personen",
            kontakt: "NEUMANNMARIA945@GMAIL.COM",
            url: "",
          },
          {
            region: "Harz",
            name: "NOVALIS GEDENKSTÄTTE WEIßENFELS",
            adresse: "Klosterstraße 24",
            oeffnungszeit:
              "Ausstellung 10 – 17 Uhr: Novalis der Bergmann und Geologe,",
            aktivitaet:
              "10 Uhr Sonderführung von Herrn Riemer mit dem Thema Friedrich\nvon Hardenberg",
            details: "– Pionier der Braunkohlennutzung, Eintritt: 4 €",
            kontakt: "KONTAKT: LIT_NOVALIS@GMX.DE",
            url: "",
          },
        ],
      },
      { name: "Anhalt-Dessau-Wittenberg", orte: [] },
      { name: "Halle-Saale-Unstrut", orte: [] },
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
      console.log(programmDrawer.value);
      programmDrawer.value.scrollTop = 0;
      console.log(programmModal.value);
      programmModal.value.scrollTop = 0;
    };

    const getOrte = () => {
      if (aktuelleRegion.value !== "")
        return tourismusRegionen.find(
          (region) => region.name === aktuelleRegion.value
        ).orte;
    };

    const programm = ref(null);

    const scrollToProgramm = () => {
      programm.value.scrollIntoView({ behavior: "smooth" });
    };

    return {
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
/* .change {
  transition: width 0.5s ease-in-out;
} */

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
