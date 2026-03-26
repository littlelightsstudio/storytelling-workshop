const CLIENT = {

  // ─── META ───────────────────────────────────────────────────────────────────
  name: "Little Lights Studio",
  subtitle: "Reels & Stories",
  date: "2026-03-26",
  facilitator: "miso",

  // ─── PRÄSENTATION ───────────────────────────────────────────────────────────
  presentation: [
    {
      id: "p1",
      type: "claim",
      headline: "WE MAKE FILMS FOR COMPANIES THAT UNDERSTAND THE DIFFERENCE BETWEEN CONTENT AND A STORY WORTH TELLING.",
      body: null
    },
    {
      id: "p2",
      type: "slide",
      headline: "CONTENT IST NICHT STORYTELLING",
      body: "Jeden Tag werden Millionen Videos gepostet. Neue Produkte, neue Maschinen, Messeauftritte, Teamfotos. Die meisten davon verschwinden in der Timeline, noch während sie hochgeladen werden.\n\nNicht weil das Budget zu klein war. Nicht weil die Plattform falsch gewählt wurde. Sondern weil niemand einen Grund hatte zu stoppen.",
      example: {
        type: "text",
        label: "Negativbeispiel",
        content: "Ein Unternehmen kauft eine neue Maschine. Sie filmen die Maschine. \"Wir freuen uns, unseren neuen XY-3000 in Betrieb nehmen zu können. Kapazitätssteigerung 30%.\" Drei Likes, zwei davon Mitarbeiter.\n\nWas wäre, wenn der Techniker der die Maschine zum ersten Mal anwirft erzählt, warum er diesen Job macht? Gleiche Maschine. Komplett andere Geschichte."
      }
    },
    {
      id: "p3",
      type: "slide",
      headline: "JEMAND WILL ETWAS. UND ES IST NICHT EINFACH.",
      body: "Jede Geschichte die funktioniert, folgt einem Prinzip: Es gibt einen Protagonisten. Es gibt ein Ziel oder eine Frage. Und es gibt etwas, das im Weg steht, oder das noch nicht beantwortet ist.\n\nDas gilt für einen Spielfilm. Und es gilt für ein 30-Sekunden-Reel.",
      callout: "Auf Instagram, TikTok und LinkedIn habt ihr zwischen null und drei Sekunden. Wenn der Hook nicht sitzt, ist der Zuseher weg. Eine gute Geschichte fängt mit der besten Zeile an, nicht mit dem Logo.",
      calloutLabel: "Der Hook"
    },
    {
      id: "p4",
      type: "examples",
      headline: "IN DER PRAXIS",
      examples: [
        {
          video: "./videos/str-raq-danina.mp4",
          title: "Strabag: Recruiters Answer Questions",
          description: "Eine Recruiterin beantwortet die Fragen, die sich Bewerber nie zu stellen trauen. Der Hook in den ersten drei Sekunden: \"Was sind die absoluten No-Gos?\" Die Zuseher bleiben, weil sie die Antwort wollen. Das ist kein HR-Video. Das ist eine Geschichte über Insider-Wissen."
        },
        {
          video: "./videos/dimasterz-gewohnheiten.mp4",
          title: "Dima Sterz: Physiotherapeut",
          description: "\"Wie kann ich alte Gewohnheiten hinter mir lassen?\" Die Frage öffnet sofort einen Gedanken beim Zuseher. Protagonist ist klar, der Konflikt ist der innere Widerstand den jeder kennt. Das Format funktioniert auf jeder Plattform, in jeder Branche."
        }
      ]
    },
    {
      id: "p5",
      type: "slide",
      headline: "WIR SUCHEN EUREN NARRATIVEN KERN.",
      body: "Nicht einen Redaktionsplan. Nicht eine Posting-Frequenz. Den einen Satz, der beschreibt warum eure Geschichte erzählt werden sollte, und von wem, und für wen.\n\nAus diesem Kern entstehen Content-Säulen. Aus den Säulen entstehen Formate, die ihr regelmäßig bespielen könnt, ohne jedes Mal von vorne anzufangen.\n\nDas ist das Ergebnis dieses Workshops."
    }
  ],

  // ─── FRAGEBLÖCKE ────────────────────────────────────────────────────────────
  blocks: [
    {
      id: "block1",
      title: "WARM-UP & INTUITION",
      intro: "Bevor wir in Strategie und Planung gehen, eine Runde Intuition. Keine richtigen oder falschen Antworten. Es geht darum zu verstehen, wie ihr Social Media erlebt, was euch bewegt, und womit wir verglichen werden wollen.",
      questions: [
        {
          id: "q1-1",
          question: "Was war der letzte Social Media Post, der euch wirklich hängengeblieben ist, egal von wem?",
          context: "Die meisten Unternehmen schauen auf Social Media nur durch die Brille \"was posten wir selbst.\" Diese Frage dreht das um. Was euch als Nutzer wirklich stoppt und bleibt, zeigt mehr über eure Erwartungen an guten Content als jede strategische Aussage."
        },
        {
          id: "q1-2",
          question: "Wenn ihr an euren eigenen Social Media Auftritt denkt: welches Gefühl kommt?",
          context: "Stolz, Frustration, schlechtes Gewissen, Gleichgültigkeit. Alle Antworten sind valide und wichtig. Die ehrlichste Bestandsaufnahme entsteht nicht aus Zahlen, sondern aus dem Bauchgefühl derer, die täglich damit umgehen."
        },
        {
          id: "q1-3",
          question: "Welche Marke oder Person macht es aus eurer Sicht auf Social Media wirklich richtig, und was genau daran?",
          context: "Nicht als Benchmark den ihr kopieren wollt, sondern als Spiegel. Was ihr bei anderen als stark empfindet, sagt viel darüber aus, welche Qualitäten ihr euch selbst wünscht. Das \"was genau daran\" ist die entscheidende Nachfrage."
        }
      ]
    },
    {
      id: "block2",
      title: "STATUS QUO & AKTUELLER CONTENT",
      intro: "Bevor wir über Ziele und Wünsche reden, schauen wir uns an was tatsächlich passiert. Nicht was geplant war, nicht was idealerweise passieren sollte. Was ist heute real? Dieser Block ist keine Bewertung, sondern eine ehrliche Bestandsaufnahme.",
      questions: [
        {
          id: "q2-1",
          question: "Welchen Social Media Content stellt ihr aktuell her, auf welchen Kanälen?",
          context: "Konkret und nüchtern: was existiert gerade? Welche Plattformen sind aktiv, welche schlafen, welche werden halbherzig bespielt? Wer produziert, wer entscheidet, wer postet?"
        },
        {
          id: "q2-2",
          question: "Was fällt euch dabei leicht?",
          context: "Jedes Unternehmen hat etwas, das fast von selbst entsteht. Ein Format, ein Thema, eine Person die gerne vor der Kamera steht. Diese natürlichen Stärken sind oft die besten Ausgangspunkte für Content-Säulen."
        },
        {
          id: "q2-3",
          question: "Was fällt euch schwer, oder was würdet ihr am liebsten abgeben?",
          context: "Ehrlichkeit hier spart später viel Zeit. Ein Plan der auf Dinge baut, die niemand gerne macht, wird nicht funktionieren. Was kostet Überwindung, was liegt brach, was wird immer wieder aufgeschoben?"
        },
        {
          id: "q2-4",
          question: "Gibt es Momente oder Situationen in eurem Arbeitsalltag, die sich eigentlich perfekt für Content eignen, die ihr aber bisher nicht festhaltet?",
          context: "Das ist oft die ergiebigste Frage im ganzen Workshop. Die besten Stories passieren täglich und werden nicht gefilmt, weil niemand daran denkt. Ein Kundengespräch, ein Produktionsprozess, eine Entscheidung hinter den Kulissen. Was würde ein Außenstehender faszinierend finden, das ihr schon für selbstverständlich haltet?"
        },
        {
          id: "q2-5",
          question: "Was habt ihr schon mal versucht, das nicht funktioniert hat?",
          context: "Misserfolge sind oft aufschlussreicher als Erfolge. Ein Format das niemand angenommen hat, eine Kampagne die ins Leere lief, ein Versuch der aufwendig war und nichts gebracht hat. Was können wir daraus lernen, bevor wir weitermachen?"
        },
        {
          id: "q2-6",
          question: "Wie sieht ein typischer Arbeitstag oder eine typische Arbeitswoche aus? Wer ist wofür zuständig, was tut sich?",
          context: "Keine Organigramm-Antwort, sondern eine echte Beschreibung. Was passiert montags, was freitags, wer trifft wen, was wird gebaut, entschieden, geliefert? Aus dieser Beschreibung entstehen später die natürlichsten Content-Formate."
        }
      ]
    },
    {
      id: "block3",
      title: "MARKE, HALTUNG & DIFFERENZIERUNG",
      intro: "Jetzt gehen wir tiefer. Dieser Block ist der anspruchsvollste, und der wichtigste. Hier suchen wir den Narrativen Kern: den einen Gedanken, der beschreibt warum eure Geschichte erzählt werden sollte. Alles was danach kommt, wächst aus diesem Kern.",
      questions: [
        {
          id: "q3-1",
          question: "Wenn ihr nur drei Begriffe nennen dürftet, die eure Marke wirklich beschreiben: welche wären das?",
          context: "Nicht die drei Begriffe aus dem Leitbild. Die drei Begriffe, die ihr einem guten Freund nennen würdet der fragt wofür ihr steht. Der Unterschied zwischen \"innovativ\" und \"eigensinnig\" ist enorm. Konkret schlägt abstrakt."
        },
        {
          id: "q3-2",
          question: "Was macht euch besonders, das Mitbewerber nicht von sich sagen können oder würden?",
          context: "Nicht \"wir haben 20 Jahre Erfahrung\" oder \"wir stellen Qualität in den Mittelpunkt.\" Jeder sagt das. Was ist die eine Sache, bei der ihr anders denkt, anders arbeitet, oder anders entscheidet als andere in eurer Branche?"
        },
        {
          id: "q3-3",
          question: "Was glaubt ihr über euer Thema oder eure Branche, das andere so nicht glauben?",
          context: "Das ist die Frage nach dem echten Narrativen Kern. Eine Haltung die polarisiert, die nicht jeder teilt, die aber klar macht wofür ihr steht, ist wertvoller als eine die allen gefällt. Was würdet ihr öffentlich vertreten, auch wenn nicht alle zustimmen?"
        },
        {
          id: "q3-4",
          question: "In welchem Bereich wollt ihr als Experte wahrgenommen werden?",
          context: "Nicht das gesamte Leistungsportfolio, sondern die eine Kompetenz für die Menschen an euch denken sollen. Wofür soll euer Name stehen, wenn jemand ein Problem hat?"
        },
        {
          id: "q3-5",
          question: "Welche Geschichte erzählt ihr bisher nicht, die aber erzählt werden sollte?",
          context: "Fast jedes Unternehmen hat eine Geschichte die sie kennen, die sie fasziniert, die sie stolz macht, und die trotzdem nie nach außen kommt. Zu intern, zu selbstverständlich, oder \"interessiert das wirklich jemanden?\" Die Antwort darauf ist meistens: ja."
        }
      ]
    },
    {
      id: "block4",
      title: "ZIELGRUPPE & WIRKUNG",
      intro: "Content der für alle gemacht ist, wird von niemandem wirklich gefühlt. Dieser Block schärft das Bild davon, wen ihr tatsächlich erreichen wollt, und was bei dieser Person ausgelöst werden soll.",
      questions: [
        {
          id: "q4-1",
          question: "Wen wollt ihr eigentlich erreichen? Nicht nur demografisch, sondern: wie denkt diese Person, was beschäftigt sie, was nervt sie?",
          context: "\"25-45, kaufkräftig, urban\" ist keine Zielgruppe, das ist eine Statistik. Eine Person die ihr wirklich kennt und versteht, ist die Grundlage für jeden Content der wirklich trifft. Wer ist der Mensch, dem ihr zuerst etwas zeigen würdet?"
        },
        {
          id: "q4-2",
          question: "Was soll jemand über euch denken, nachdem er drei eurer Posts gesehen hat?",
          context: "Nicht \"er soll kaufen\" oder \"er soll uns folgen.\" Was soll der Eindruck sein? \"Die wissen wirklich was sie tun.\" \"Die sind anders als andere in der Branche.\" \"Da möchte ich arbeiten.\" Der gewünschte Gedanke danach ist oft der klarste Hinweis auf den richtigen Narrativen Kern."
        },
        {
          id: "q4-3",
          question: "Welche Werte oder Emotionen soll euer Content transportieren?",
          context: "Nicht als Liste von Adjektiven, sondern als Gefühl. Wenn jemand euren Content sieht und weiterschrollt: was soll übrig bleiben? Vertrauen, Neugier, Respekt, Begeisterung, das Gefühl etwas gelernt zu haben?"
        },
        {
          id: "q4-4",
          question: "Wenn eure Zielgruppe nur 30 Sekunden zuhört: was müsste sie unbedingt verstehen?",
          context: "Das ist der Pressuretest für alle vorherigen Antworten. Wenn ihr auf eine Aussage komprimieren müsst, was ist sie? Die Antwort darauf ist oft näher am Narrativen Kern als alles was davor kam."
        }
      ]
    },
    {
      id: "block5",
      title: "INHALTE & PROTAGONISTEN",
      intro: "Jetzt werden die Ideen konkret. Hier suchen wir die Rohstoffe für eure Content-Säulen: Themen die ihr regelmäßig bespielen könnt, Menschen die auftreten können, Formate die zu euch passen.",
      questions: [
        {
          id: "q5-1",
          question: "Welche Themen könntet ihr regelmäßig bespielen, ohne euch zu wiederholen?",
          context: "Nicht eine Themenliste, sondern Themenfelder mit Tiefe. Ein Themenfeld das zehn verschiedene Geschichten hergibt, ist eine Content-Säule. Eines das einmal funktioniert und dann ausgereizt ist, nicht."
        },
        {
          id: "q5-2",
          question: "Gibt es Personen im Unternehmen, die regelmäßig in eurem Content vorkommen könnten?",
          context: "Gesichter bauen Vertrauen schneller als Logos. Wer im Team hat eine interessante Perspektive, eine ungewöhnliche Geschichte, oder ist einfach gut vor der Kamera? Freiwilligkeit ist dabei keine Kleinigkeit: erzwungene Präsenz sieht man sofort."
        },
        {
          id: "q5-3",
          question: "Welche Art von Content passt zu eurer Marke und wie ihr auftreten wollt?",
          context: "Erklärvideo, Behind the Scenes, Interview, Meinung, Prozess, Ergebnis. Nicht alle Formate passen zu jeder Marke. Was fühlt sich richtig an, was würdet ihr selbst anklicken?"
        },
        {
          id: "q5-4",
          question: "Gibt es feste Ereignisse, Projekte oder Meilensteine im Jahr, die sich als Content-Anlässe eignen?",
          context: "Ein Redaktionskalender der auf echten Ereignissen aufbaut ist leichter durchzuhalten als einer der aus dem Nichts befüllt werden muss. Messen, Projektabschlüsse, Saisonwechsel, interne Highlights: was gibt es davon bei euch?"
        },
        {
          id: "q5-5",
          question: "Was würdet ihr eurem besten Kunden zeigen, wenn er einen Tag bei euch wäre?",
          context: "Diese Antwort ist fast immer ein versteckter Content-Plan. Was ihr jemandem dem ihr imponieren wollt zeigen würdet, ist genau das was eure Zielgruppe sehen sollte. Und meistens wird es noch nie gefilmt."
        }
      ]
    },
    {
      id: "block6",
      title: "ZIELE, PLATTFORMEN & RESSOURCEN",
      intro: "Der letzte Block ist der pragmatische. Die beste Strategie nützt nichts, wenn sie an der Realität scheitert. Hier klären wir was ihr wollt, was ihr könnt, und wo die Grenzen liegen.",
      questions: [
        {
          id: "q6-1",
          question: "Welche Plattformen wollt ihr künftig bespielen, und warum genau diese?",
          context: "Überall präsent sein ist keine Strategie. Jede Plattform hat ihre eigene Logik, ihr eigenes Publikum, ihren eigenen Aufwand. Welche Plattformen passen zu eurer Zielgruppe und zu dem was ihr erzählen wollt?"
        },
        {
          id: "q6-2",
          question: "Was wollt ihr mit Social Media erreichen: kurzfristig in den nächsten 3-6 Monaten, und langfristig in 12-18 Monaten?",
          context: "Reichweite, Recruiting, Kundenbindung, Neukunden, Positionierung als Experte. Diese Ziele schließen sich nicht aus, aber sie priorisieren sich. Was ist das eine Ziel das wirklich zählt?"
        },
        {
          id: "q6-3",
          question: "Woran erkennt ihr, dass es funktioniert?",
          context: "Nicht \"mehr Follower.\" Was ist das konkrete Signal das euch sagt: wir sind auf dem richtigen Weg? Eine Bewerberin die sagt sie hat euch auf Instagram gefunden. Ein Kunde der einen Clip zitiert. Ein Mitarbeiter der stolz den Account zeigt. Messgrößen können Zahlen sein, müssen es aber nicht."
        },
        {
          id: "q6-4",
          question: "Was könnt ihr intern leisten, zeitlich und personell?",
          context: "Ehrlichkeit hier ist die Grundlage für einen Plan der auch in drei Monaten noch steht. Eine Stunde pro Woche ist eine andere Basis als ein halber Mitarbeiter. Beides ist valide, aber nur wenn wir es wissen."
        },
        {
          id: "q6-5",
          question: "Was soll von außen kommen?",
          context: "Produktion, Konzeption, Posting, Community Management, Strategie. Was macht intern Sinn, was überfordert intern, was braucht externe Expertise? Das ist keine Verkaufsfrage, sondern die Grundlage für eine Zusammenarbeit die funktioniert."
        }
      ]
    }
  ],

  // ─── END SLIDE ──────────────────────────────────────────────────────────────
  end: {
    heading: "Danke.",
    subtext: "Das war der Workshop. Was jetzt folgt:",
    steps: [
      {
        num: "01",
        title: "Evaluierung & Analyse",
        body: "Wir werten das Gespräch aus, sichten die Aufzeichnung und destillieren die wichtigsten Aussagen."
      },
      {
        num: "02",
        title: "Rückfragen",
        body: "Falls noch offene Punkte entstehen, melden wir uns kurz nach."
      },
      {
        num: "03",
        title: "Social Media Storytelling Guide",
        body: "Auf Basis des Workshops erstellen wir euren persönlichen Guide: Narrativer Kern, Content-Säulen, Plattform-Strategie."
      },
      {
        num: "04",
        title: "Wie es weitergehen kann",
        body: "Was eine mögliche Zusammenarbeit aussehen könnte, besprechen wir gerne persönlich."
      }
    ]
  }
};
