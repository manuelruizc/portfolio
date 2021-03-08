const locales = {
  // done
  nav: {
    ["about me"]: {
      en: "About me",
      es: "Acerca de mi",
    },
    projects: {
      en: "Projects",
      es: "Proyectos",
    },
    skills: {
      en: "Skills",
      es: "Habilidades",
    },
  },
  // done
  clonevideo: {
    header: {
      title: {
        en: "Clonetube",
        es: "Clonetube",
      },
      description: {
        en:
          "Clonetube is more than a regular clone, using most of the skills a web developer will use on a day to day basis, this project will surprise you. This project is merely for educational and to show my skills. Is not intended for profit.",
        es:
          "Es más que un clon normal, utilizando la mayoría de las habilidades que un desarrollador web utilizará en el día a día, este proyecto te sorprenderá. Este proyecto es meramente educativo y para mostrar mis habilidades. No tiene fines de lucro.",
      },
    },
    body: {
      titles: [
        {
          en: "Video page",
          es: "Página de video",
        },
        {
          en: "Home page",
          es: "Página de inicio",
        },
        {
          en: "Trends page",
          es: "Página de tendencias",
        },
        {
          en: "Library page",
          es: "Página de biblioteca",
        },
        {
          en: "History page",
          es: "Página de historial",
        },
        {
          en: "Search results page",
          es: "Página de resultados de búsqueda",
        },
        {
          en: "Subscriptions page",
          es: "Página de suscripciones",
        },
        {
          en: "Navigation bar",
          es: "Barra de navegación",
        },
      ],
      descriptions: [
        [
          {
            en: `Here you can view a video with the player. Has two
            main sections, the left one which includes the
            video, as well as the general data of the video and the user who
            public. It also has a comment section. The section
            left has the videos related to the current video
            playing and a toggle button to select playback
            Automatic of the videos at the end of the current video.`,
            es: `Aquí se puede visualizar un video con el reproductor. Tiene dos
              seccciones principales, la izquierda que incluye el reproductor de
              video, así como los datos generales del video y el usuario que lo
              publicó. También cuenta con una sección de comentarios. La sección
              izquierda cuenta con los video relacionados al video actual
              reproduciéndose y un botón toggle para seleccionar la reproducción
              automática del videos al terminar el video actual.`,
          },
          {
            en:
              "The video player has a section of control buttons. Which include the buttons of play / pause, next video, a slider to control the volume, a button to show a modal of options, activation of a miniature player, activation of theater mode and activation of full screen mode. It also has a progress bar, which shows the current progress of the video, as well as the seconds in which there are parts of the video previously downloaded (buffer). The options modal shows the activation of the automatic video playback mode, the activation of the channel's watermark and the ability to change the speed at which the video is played.",
            es: `El reproductor de video cuenta con una sección de botones de control.
                Los cuales incluyen los botones de play/pausa, siguiente video, un
                slider para controlar el volumen, un botón para mostrar un modal de
                opciones, activación de un reproductor en miniatura, activación del modo
                teatro y activación del modo de pantalla completa. También cuenta con
                una barra de progreso, la cual muestra el progreso actual del video, asi
                como los segundos en los cuales existe partes del video previamente
                descargadas (buffer). El modal de opciones muestra la activación del
                modo de reproducción del siguiente video automática, la activación de la
                marca de agua del canal y poder cambar la velocidad en la cual se
                reproduce el video.`,
          },
          {
            en: `The thumbnail player allows you to play videos and navigate the
              website and carry out activities simultaneously with the reproduction of the
              miniature player. Different videos can be switched and played
              while the miniature player is active, in addition to that, you can
              return to video page.`,
            es: `El reproductor miniatura permite reproducir videos y navegar por el
              sitio web y realizar actividades simultáneas con la reproducción del
              reproductor miniatura. Se pueden cambiar y reproducir diferentes videos
              mientras el reproductor miniatura esta activo, además de eso, se puede
              regresar a la página de video.`,
          },
          {
            en: `At the end of a video, and have automatic playback disabled
              from the next video, the player will show us recommended videos
              (Only on desktop).`,
            es: `Al finalizar un video, y tener desactivada la reproducción automática
              del siguiente video, el reproductor nos mostrará videos recomendados
              (Solo en escritorio).`,
          },
          {
            en: `The video information section shows the date, the number of
              views, the user who posted the video, number of likes and
              I don't like you, it also identifies if the user has liked or not
              I like the video. Contains the description of the video, which will identify
              by means of regular expression functions, the links and the markup
              time, going to the time indicated in the video playing. As well
              has a button that provides the option to subscribe to the channel or delete
              the subscription.`,
            es: `La sección de la información del video, muestra la fecha, el numero de
              visualizaciones, el usuario que publicó el video, número de me gustas y
              no me gustas, además que identifica si el usuario ha dado me gusta o no
              me gusta al video. Contiene la descripción del video, que identificará
              mediante funciones de expresiones regulares, los links y las marcas de
              tiempo, yendo al tiempo indicado en el video reproduciendose. También
              tiene un botón que brinda la opción de subscribirse al canal o eliminar
              la subscripción.`,
          },
          {
            en: `The comments section allows you to publish, view and delete
              (self-published) comments, in addition to this the text of the
              comments is processed by regular expression functions just like
              that the description of the video, identifying time stamps and links,
              It also identifies whether the user has liked or disliked the
              commentary. There is also an option to add videos to playlists.
              reproduction.`,
            es: `La sección de comentarios, permite publicar, visualizar y eliminar
              (publicados por uno mismo) comentarios, además de esto el texto de los
              comentarios es procesado por funciones de expresiones regulares al igual
              que la descripción del video, identificando marcas de tiempo y links,
              además que identifica si el usuario ha dado me gusta o no me gusta al
              comentario. También hay una opción para agregar videos a listas de
              reproducción.`,
          },
          {
            en: `There is also an option to add videos to playlists. To
              a new playlist or to an existing playlist`,
            es: `También hay una opción para agregar videos a listas de reproducción. A
              una nueva lista de reproducción o a una lista de reproducción existente.`,
          },
          {
            en: `The right section contains the videos related to the video
              current, you can add them to any playlist, or play
              the video, when reaching the end of the page, more videos will be loaded
              related, this action will be performed only 5 times per video.`,
            es: `La sección derecha contiene los videos relacionados con el video
              actual,puedes agregarlos a cualquier lista de reproducción, o reproducir
              el video, al llegar al final de la página, se cargaran mas videos
              relacionados, esta acción se realizará solo 5 veces por video.`,
          },
        ],
        [
          {
            en: `The Home page includes two or more video sections, these can
            include trending videos and videos that are breaking news.
            Each video thumbnail includes the video title, image
            channel thumbnail, duration and information (if included,
            has a verified user or official artist icon). When the
            users are logged in and have seen a video, the thumbnail will show
            a progress bar and it will start the video in the second indicated by the
            progress.`,
            es: `La página de Inicio incluye dos o más secciones de videos, estas pueden
            incluír videos en tendencia y videos que son noticias de último momento.
            Cada miniatura de video incluye el titulo del video, la imagen
            miniatura, la duración y la información del canal (en caso de incluírlo,
            tiene un ícono de usuario verificado o artista oficial). Cuando los
            usuarios estan logueados y han visto algún video, la miniatura mostrará
            una barra de progreso e iniciará el video en el segundo indicado por el
            progreso.`,
          },
        ],
        [
          {
            en: `Trending page includes trending videos and displays them
              in a list. Video thumbnails include the same
              thumbnail features on the Home page.`,
            es: `La página de tendencias incluye los videos en tendencias y los muestra
              en una lista. Las miniaturas de videos incluyen las mismas
              características de las miniaturas en la página de Inicio.`,
          },
        ],
        [
          {
            en: `This page is divided into two sections, left and right, the
              Right section includes general user information, including
              data such as the number of subscriptions, the number of videos uploaded and the
              number of videos that the user has liked. The section
              left of the page includes 4 sections, in which it shows the
              latest videos or playlists that the user has added to the
              playlist "Watch later", "Videos I like", videos in
              history and playlists created by the user. The miniatures of
              video include the data the title of the video, the channel data (in
              if it includes the verified / official artist icon), as well as the
              progress of watched videos.`,
            es: `Esta página esta dividida en dos secciones, izquierda y derecha, la
              seccion derecha incluye información general del usuario, incluyendo
              datos como el número de subscripciones, el número de videos subido y el
              número de videos que a los que el usuario ha dado me gusta. La sección
              izquierda de la página incluye 4 secciones, en la cual muestra los
              últimos videos o listas de reproducción que el usuario ha agregado a la
              lista de reproducción "Ver más tarde", "Videos que me gustan", videos en
              el historial y las playlists creadas por el usuario. Las miniaturas de
              video incluyen los datos el titulo del video, los datos del canal (en
              caso de incluirlo el ícono de verificado/artista oficial), así como el
              progreso de los videos vistos.`,
          },
        ],
        [
          {
            en: `This page includes video history and search terms
            of the user. It is divided into two sections, the right section includes
            a search form to find a specific term in the
            video history. Plus options to select content
            of the history that you want to view, selecting between
            videos and search history. The option to delete is also included
            search history or video history. The left section,
            displays the content of search histories. The history of
            videos is sectioned by the most recent day they were viewed
            The videos. If the display time is less than 7 days, it will display
            the name of the day (Monday, Tuesday, Friday ...), if it is greater than 7
            days the day number and the abbreviated month name will be displayed (Oct 7,
            Nov 12 ...).`,
            es: `Esta página incluye el historial de videos y los términos de búsqueda
            del usuario. Esta dividida en dos secciones, la sección derecha incluye
            un formulario de búsqueda para encontrar un término específico en el
            historial de videos. Además de opciones para seleccionar el contenido
            del historial que se desea visualizar, seleccionando entre historial de
            videos e historial de bùsqueda. También se incluye la opcion para borrar
            el historial de búsqueda o de historial de videos. La sección izquierda,
            visualiza el contendo de los historiales de búsqueda. El historial de
            videos esta seccionado por el día más reciente en el que se visualizaron
            los videos. Si el tiempo de visualización es menor a 7 días, se mostrará
            el nombre del dīa (Lunes, Martes, Viernes...), en caso de ser mayor a 7
            días se mostrará el número de día y el nombre del mes abreviado (Oct 7,
            Nov 12...).`,
          },
          {
            en: `In search history, search terms are displayed
              performed by the user in descending order based on the last
              time each search term was performed. In addition to showing the
              search term, it shows how long ago the last
              search for each term, in seconds, minutes, hours, days, weeks or
              years, depending on the date of the last search.`,
            es: `En el historial de búsqueda, se muestran los términos de búsqueda
              realizados por el usuario en un orden descendente en base a la última
              vez que se realizó cada término de búsqueda. Además de mostrar el
              término de búsqueda, se muestra hace cuanto fue realizada la última
              búsqueda de cada termino, en segundos, minutos, horas, días, semanas o
              años, dependiendo la fecha de realizada la última búsqueda.`,
          },
        ],
        [
          {
            en: `Shows the videos thrown by a search according to the term
                entered by the user, the thumbnails of the videos include the
                video data such as thumbnail image, the progress of the video if the
                user has viewed it before, user posting, description
                and duration of the video.`,
            es: `Muestra los videos arrojados por una búsqueda de acuerdo al término
                ingresado por el usuario, las miniaturas de los videos incluyen los
                datos del video, como imagen miniatura, el progreso del video si el
                usuario lo ha visualizado antes, el usuario que publica, la descripción
                y duración del video.`,
          },
        ],
        [
          {
            en: `Shows the channels to which the user has subscribed, and allows to delete
                or add subscriptions. The channels to which the user is
                subscribed, can also be viewed in the navigation sidebar.`,
            es: `Muestra los canales al que el usuario se ha suscrito, y permite eliminar
                o agregar suscripciones. Los canales a los cuales le usuario esta
                suscrito, pueden visualizarse también en la barra lateral de navegación.`,
          },
        ],
        [
          {
            en: `The navigation bar allows the user to search for videos,
                the search form will make recommendations of terms of
                search.`,
            es: `La barra de navegación permite al usuario realizar búsqueda de videos,
                el formulario de búsqueda realizará recomndaciones de términos de
                búsqueda.`,
          },
          {
            en: `In addition to the search form, it allows the user to log in, or
                activate a dropdown menu, in which you can end the session,
                change the theme of the site, between light and dark, and you can also
                change the language of the site.`,
            es: `Además del formulario de búsqueda, permite al usuario iniciar sesión, o
                activar un menú dropdown, en el cual se puede terminar la sesión,
                cambiar el tema del sitio, entre claro y obscuro, y también se puede
                cambiar el idioma del sitio.`,
          },
        ],
      ],
    },
  },
  // done
  cokeapp: {
    header: {
      title: {
        en: "Coca-cola app",
        es: "App de coca cola",
      },
      description: {
        en:
          "Coca cola app prototype animations I made on React Native using the React Native Animated API.",
        es:
          "Prototip de app de Coca cola que realice con React Native utilizando el API Animated de React Native.",
      },
    },
    body: {
      titles: [
        {
          en: "Why this app?",
          es: "¿Por qué esta app?",
        },
      ],
      descriptions: [
        [
          {
            en: `Inspired by the React Native Animated API, I decided to develop this app and share it with the React Native
              community and show the process.`,
            es: `Inspirado por las animaciones en React Native, decidí realizar esta app y compartirla con la comunidad y mostrar
              el proceso de desarrollo.`,
          },
        ],
      ],
    },
  },
  ecommerce: {},
  // done
  mobileplayer: {
    header: {
      title: {
        en: "Mobile player",
        es: "Reproductor móvil",
      },
      description: {
        en:
          "A mobile player to listen and download Youtube videos on mp3, create playlists and listen offline.",
        es:
          "Un reproductor móvil para escuchar y descargar videos de YouTube en mp3, crear listas de reproducción y escuchar la música offline.",
      },
    },
    body: {
      titles: [
        {
          en: "This project is made for personal use",
          es: "Este proyecto esta hecho para uso personal",
        },
      ],
      descriptions: [
        [
          {
            en: `This was the first app or mobile app that I did with React/React Native,
                  I'm currently rewriting the codebase with the React hooks API, you can
                  download the apk file <a href="#">here</a>. I made this project to have
                  the ability to listen to youtube videos offline and when locking the
                  phone screen or using other apps.
                  <br />
                  <br />
                  <b>
                    This app was not created to generate profit or to use as an
                    alternative to the official YouTube channel. This app is intended for
                    personal use and to show software development skills. I encourage everyone to use the official
                    YouTube services instead of this app as this app is only made to show what React Native can be
                    capable of and to show personal skills to employers.
                  </b>`,
            es: `Esta fue la primer web app o app móvil que desarrolle con React/React Native,
                  Actualmente me encuentro reescribiendo el código utilizando el API de hooks de React, puedes descargar
                  el archivo apk <a href="#">aquí</a>. Hice este proyecto para tener la oportunidad de escuchar video de
                  YouTube offline y/o mientras mi celular esta bloqueado o uso otras apps.
                  <br />
                  <br />
                  <b>
                    Esta aplicación no fue creada para generar ganancias o usarla como alternativa a las aplicaciones oficiales
                    de YouTube. El objetivo de esta aplicación es para mostrar mis habilidades en el desarrollo de software
                    y para un uso personal. Animo a todos a usar los servicios oficiales de YouTube en lugar de esta aplicación,
                    ya que esta aplicación solo está diseñada para mostrar lo que React Native puede hacer y para mostrar habilidades
                    personales a los empleadores.
                  </b>
                  `,
          },
        ],
        [
          {
            en: `You can read the documentation on the github repository.
                  <br />
                  <br />
                  <b>
                    The web services (backend API) of this app are not available to prevent bad use of
                    them. As they include website scraping.
                  </b>`,
            es: `You can see a live example <a href="#">here</a>, and read the library
                  documentation on the github repository.
                  <br />
                  <br />
                  <b>
                  Los servicios web (backend API) de esta aplicación no están disponibles para evitar un mal uso de los mismos.
                  Ya que incluyen scraping de sitios web.
                  </b>`,
          },
        ],
      ],
    },
  },
  // done
  portfolio: {
    header: {
      title: {
        en: "My portfolio",
        es: "Mi portafolio",
      },
      description: {
        en:
          "Well... you're actually on my portfolio, it only uses vanilla Javascript, CSS and HTML, only the fundamentals!",
        es:
          "Bueno... en este momento estás en mi portafolio, solo usa Javascript, CSS y HTML, no frameworks ni librerías. ¡Solo los fundamentos!",
      },
    },
    body: {
      titles: [
        {
          en: "Landing page",
          es: "Landing page",
        },
        {
          en: "Themes and Languages",
          es: "Temas e idiomas",
        },
      ],
      descriptions: [
        [
          {
            en: `The landing page includes a header which tells who I am, what I do and
                  easy access to my socials and an easy click download of my resume. Also
                  an illustration made by me with a clip path effect to reveal the real
                  me. <br />
                  In the next sections you can see quickly my main projects, know about
                  my skills and more about me.`,
            es: `Contine`,
          },
        ],
        [
          {
            en: `The website includes spanish and english versions, as well as light and dark theme modes
            to please the users experience.`,
            es: `El sitio web incluye versiones en español e inglés, además de modos de temas tanto obscuro
            como claro, para mejorar la experiencia de usuario.`,
          },
        ],
      ],
    },
  },
  // done
  reactmaps: {
    header: {
      title: {
        en: "react-stats-maps",
        es: "react-stats-maps",
      },
      description: {
        en:
          "react-stats-maps is a React.js library for dealing with svg maps, statistics and DOM actions in a map.",
        es:
          "react-stats-maps es una librería de React.js para tratar y manejar mapas y svg, estadísticas y acciones del DOM en un mapa.",
      },
    },
    body: {
      titles: [
        {
          en: "Why this library?",
          es: "¿Por qué esta librería?",
        },
        {
          en: "Future plans",
          es: "Planes a futuro",
        },
        {
          en: "Read the documentation and live example",
          es: "Lea la documentación y vea el ejemplo",
        },
      ],
      descriptions: [
        [
          {
            en: `Inspired by the COVID-19 pandemic and the 2020 US Elections, this library offers an easy set up
              for using SVG maps and dealing with click and hovering functions as well as statistics, and coloring
              states based on the statistics and limits comparison given by the data.`,
            es: `Inspirado por la pandemia COVID-19 y las elecciones estadounidenses de 2020, esta biblioteca ofrece una configuración sencilla
              para usar mapas SVG y manejar funciones de clic y desplazamiento, así como estadísticas y colorear
              estados basados ​​en las estadísticas y la comparación de límites dados por los datos.`,
          },
        ],
        [
          {
            en: `The website includes spanish and english versions, as well as light and dark theme modes
              to please the users experience.`,
            es: `El sitio web incluye versiones en español e inglés, además de modos de temas tanto obscuro
              como claro, para mejorar la experiencia de usuario.`,
          },
        ],
        [
          {
            en: `You can see a live example <a href="#">here</a>, and read the library
              documentation on the github repository.`,
            es: `Puede ver un ejemplo en vivo <a href="#">aquí</a> y leer la documentación de la biblioteca en el repositorio de github.`,
          },
        ],
      ],
    },
  },
};
