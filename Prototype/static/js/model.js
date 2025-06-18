//  Model tree

const model =
{
    // Application state
    app: 
        {
            currentPage: "",
            currentCarosel:
                {
                    src: "./static/img/images/klar00.jpg",
                    alt: "Fra Klar kompetanse - fotograf Vestbris AS",
                    caption: "",
                },
        },


    //  Header, nav, main and footer
    header:
    {
        title: "SoSEnt - Norge",
        description: "Landsforeningen for Sosiale Entrepenører i Norge",
        cls: "header-container flex-wrap-row-justify-center bg-brown",
        image:
            //  Logo for the header
        {
            cls: "logo-container flex-wrap-row-align-items-center-justify-space-between",
            alt: "sosent-logo.png",
            src: "./static/img/logo/SosEnt-logo.png",
        },
    },
    nav:
    {
        cls : "navbar bg-brown flex-wrap-row-align-items-center",
        pages:
        [
            {
                id: 0,
                type: "button",
                name: "aboutUs",
                title: "Om oss",
            },
            {
                id: 1,
                name: "news",
                type: "button",
                title: "Aktuelt",
            },
            {
                id: 2,
                type: "button",
                name: "membersPortal",
                title: "For Medlemmene",
            },
            {
                id: 3,
                cls: "nav-item bg-brown",
                type: "button",
                name: "membership",
                title: "Medlemskap i SoSEnt Norge",
            },
        ],
    },
    main:
    {
        cls:"main-container flex-wrap-column-align-items-center",
    },
    footer:
    {
        

        cls: "bg-brown footer-container flex-wrap-column-align-items-center-justify-space-evenly",
        contact:
        {
            cls: "contact-container flex-wrap-row-justify-space-evenly",
        },
        
        nav:
        [
            {
                name : "Personvern",
                cls: "link nav-item",
                href: "https://docs.google.com/document/d/1AkTTNQei6pJWvRYc_VT93Rspk3MTJn_ai_TsHqXi88U/edit?usp=sharing",
                
            },
            {
                cls: "link nav-item",
                name: "NO 935 329 930",
                href: "https://www.proff.no/selskap/sosent-norge/oslo/medlemsorganisasjoner/IFGVD6Y10PU"
            },
        ]
    },
    forms:
    [
        {},
        {},
        {
            id: 3,
            action: "#",
            method: "post",
            cls:"membership-form flex-wrap-column-align-items-center",
            inputs :
            [
                {
                    id: 0,
                    name:"Passord",
                    required: true,
                    type: "password",
                    placeholder: "Skriv inn passord",
                    
                },
            ],
            btn :
            {
                cls: "btn-",
                type: "submit",
                name: "Logg inn",
            }
        },
        {
            id: 4,
            action: "#",
            method: "post",
            cls:"membership-form flex-wrap-column-align-items-center",
            btn:
            {
                cls: "btn-",
                name: "Send",
                type: "submit",
            },
            inputs:
            [
                {
                    id: 0,
                    name:"Name",
                    required: true,
                    placeholder: "Fullt navn (eks. Ola Norman)",
                },
                {
                    id: 1,
                    required: true,
                    name:"Telefon Nummer",
                    placeholder: "Telefon nr (eks. 123 45 678)",
                },
                {
                    id:2,
                    required: true,
                    name: "E-Post",
                    placeholder: "Epost (eks. eksempel@domene.no"
                },
            ],
        }
    ],

    //  Datasets for the webapplication
    data:
    {
        carousel:
        [

            {
                src: "./static/img/images/klar01.jpg",
                alt: "Fra Klar kompetanse - fotograf Vestbris AS",
                caption: "",
            },
            {
                src: "./static/img/images/klar02.jpg",
                alt: "Fra Klar kompetanse - kokk - Fotograf Karina Lange",
                caption: "",
            },
            {
                src: "./static/img/images/klar03.jpg",
                alt: "Fra Klar kompetanse - sveiser - Fotograf Karina Lange",
                caption: "",
            },
            {
                src: "./static/img/images/klar04.jpg",
                alt: "Teamet i KLAR kompetanse av Ellen Seljestokken, Rhonda Helen Nes Lothe, Hilde Vikse og Elina Tomren. Fotograf Benjamin Vikse",
                caption: "",
            },
        ],

        articlesBanner:
            [
                {
                    cls: "news-banner flex-wrap-row-justify-space-evenly",
                    date: "2023-10-01",
                    headline:"Referat Fra Styremøte 2023",
                    image:
                        {
                            src: "./static/img/sosent/Gemini_Generated_Image_opf6gwopf6gwopf6.jpeg",
                            alt: "Styret i SOSENT",
                        },

                        lede: `
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.`,

                        main: 
                        [
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                            nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                            porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                            Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                            erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                        
                            `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                            Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                            a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                            Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                            vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                            Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                            et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                            debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                            molestiae non recusandae.`
                        ],

                        ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?`,
                },
                {
                    cls: "news-banner flex-wrap-row-justify-space-evenly",
                    date: "2025-05-01",
                    headline:"SOSENT - Norges Landsforening For Sosialt Entreprenørskap",
                    image:
                        {
                            src: "./static/img/logo/SosEnt-favicon.png",
                            alt: "News banner",
                        },

                        lede: `
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.`,

                        main: 
                        [
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                            nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                            porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                            Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                            erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                        
                            `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                            Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                            a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                            Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                            vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                            Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                            et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                            debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                            molestiae non recusandae.`
                        ],

                        ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?`,
                },
                {
                        cls: "news-banner flex-wrap-row-justify-space-evenly",
                        date: "2025-05-01",
                        headline:"SOSENT - Norges Landsforening for sosialt entreprenørskap",
                        image:
                        {
                            src: "./static/img/logo/SosEnt-favicon.png",
                            alt: "News banner",
                        },
                        
                        lede: `
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.`,

                        main: 
                        [
                            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                            nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                            porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                            Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                            erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                        
                            `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                            Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                            a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                            Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                            vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                            Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                            `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                            occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                            et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                            cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                            assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                            debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                                        molestiae non recusandae.`

                        ],

                        ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?`,
                },
        ],
 
        pages:
        [
            {
                id: 0,
                name: "aboutUs",
                content:
                {
                    cls: "about-container flex-wrap-column-align-items-center",
                    headline: "SOSENT- Norge Sammen for et bærekraftig Norge",
                    text: "Kontakt oss gjerne for en kaffe prat",
                    banner:
                    {
                        src: "./static/img/sosent/Gemini_Generated_Image_opf6gwopf6gwopf6.jpeg",
                        alt: "SOSENT-Team.jpg",
                    },

                    documentation:
                    {
                        headline: "Grunnlagsdokumentasjon",
                        description: "Her finner du organisasjonens grunnlagsdokumenter.",
                        files:
                        [
                            {
                                cls: "flex-column documents",
                                name: "Vedtekter",
                                date: "01.05.2025",
                                description: "PDF av organisasjonens vedtekter",
                                src: "./docs/vedtekter.pdf",
                            },
                            {
                                cls: "flex-column documents",
                                name: "Styre medlemmer",
                                date: "01.05.2025",
                                description: "PDF av organisasjonens styremedlemmer",
                                src: "./docs/vedtekter.pdf",
                            },
                        ],
                    },

                    paragraphs: 
                        [
                            {
                                heading:"Om oss",
                                paragraph: 
                                [
                                    `SosEnt Norge – Landsforeningen for sosiale entreprenører – er en interessepolitisk forening
                                    som søker å styrke og påvirke rammebetingelser og regelverk til beste for sosiale entreprenører i Norge.`,

                                    `Vi arbeider for å få etablert forståelsen og aksepten for denne 4. sektoren hos myndigheter,
                                    beslutningstakerne og de andre sektorene; offentlig, privat og frivillig.`,

                                    `Foreningen ønsker å være en kunnskapsbank for sosiale entreprenører, og
                                    en høringsinstans for saker som angår sosialt entreprenørskap. Vi vil rådgi
                                    våre medlemmer, gjøre tilgjengelig informasjon om støtte- og
                                    tilskuddsordninger og bidra med aktuelle tolkninger av forskrifter og
                                    regelverk. Vi vil også arrangere møteplasser og nettverk for sosiale
                                    entreprenører og andre som er interessert i sosialt entreprenørskap.`,

                                    `Foreningen etablerer fordelsprogram med aktuelle leverandører av varer,
                                    programvare og forsikringsordninger. Et medlemskap i SosEnt Norge lønner seg!`,

                                    `Foreningen ble stiftet i april 2025. Samfunnsbedriftene ivaretar foreningens
                                    sekretariat/sekretariatsfunksjoner, og generalsekretæren har sin ansettelse der`,

                                ] 
                            },
                    ],
                    constitution:
                    [
                        {
                            headline: "Virkeområde / Formål",
                            paragraphs: 
                            [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                            ],
                        },
                        {
                            headline: "Medlemskap",
                            paragraphs: [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                            ],
                        },
                        {
                            headline: "Organisasjonens styre",
                            paragraphs: [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                            ],
                        },
                        {
                            headline: "årsmøte",
                            paragraphs: [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                            ],
                        },
                        {
                            headline: "Aktiviteter",
                            paragraphs: [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                            ],
                        },
                        {
                            headline: "Forvaltning",
                            paragraphs: [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                            ],
                        },
                        {
                            headline: "Oppløsning",
                            paragraphs: [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                            ],
                        }, 
                    ],
                },
            },
            {
                id: 1,
                name: "news",
                content:
                {
                    cls: "news-container flex-wrap-row-justify-space-evenly",
                    headline:"SOSENT - Norge Nyheter",
                    articles:
                    [
                        {
                            cls: "news-banner flex-wrap-row link",
                            date: "2023-10-01",
                            headline:"Referat Fra Styremøte 2023",
                            image:
                            {
                                cls: "article-image",
                                src: "./static/img/sosent/Gemini_Generated_Image_opf6gwopf6gwopf6.jpeg",
                                alt: "Styret i SOSENT",
                            },

                            lede: `
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.`,

                            main: 
                            [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                        
                                `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                                Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                                a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                                Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                                vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                                Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                                `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                                et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                                cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                                debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                                molestiae non recusandae.`
                            ],
                            ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                            velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                            pariatur?`,
                        },
                        {
                            cls: "news-banner flex-wrap-row",
                            date: "2025-05-01",
                            headline:"SOSENT - Norges Landsforening For Sosialt Entreprenørskap",
                            image:
                            {
                                cls: "article-image",
                                src: "./static/img/logo/SosEnt-favicon.png",
                                alt: "News banner",
                            }, 

                            lede: `
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur.`,

                            main:
                            [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                        
                                `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                                Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                                a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                                Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                                vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                                Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                                `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                                et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                                cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                                debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                                molestiae non recusandae.`

                            ],

                            ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                                voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                                nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                                velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur?`,
                        },
                        {
                            cls: "news-banner flex-wrap-row",
                            date: "2025-05-01",
                            headline:"SOSENT - Norges Landsforening for sosialt entreprenørskap",
                            image:
                            {
                                cls: "article-image",
                                src: "./static/img/logo/SosEnt-favicon.png",
                                alt: "News banner",
                            }, 

                            lede: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat null
                                pariatur.`,

                            main:
                            [
                                `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                                nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                                porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                                Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                                erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,
                                        
                                `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                                Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                                a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus.
                                Fusce sit amet sollicitudin sapien. Vestibulum sollicitudin orci leo. Nulla efficitur
                                vehicula augue a commodo. Vivamus vehicula ultricies nibh, id elementum nulla lacinia in.
                                Curabitur arcu lacus, tincidunt ut laoreet id, dapibus sed libero.`,

                                `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est
                                et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                                cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                                debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                                molestiae non recusandae.`
                            ],

                            ending: `Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                            voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,
                            nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate
                            velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                            pariatur?`,
                        },
                    ]
                },
            },
            {
                id: 2,
                name: "membersPortal",
                title: "For Medlemmene",
                content:
                {
                    updated: "2023",
                    cls: "vedtekter-article",
                    headline:"Velkommen til SOSENT's Medlemsportal",
                    description: "Her finner du informasjon og ressurser for våre medlemmer.",
                    banner:
                    {
                        src: "./static/img/logo/sosent-logo.png",
                        alt: "SOSENT Logo",
                    },
                    paragraphs:
                    [
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer quis arcu at eros sagittis fermentum.
                        Suspendisse sed libero interdum, placerat tellus at, congue libero. Pellentesque habitant morbi
                        tristique senectus et netus et malesuada fames ac turpis egestas. Proin lacus lorem, ultrices pharetra
                        vehicula vitae, placerat pellentesque massa. Quisque molestie nulla nibh, et malesuada augue consectetur
                        vitae. Pellentesque massa enim, pharetra et nisi non, sodales bibendum orci. Nunc magna augue, convallis
                        id quam at, imperdiet condimentum mauris. Sed lorem libero, porta ac magna et, efficitur accumsan nisi.
                        Proin eu orci viverra, interdum ligula eget, congue mauris. Praesent nulla augue, bibendum id quam non,
                        scelerisque auctor lorem. Morbi scelerisque, felis vestibulum commodo faucibus, est mauris accumsan turpis,
                        nec cursus mi massa in risus.`, 

                        `Etiam pharetra ligula at nibh rhoncus aliquet. Sed nec massa vulputate metus facilisis vestibulum.
                        Suspendisse bibendum ac magna vitae finibus. Aliquam ornare auctor enim eget feugiat. Maecenas justo elit,
                        commodo non pharetra non, elementum sed ipsum. Curabitur at libero eget erat aliquam pretium id id risus.
                        Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam at metus iaculis, imperdiet nibh eu,
                        iaculis orci. Quisque nec mi vel orci eleifend finibus. Nullam a porttitor mi. Aliquam consequat sodales
                        est sit amet ultrices. Mauris placerat tempor rutrum.`,

                        `Curabitur non imperdiet ligula. Etiam varius massa cursus nunc pulvinar, eget iaculis est venenatis.
                        Mauris dolor turpis, congue in tortor id, gravida ornare mauris. Nam tristique mattis est, vel vulputate
                        est mattis nec. Ut rhoncus interdum pharetra. Fusce tristique, metus fermentum accumsan posuere, enim lorem
                        gravida mauris, eget aliquam tortor metus id ipsum. Etiam sit amet placerat justo. Fusce quis elit ac leo
                        elementum aliquam. Nunc ac convallis augue, quis sagittis felis. Aenean mattis, dolor in dictum congue,
                        augue lorem condimentum lacus, in malesuada ante risus non nisl. Vestibulum dictum auctor augue, a faucibus
                        quam sodales vitae. In tincidunt nulla hendrerit, porttitor augue ut, faucibus lacus.`,

                        `Pellentesque consectetur felis sit amet vulputate condimentum. Sed accumsan nunc in dui tempor mollis.
                        Aenean suscipit ornare felis, vel luctus nibh. Nullam in velit eu ex tincidunt hendrerit eget nec urna.
                        Nulla tellus nisl, gravida eu ultricies vitae, tempor vitae velit. Phasellus ultricies sapien sed diam
                        elementum, quis dapibus eros luctus. Aenean consequat efficitur eros, sed lacinia mauris vulputate quis.
                        Sed tempor arcu sed sem tristique tempor. Maecenas vestibulum convallis erat, ac dignissim leo dignissim ac.
                        Integer a efficitur metus. Aliquam accumsan dignissim nunc, sed feugiat lectus sollicitudin id.`,

                        `Nulla laoreet orci libero, sit amet imperdiet diam dignissim sed. Proin molestie metus eu maximus accumsan.
                        Suspendisse mattis felis sed facilisis pharetra. Suspendisse eu purus in massa hendrerit fermentum. Etiam a mi
                        enim. In accumsan, ex eu tincidunt condimentum, sem tellus dignissim augue, vel eleifend arcu erat a lectus.
                        Donec non pellentesque mauris. Aenean vel pellentesque turpis. Maecenas ut nibh sed arcu imperdiet pretium.
                        In finibus eu sem et bibendum. Cras volutpat non felis in placerat. Integer aliquet euismod tincidunt. Duis
                        in elementum felis, vitae varius diam. Donec aliquet, libero vestibulum pretium suscipit, nibh ante eleifend
                        eros, eu suscipit felis diam vel neque. Nunc malesuada felis vitae imperdiet rhoncus. Aliquam quam lorem,aliquet at tristique quis, tristique id neque.`,
                    ]
                },

                credentials:
                {
                    password: "x",
                },
                loggedIn: false,
                archive:
                [
                ],
            },
            {
                id: 3,
                name: "membership",
                cls: "membership-container flex-wrap-row-justify-space-evenly",
                
                content:
                {
                    cls: "member-container flex-wrap-row-justify-space-evenly",
                    headline: "Bli Medlem i SOSENT",
                    href: "https://response.questback.com/isa/qbv.dll/bylink?p=164g6KsM99iFiEoIuFBSPf4vlpq1wCY39OK0FW7sqwkdWfjDQ29a9XFSuJlAyLXr0",
                    paragraphs:
                    [
                        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et eros vel
                        nunc scelerisque bibendum. Mauris et maximus diam, vitae convallis sem. In quis
                        porttitor purus. Proin eget erat sed libero vestibulum venenatis quis a dui.
                        Vestibulum fermentum diam vitae lorem maximus, ac elementum nulla rutrum. Aliquam
                        erat volutpat. Nam ac massa vel nunc scelerisque bibendum.`,

                        `Curabitur vehicula tortor tortor, ut lacinia felis vestibulum pellentesque.
                        Proin malesuada iaculis eros pulvinar efficitur. Nam eget pulvinar erat. Ut imperdiet
                        a tellus sit amet pulvinar. Nam accumsan dignissim gravida. Nam lacinia sodales faucibus. `,
                    ]
                },
            },
        ],
        contact:
        {
            cls: "contact-container flex-wrap-row-justify-space-evenly",
            content:
            [
                {
                    name: "Helle V. Rødahl",
                    title: "Styreleder",
                    phone: "+47 12 34 56 78",
                    email: "helle@sosent.no",
                    image:
                        {
                            cls: "",
                            alt: "Helle V. Rødahl",
                            src: "./static/img/team/profil-helle-privat.jpg",
                        },
                },
                {
                    cls: "contact-container ",
                    name: "Rune J. Kvarme",
                    title: "Generalsekretær",
                    phone: "+47 12 34 56 78",
                    email: "rune@sosent.no",
                    image:
                        {
                            cls: "",
                            alt: "Rune J. Kvarme",
                            src: "./static/img/team/52700234381_5e75074f92_q.jpg",
                        },
                },
            ],
        },
        partners:
        [
            {
                name: "GET Academy",
                href: "https://www.getacademy.no/",
                logo:
                {
                    src: "./static/img/partners/GET_RGB_logo.png",
                    alt: "GET Acedemy Logo",
                },
            },
            {
                name: "Sosialt Entreprenørskap Norge",
                href: "https://sosent.no/",
                logo:
                {
                    src: "./static/img/logo/SosEnt-favicon.png",
                    alt: "SOSENT Logo",
                },
            },
        ],
        members:
        {
            headline: "SosEnT Medlemmer",
            memberships:
            [
                {
                    name: "Dummy Sosial Entreprenør",
                    href: "https://klarkompetanse.no",
                    logo:
                    {
                        cls: "member-logo",
                        src: "./static/img/logo/SosEnt-favicon.png",
                        alt: "SOSENT Logo",
                    },
                }
            ],
        },
    },
} 