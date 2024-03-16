<template>
  <div class="p-4 md:p-10">
    <div class="m-auto">
      <div class="text-t-green md:pl-4">Sonntag, 21.04.2024: 10:00-17:00</div>
      <div class="text-t-green md:pl-4 mb-10">
        5 Regionen: Das offizielle Programm zum 14. Tag der Industriekultur
      </div>
      <div
        v-for="(region, i) in tourismusRegionen"
        :key="region.name + i"
        class="text-3xl md:p-4 md:text-6xl font-thin text-white cursor-pointer hover:text-t-green"
        @click="
          setModalOverlay();
          setRegion(region.name);
        "
      >
        {{ region.name }}
      </div>
    </div>
  </div>
  <div
    :class="[isModalOpen ? 'z-[1] block' : 'z-[-1] hidden']"
    class="fixed bottom-0 left-0 right-0 top-0 bg-t-grey t-modal-overlay"
  >
    <div class="t-modal-overlay-container">
      <div class="t-modal-overlay">
        <div class="t-modal-content-container text-white max-w-full p-4">
          <div>
            <div class="py-16">{{ aktuelleRegion }}</div>
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
          @click="setModalOverlay"
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
</template>

<script>
import { ref } from "vue";
export default {
  name: "TourismusRegionen",

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

    const isModalOpen = ref(false);
    const setModalOverlay = () => {
      isModalOpen.value = !isModalOpen.value;
    };

    const aktuelleRegion = ref("");
    const setRegion = (region) => {
      aktuelleRegion.value = region;
    };

    const getOrte = () => {
      if (aktuelleRegion.value !== "")
        return tourismusRegionen.find(
          (region) => region.name === aktuelleRegion.value
        ).orte;
    };

    return {
      tourismusRegionen,
      isModalOpen,
      setModalOverlay,
      aktuelleRegion,
      setRegion,
      getOrte,
    };
  },
};
</script>

<style lang="css">
.t-modal-overlay {
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

.t-modal-overlay {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  width: 100%;
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
  background: #C7FF57;
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
