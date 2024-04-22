const express = require('express');
const app = express();
const path = require('path');

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(__dirname + '/public'));

const usuarios = {
    Renzo: {
        nombre: 'Renzo Sarmiento',
        cv: '/cv/SarmientoRenzo_CV.pdf',
        grado: 'Titulado',
        telefono: '+51 900574926',
        ubicacion: 'Trujillo, Perú',
        cumple: '07 de Marzo',
        exp: '5 años',
        email: 'renzo.sarmiento@tecsup.edu.pe',
        free: 'Disponible',
        image: '/img/profile.jpg',
        color: 'bg-primary',
        texto: 'text-primary',
        borde: 'btn-outline-primary',

        mensajeuno:'Web Designer',
        mensajedos:'Web Developer',
        mensajetres:'Front End Developer',

        especialidad: 'UI/UX Designer & Web Developer',
        descripcion: 'Soy un apasionado diseñador de interfaces de usuario (UI) y desarrollador web con un enfoque centrado en crear experiencias digitales intuitivas y atractivas. Con una sólida formación en diseño gráfico y experiencia en desarrollo web, me especializo en traducir las necesidades del usuario en interfaces elegantes y funcionales. Constantemente explorando nuevas técnicas y tendencias, me enorgullece colaborar estrechamente con clientes y equipos multidisciplinarios para llevar proyectos desde la concepción hasta la implementación con éxito. ¡Bienvenido a mi página, espero inspirarte con mi trabajo!',
        educacion:{
            primera:{
                titulo: 'Licenciatura en Diseño y Desarrollo de Software',
                lugar: 'Tecsup',
                fecha: '2022 - 2024',
                resumen: 'Durante mi formación, adquirí una sólida comprensión de los principios fundamentales del diseño centrado en el usuario y desarrollé habilidades en la creación de interfaces intuitivas y atractivas.'
            },
            segunda:{
                titulo: 'Certificación en Desarrollo Web Full Stack',
                lugar: 'Tecsup',
                fecha: '2022 - 2024',
                resumen: 'Este programa me proporcionó una comprensión completa del desarrollo front-end y back-end, así como experiencia práctica en la creación de aplicaciones web dinámicas y funcionales.'
            },
            tercera:{
                titulo: 'Cursos y Talleres de Actualizaciónk',
                lugar: 'Tecsup',
                fecha: '2022 - 2024',
                resumen: 'Este programa me proporcionó una comprensión completa del desarrollo front-end y back-end, así como experiencia práctica en la creación de aplicaciones web dinámicas y funcionales.'
            },
            cuarta:{
                titulo: 'Certificación en Desarrollo Web Full Stack',
                lugar: 'Tecsup',
                fecha: '2022 - 2024',
                resumen: 'Continuamente busco oportunidades para mejorar mis habilidades y mantenerme al día con las últimas tendencias y tecnologías en diseño y desarrollo web. He participado en una variedad de cursos y talleres, incluyendo temas como diseño responsivo, accesibilidad web y diseño de experiencias de usuario.'
            }    
        },
        experiencia:{
            primera:{
                titulo:'Diseñador de UI/UX',
                lugar:'PixelPerfect Solutionsy',
                fecha:'2021 - Presente',
                resumen: 'En mi rol como diseñador de UI/UX en PixelPerfect Solutions, colaboré estrechamente con equipos de desarrollo para crear interfaces de usuario intuitivas y atractivas para aplicaciones web y móviles.'
            },
            segunda:{
                titulo:'Desarrollador Web Front-end',
                lugar:'CodeCrafters Inc.',
                fecha:'2021 - Presente',
                resumen: 'Como desarrollador web front-end en CodeCrafters Inc., fui responsable de traducir diseños de UI/UX en código HTML, CSS y JavaScript.'
            },
            tercera:{
                titulo:'Freelance UI/UX Consultant',
                lugar:'Freelance',
                fecha:'2021 - Presente',
                resumen: 'Como consultor independiente de UI/UX, he tenido la oportunidad de trabajar con una variedad de clientes en diferentes sectores. Desde start-ups hasta empresas establecidas.'
            },
            cuarta:{
                titulo:'Desarrollador Web Back-end',
                lugar:'Backend Solutions LLC',
                fecha:'2021 - Presente',
                resumen: 'En mi rol como desarrollador web back-end en Backend Solutions LLC, me encargo de desarrollar y mantener la lógica y funcionalidades del servidor, así como de integrar la aplicación web con bases de datos y otros sistemas.'
            }
        },
        habilidad:{
            uno:{
                nombre:'HTML',
                valor:'100',
                color:'bg-danger'
            },
            dos:{
                nombre:'CSS',
                valor:'80',
                color:'bg-primary'
            },
            tres:{
                nombre:'PHP',
                valor:'60',
                color:'bg-primary'
            },
            cuatro:{
                nombre:'Javascript',
                valor:'90',
                color:'bg-warning'
            },
            cinco:{
                nombre:'Angular',
                valor:'78',
                color:'bg-danger'
            },
            seis:{
                nombre:'Wordpress',
                valor:'50',
                color:'bg-primary'
            }
        },
        servicio:{
            uno:{
                titulo:'Web Design',
                descripcion:'Con un enfoque meticuloso en cada detalle, creo diseños web que no solo son visualmente impactantes, sino también intuitivos y fáciles de navegar.',
                icono:'fa fa-2x fa-laptop'
            },
            dos:{
                titulo:'Web Development',
                descripcion:'Desde la conceptualización hasta la implementación, transformo tus ideas en sitios web dinámicos y funcionales.',
                icono:'fa fa-2x fa-laptop-code'
            },
            tres:{
                titulo:'Apps Design',
                descripcion:'Cada aplicación tiene su propia historia que contar, y me especializo en diseñar interfaces que cautivan y deleitan a los usuarios.',
                icono:'fab fa-2x fa-android'
            },
            cuatro:{
                titulo:'Apps Development',
                descripcion:'Desde aplicaciones móviles hasta soluciones empresariales, desarrollo aplicaciones que impulsan el éxito de tu negocio.',
                icono:'fab fa-2x fa-apple'
            },
            cinco:{
                titulo:'SEO',
                descripcion:'Desde la investigación de palabras clave hasta la optimización técnica, implemento estrategias SEO personalizadas que aumentan tu visibilidad y atraen tráfico de calidad a tu sitio.',
                icono:'fa fa-2x fa-search'
            },
            seis:{
                titulo:'Content Creating',
                descripcion:'El contenido es el alma de cualquier estrategia digital, y me especializo en crear contenido que resuene con tu audiencia y impulse la participación.',
                icono:'fa fa-2x fa-edit'
            }
        },
        portafolio:{
            diseño:{
                uno:{
                    img:'/img/portfolio-1.jpg',
                    categoria:'first',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-2.jpg',
                    categoria:'first',
                    enlace:''
                },
            
            },
            desarrollo:{
                uno:{
                    img:'/img/portfolio-3.jpg',
                    categoria:'second',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-4.jpg',
                    categoria:'second',
                    enlace:''
                },
            },
            marketing:{
                uno:{
                    img:'/img/portfolio-5.jpg',
                    categoria:'third',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-6.jpg',
                    categoria:'third',
                    enlace:''
                },
            },
        },
        novedades:{
            uno:{
                titulo:'Tendencias en Diseño Gráfico para el 2024',
                mes:'Abr',
                dia:'17',
                img:'/img/blog-1.jpg',
                enlace:''
            },
            dos:{
                titulo:'Los Fundamentos del Desarrollo Front-end',
                mes:'Abr',
                dia:'18',
                img:'/img/blog-2.jpg',
                enlace:''
            },
            tres:{
                titulo:'Estrategias Efectivas de Marketing de Contenido',
                mes:'Abr',
                dia:'19',
                img:'/img/blog-3.jpg',
                enlace:''
            },
        }
    },
    Carmen: {
        nombre: 'Carmen Sandoval',
        cv: "/cv/CV_CARMEN RUTH SANDOVAL CAJUSOl_CV.pdf",
        grado: 'Titulado',
        telefono: '+51 937473824',
        ubicacion: 'Lima, Perú',
        cumple: '01 de Junio',
        exp: '6 años',
        email: 'carmen.sandoval@tecsup.edu.pe',
        free: 'Disponible',
        image: '/img/carmen.jpg',
        color: 'bg-danger',
        texto: 'text-danger',
        borde: 'btn-outline-danger',
        

        mensajeuno: 'Diseñadora Web',
        mensajedos: 'Desarrolladora Web Front-end y Back-end',
        mensajetres: 'Especialista en Experiencia de Usuario (UX)',

        especialidad: 'Diseñadora de UI/UX y Desarrolladora Web Frontend:',
        descripcion: 'Como mujer desarrolladora web y diseñadora de interfaces de usuario (UI), mi pasión radica en crear experiencias digitales que sean tanto intuitivas como visualmente atractivas. Con una sólida formación en diseño gráfico y una amplia experiencia en desarrollo web, me dedico a transformar las necesidades del usuario en interfaces elegantes y funcionales. Siempre estoy buscando nuevas formas de innovar y mejorar mi trabajo, y disfruto colaborar estrechamente con clientes y equipos multidisciplinarios para llevar proyectos desde la concepción hasta la implementación con éxito. ¡Bienvenida a mi página, donde espero poder inspirarte con mi creatividad y profesionalismo!',
        educacion:{
            primera:{
                titulo: 'Tecnica en Diseño de Experiencia de Usuario',
                lugar: 'Tecsup',
                fecha: '2020 - 2024',
                resumen: 'Durante mi formación, he tenido comprensión de los principios fundamentales del diseño centrado en el usuario y desarrollé habilidades en la creación de interfaces intuitivas y atractivas.'
            },
            segunda:{
                titulo: 'Certificación en Desarrollo Web Frontend',
                lugar: 'Universidad Pedro Ruiz Gallo',
                fecha: '2021 - 2022',
                resumen: 'Este programa me ayudo a tener comprensión completa del desarrollo frontend y experiencia práctica en la creación de sitios web dinámicos y atractivos.'
            },
            tercera:{
                titulo: 'Curso de Diseño Responsivo y Accesibilidad Web',
                lugar: 'Centro de Estudios de Diseño de Lambayeque',
                fecha: '2023',
                resumen: 'Continuamente busco oportunidades para mejorar mis habilidades y mantenerme al día con las últimas tendencias y tecnologías en diseño y desarrollo web. He participado en una variedad de cursos y talleres, incluyendo temas como diseño responsivo, accesibilidad web y diseño de experiencias de usuario.'
            },
            cuarta:{
                titulo: 'Certificación en SCRUM',
                lugar: 'Tecsup',
                fecha: '2023 - 2024',
                resumen: 'Esta certificación me capacitó en la metodología ágil SCRUM, proporcionándome las herramientas y técnicas necesarias para gestionar proyectos de desarrollo de software de manera eficiente y colaborativa. Aprendí a trabajar en equipos multidisciplinarios, optimizar procesos y entregar productos de alta calidad en plazos ajustados.'
            }             
        },
        experiencia:{
            primera:{
                titulo:'Diseñador Gráfico',
                lugar:'Artistic Creations Studio',
                fecha:'2019 - Presente',
                resumen: 'En mi posición como diseñador gráfico en Artistic Creations Studio, me especializo en la creación de diseños visuales impactantes para una variedad de proyectos de marca y marketing. Colaboro estrechamente con clientes para entender sus necesidades y traducirlas en soluciones visuales creativas y efectivas.'
            },
            segunda:{
                titulo:'Desarrollador Web Full Stack',
                lugar:'Tech Solutions Group',
                fecha:'2018 - Presente',
                resumen: 'Como desarrollador web full stack en Tech Solutions Group, trabajo en todas las capas de desarrollo de aplicaciones web, desde el frontend hasta el backend. Colaboro con equipos multifuncionales para crear productos digitales que cumplan con los estándares de calidad y rendimiento, utilizando tecnologías modernas y buenas prácticas de desarrollo.'
            },
            tercera:{
                titulo:'Diseñador de Experiencia de Usuario',
                lugar:'Digital Insights Agency',
                fecha:'2017 - Presente',
                resumen: 'En mi rol como diseñador de experiencia de usuario en Digital Insights Agency, lidero la creación de experiencias digitales intuitivas y atractivas para una variedad de plataformas y dispositivos. Utilizo técnicas de diseño centradas en el usuario y colaboro estrechamente con equipos multidisciplinarios para garantizar la coherencia y la usabilidad.'
            },
            cuarta:{
                titulo:'Especialista en Desarrollo Web',
                lugar:'WebTech Innovations',
                fecha:'2016 - Presente',
                resumen: 'Como especialista en desarrollo web en WebTech Innovations, estoy involucrado en proyectos de desarrollo web desde la conceptualización hasta la implementación. Trabajo en estrecha colaboración con diseñadores y equipos de desarrollo para crear sitios web y aplicaciones web que sean visualmente atractivos y funcionales.'
            }
        },        
        habilidad:{
            uno:{
                nombre:'HTML',
                valor:'98',
                color:'bg-danger'
            },
            dos:{
                nombre:'CSS',
                valor:'85',
                color:'bg-primary'
            },
            tres:{
                nombre:'JAVA',
                valor:'99',
                color:'bg-danger'
            },
            cuatro:{
                nombre:'Javascript',
                valor:'100',
                color:'bg-warning'
            },
            cinco:{
                nombre:'Angular',
                valor:'80',
                color:'bg-danger'
            },
            seis:{
                nombre:'PHP',
                valor:'75',
                color:'bg-primary'
            }
        },
        servicio:{
            uno:{
                titulo:'Diseño Web',
                descripcion:'Con un buen efecto en cada detalle, creo diseños web que no solo son visualmente impactantes, sino también intuitivos y fáciles de navegar.',
                icono:'fas fa-2x fa-paint-brush'
            },
            dos:{
                titulo:'Diseño de Logotipos',
                descripcion:'Diseño logotipos que reflejen la identidad y personalidad de tu marca, destacándola entre la competencia.',
                icono:'fas fa-2x fa-pen-nib'
            },
            tres:{
                titulo:'Diseño de Interfaz de Usuario (UI)',
                descripcion:'Diseño interfaces de usuario atractivas y funcionales que optimizan la experiencia del usuario en tu sitio web o aplicación.',
                icono:'fas fa-2x fa-desktop'
            },
            cuatro:{
                titulo:'Diseño de Experiencia de Usuario (UX)',
                descripcion:'Diseño experiencias de usuario que satisfagan las necesidades del usuario y generen interacciones significativas con tu marca.',
                icono:'fas fa-2x fa-user'
            },
            cinco:{
                titulo:'Diseño de Landing Pages',
                descripcion:'Diseño páginas de aterrizaje efectivas que conviertan visitantes en clientes potenciales, maximizando el retorno de inversión.',
                icono:'fas fa-2x fa-file-alt'
            },
            seis:{
                titulo:'Diseño Responsivo',
                descripcion:'Diseño sitios web adaptables a diferentes dispositivos y pantallas, garantizando una experiencia consistente para todos los usuarios.',
                icono:'fas fa-2x fa-mobile-alt'
            }
        },        
        portafolio:{
            diseño:{
                uno:{
                    img:'/img/portfolio-5.jpg',
                    categoria:'first',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-2.jpg',
                    categoria:'first',
                    enlace:''
                },
            
            },
            desarrollo:{
                uno:{
                    img:'/img/blog-1.jpg',
                    categoria:'second',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-6.jpg',
                    categoria:'second',
                    enlace:''
                },
            },
            marketing:{
                uno:{
                    img:'/img/portfolio-4.jpg',
                    categoria:'third',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-3.jpg',
                    categoria:'third',
                    enlace:''
                },
            },
        },
        novedades:{
            uno:{
                titulo:'Tendencias en Diseño Gráfico para el 2024',
                mes:'17',
                dia:'Abr',
                img:'/img/portfolio-6.jpg',
                enlace:''
            },
            dos:{
                titulo:'Los Fundamentos del Desarrollo Front-end',
                mes:'18',
                dia:'Abr',
                img:'/img/portfolio-2.jpg',
                enlace:''
            },
            tres:{
                titulo:'Estrategias Efectivas de Marketing de Contenido',
                mes:'19',
                dia:'Abr',
                img:'/img/blog-1.jpg',
                enlace:''
            },
        }
    },
    Leomar: {
        nombre: 'Leomar Urcia',
        cv: '/cv/UrciaLeomar_CV.pdf',
        grado: 'Titulado',
        telefono: '+51 983636274',
        ubicacion: 'Cartavio, Perú',
        cumple: '28 de abril',
        exp: '5 años',
        email: 'leomar.urcia@tecsup.edu.pe',
        free: 'Disponible',
        image: '/img/leomar.jpg',
        color: 'bg-warning',
        texto: 'text-warning',
        borde: 'btn-outline-warning',

        mensajeuno: 'Ingeniero de Software Web',
        mensajedos: 'Diseñador de Sitios Web',
        mensajetres: 'Desarrollador Front-end',

        especialidad: 'UI/UX Specialist & Frontend Developer',
        descripcion: 'Como desarrollador web y diseñador de interfaces de usuario (UI), me apasiona crear experiencias digitales que cautiven a los usuarios. Con una sólida formación en diseño gráfico y una amplia experiencia en desarrollo web, me dedico a traducir las necesidades del usuario en interfaces elegantes y funcionales. Siempre estoy al tanto de las últimas tendencias y técnicas en el campo, y disfruto colaborar estrechamente con clientes y equipos multidisciplinarios para llevar proyectos desde la concepción hasta la implementación exitosa. ¡Bienvenido a mi página!',
        educacion:{
            primera:{
                titulo: 'Tecnico en Sistemas Informáticos',
                lugar: 'Tecsup',
                fecha: '2020 - 2024',
                resumen: 'Adquirí una sólida base en sistemas informáticos, incluyendo programación, administración de redes y desarrollo web.'
            },
            segunda:{
                titulo: 'Certificación en Desarrollo Web Backend',
                lugar: 'Instituto Tecnológico de Pacasmayo',
                fecha: '2021 - 2023',
                resumen: 'Esto me facilita el desarrollo backend y experiencia práctica en la creación de sistemas robustos para aplicaciones web.'
            },
            tercera:{
                titulo: 'Curso de Administración de Servidores',
                lugar: 'Centro de Estudios de Tecnología de Pacasmayo',
                fecha: '2024',
                resumen: 'Para complementar mis habilidades en desarrollo web backend, he realizado cursos especializados en administración de servidores, enfocados en garantizar la disponibilidad y seguridad de los sistemas web.'
            },
            cuarta:{
                titulo: 'Certificación en HTML',
                lugar: 'Tecsup',
                fecha: '2022 - 2021',
                resumen: 'Interesante caácitación en HTML, uno de los lenguajes fundamentales para el desarrollo web. A través de este curso, adquirí habilidades avanzadas en la creación de estructuras y elementos web, así como en la implementación de prácticas modernas de diseño y accesibilidad.'
            }              
        },
        experiencia:{
            primera:{
                titulo:'Diseñador de Interfaces de Usuario',
                lugar:'Visual Concepts Design Studio',
                fecha:'2018 - Presente',
                resumen: 'En mi rol como diseñador de interfaces de usuario en Visual Concepts Design Studio, lidero la creación de interfaces visuales atractivas y funcionales para aplicaciones web y móviles. Colaboro con equipos de desarrollo para garantizar la coherencia entre el diseño visual y la funcionalidad del producto final.'
            },
            segunda:{
                titulo:'Desarrollador Web Front-end',
                lugar:'CodeCrafters Solutions',
                fecha:'2017 - Presente',
                resumen: 'Como desarrollador web front-end en CodeCrafters Solutions, soy responsable de traducir diseños de UI/UX en código HTML, CSS y JavaScript. Trabajo en proyectos diversos, desde sitios web corporativos hasta aplicaciones web interactivas, asegurando la calidad y la compatibilidad con múltiples dispositivos.'
            },
            tercera:{
                titulo:'Diseñador de Experiencia de Usuario',
                lugar:'UserFirst Design Agency',
                fecha:'2016 - Presente',
                resumen: 'En mi posición como diseñador de experiencia de usuario en UserFirst Design Agency, lidero proyectos de investigación y diseño centrados en crear experiencias digitales intuitivas y satisfactorias. Utilizo técnicas de diseño centrado en el usuario para comprender las necesidades y expectativas de los usuarios y diseñar soluciones efectivas.'
            },
            cuarta:{
                titulo:'Desarrollador Web Back-end',
                lugar:'Backend Solutions Group',
                fecha:'2015 - Presente',
                resumen: 'Como desarrollador web back-end en Backend Solutions Group, me especializo en el desarrollo y mantenimiento de la lógica del servidor y la integración de sistemas. Trabajo en proyectos que van desde aplicaciones web simples hasta plataformas web complejas, asegurando la funcionalidad y la seguridad del lado del servidor.'
            }
        },        
        habilidad:{
            uno:{
                nombre:'CSS',
                valor:'85',
                color:'bg-primary'
            },
            dos:{
                nombre:'HTML',
                valor:'94',
                color:'bg-danger'
            },
            tres:{
                nombre:'PHP',
                valor:'57',
                color:'bg-primary'
            },
            cuatro:{
                nombre:'Javascript',
                valor:'85',
                color:'bg-warning'
            },
            cinco:{
                nombre:'Angular',
                valor:'95',
                color:'bg-danger'
            },
            seis:{
                nombre:'Node',
                valor:'85',
                color:'bg-primary'
            }
        },
        servicio:{
            uno:{
                titulo:'Optimización en Motores de Búsqueda (SEO)',
                descripcion:'Desde la investigación de palabras clave hasta la optimización técnica, implemento estrategias SEO personalizadas que aumentan tu visibilidad y atraen tráfico de calidad a tu sitio.',
                icono:'fas fa-2x fa-search'
            },
            dos:{
                titulo:'Análisis de Competencia',
                descripcion:'Realizo análisis detallados de la competencia para identificar oportunidades de mejora y estrategias que te ayuden a destacar en tu sector.',
                icono:'fas fa-2x fa-chart-line'
            },
            tres:{
                titulo:'Auditoría de Sitios Web',
                descripcion:'Realizo auditorías exhaustivas de tu sitio web para identificar áreas de mejora y optimización que impulsen su rendimiento en los motores de búsqueda.',
                icono:'fas fa-2x fa-laptop-code'
            },
            cuatro:{
                titulo:'Creación de Contenido Optimizado',
                descripcion:'Creo contenido optimizado para motores de búsqueda que aumente la relevancia y autoridad de tu sitio web, mejorando su posicionamiento en los resultados de búsqueda.',
                icono:'fas fa-2x fa-file-alt'
            },
            cinco:{
                titulo:'Link Building',
                descripcion:'Implemento estrategias de link building efectivas para aumentar la autoridad de tu sitio web y mejorar su posicionamiento en los motores de búsqueda.',
                icono:'fas fa-2x fa-link'
            },
            seis:{
                titulo:'Optimización de Velocidad de Carga',
                descripcion:'Optimizo la velocidad de carga de tu sitio web para mejorar la experiencia del usuario y el posicionamiento en los motores de búsqueda.',
                icono:'fas fa-2x fa-tachometer-alt'
            }
        },        
        portafolio:{
            diseño:{
                uno:{
                    img:'/img/portfolio-4.jpg',
                    categoria:'first',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-1.jpg',
                    categoria:'first',
                    enlace:''
                },
            
            },
            desarrollo:{
                uno:{
                    img:'/img/portfolio-6.jpg',
                    categoria:'second',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-3.jpg',
                    categoria:'second',
                    enlace:''
                },
            },
            marketing:{
                uno:{
                    img:'/img/portfolio-5.jpg',
                    categoria:'third',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-2.jpg',
                    categoria:'third',
                    enlace:''
                },
            },
        },
        novedades:{
            uno:{
                titulo:'Tendencias en Diseño Gráfico para el 2024',
                mes:'17',
                dia:'Abr',
                img:'/img/blog-2.jpg',
                enlace:''
            },
            dos:{
                titulo:'Los Fundamentos del Desarrollo Front-end',
                mes:'18',
                dia:'Abr',
                img:'/img/portfolio-4.jpg',
                enlace:''
            },
            tres:{
                titulo:'Estrategias Efectivas de Marketing de Contenido',
                mes:'19',
                dia:'Abr',
                img:'/img/blog-1.jpg',
                enlace:''
            },
        }
    },
    Eduardo: {
        nombre: 'Eduardo Dioses',
        cv: '/cv/DIOSES_MUÑOZ_JHOEL_CV.pdf',
        grado: 'Titulado',
        telefono: '+51 937473824',
        ubicacion: 'Piura, Perú',
        cumple: '12 de Septiembre',
        exp: '6 años',
        email: 'eduardo.dioses@tecsup.edu.pe',
        free: 'No disponible',
        image: '/img/eduardo.jpg',
        color: 'bg-success',
        texto: 'text-success',
        borde: 'btn-outline-success',
        linea: 'border-primary',

        mensajeuno: 'Diseñador Web Creativo',
        mensajedos: 'Desarrollador de Aplicaciones Web',
        mensajetres: 'Especialista en Interfaz de Usuario (UI)',

        especialidad: 'Web Developer with UI/UX Focus',
        descripcion: 'Como desarrollador web y diseñador de interfaces de usuario (UI), mi objetivo es crear experiencias digitales memorables para los usuarios. Con una sólida formación en diseño gráfico y una amplia experiencia en desarrollo web, me especializo en la creación de interfaces que no solo sean funcionales y elegantes, sino también intuitivas y atractivas. Siempre estoy explorando nuevas técnicas y tendencias en el campo, y me enorgullece trabajar en colaboración con clientes y equipos multidisciplinarios para llevar proyectos desde la idea inicial hasta su exitosa implementación. ¡Te invito a explorar mi página!',
        educacion:{
            primera:{
                titulo: 'Tecnico en Desarrollo de Software',
                lugar: 'Tecsup',
                fecha: '2019 - 2023',
                resumen: 'En esta formación incluye habilidades en programación, diseño de bases de datos y gestión de proyectos.'
            },
            segunda:{
                titulo: 'Certificación en Desarrollo Web Full Stack',
                lugar: 'Instituto Tecnológico de Piura',
                fecha: '2020 - 2022',
                resumen: 'Este programa me facilita el desarrollo frontend y backend, así como experiencia práctica en la creación de aplicaciones web dinámicas y funcionales.'
            },
            tercera:{
                titulo: 'Curso de Seguridad Informática',
                lugar: 'Centro de Estudios de Tecnología de Piura',
                fecha: '2024',
                resumen: 'Para complementar mis habilidades en desarrollo web, he realizado cursos especializados en seguridad informática, enfocados en proteger sistemas y datos de posibles amenazas.'
            },
            cuarta:{
                titulo: 'Certificación en Developer',
                lugar: 'Tecsup',
                fecha: '2020 - 2022',
                resumen: 'Durante este curso, amplié mis habilidades como desarrollador abordando aspectos clave del desarrollo web, desde la creación de interfaces de usuario hasta la implementación de funcionalidades complejas. Aprendí a utilizar herramientas y tecnologías modernas para construir aplicaciones web robustas y escalables, cumpliendo con los estándares de calidad y rendimiento.'
            }            
        },
        experiencia:{
            primera:{
                titulo:'Diseñador WEb',
                lugar:'Creative Minds Agency',
                fecha:'2020 - Presente',
                resumen: 'Como diseñador de UI/UX en Creative Minds Agency, lidero la creación de interfaces de usuario innovadoras y atractivas para una variedad de proyectos digitales. Colaboro estrechamente con equipos multidisciplinarios para garantizar que el diseño visual y la experiencia del usuario se alineen con los objetivos del negocio y las necesidades del cliente.'
            },
            segunda:{
                titulo:'Desarrollador Front-end',
                lugar:'Tech Innovations Inc.',
                fecha:'2019 - Presente',
                resumen: 'En mi rol como desarrollador web front-end en Tech Innovations Inc., me encargo de implementar diseños de UI/UX en código HTML, CSS y JavaScript. Trabajo en estrecha colaboración con diseñadores para garantizar la coherencia entre el diseño visual y la funcionalidad del sitio web.'
            },
            tercera:{
                titulo:'Especialista en Experiencia del Usuario',
                lugar:'UserXperience Solutions',
                fecha:'2018 - Presente',
                resumen: 'Como especialista en experiencia del usuario en UserXperience Solutions, lidero proyectos centrados en la investigación y el diseño de experiencias de usuario óptimas. Utilizo técnicas de investigación y análisis para comprender las necesidades y comportamientos de los usuarios, y luego diseño soluciones intuitivas y eficientes.'
            },
            cuarta:{
                titulo:'Desarrollador Web Back-end',
                lugar:'Backend Dynamics',
                fecha:'2017 - Presente',
                resumen: 'En mi rol como desarrollador web back-end en Backend Dynamics, soy responsable del desarrollo y mantenimiento de la lógica del servidor y la integración de sistemas. Trabajo en proyectos que van desde sitios web corporativos hasta aplicaciones web complejas, asegurando que las funcionalidades del lado del servidor funcionen de manera eficiente y segura.'
            }
        },
        
        habilidad:{
            uno:{
                nombre:'JAVA',
                valor:'92',
                color:'bg-danger'
            },
            dos:{
                nombre:'HTML',
                valor:'85',
                color:'bg-danger'
            },
            tres:{
                nombre:'CSS',
                valor:'90',
                color:'bg-primary'
            },
            cuatro:{
                nombre:'Javascript',
                valor:'70',
                color:'bg-warning'
            },
            cinco:{
                nombre:'Angular',
                valor:'75',
                color:'bg-danger'
            },
            seis:{
                nombre:'Wordpress',
                valor:'65',
                color:'bg-primary'
            }
        },
        servicio:{
            uno:{
                titulo:'Desarrollo Web',
                descripcion:'Desde la conceptualización hasta la implementación, transformo tus ideas en sitios web dinámicos y funcionales.',
                icono:'fas fa-2x fa-code'
            },
            dos:{
                titulo:'Desarrollo de Aplicaciones Móviles',
                descripcion:'Desarrollo aplicaciones móviles personalizadas que conecten con tu audiencia y potencien la presencia de tu marca en dispositivos móviles.',
                icono:'fas fa-2x fa-mobile-alt'
            },
            tres:{
                titulo:'Desarrollo de Tiendas en Línea (E-commerce)',
                descripcion:'Desarrollo tiendas en línea seguras y escalables que impulsen las ventas y mejoren la experiencia de compra de tus clientes.',
                icono:'fas fa-2x fa-shopping-cart'
            },
            cuatro:{
                titulo:'Desarrollo de Sistemas Web',
                descripcion:'Desarrollo sistemas web personalizados que automatizan procesos y mejoran la eficiencia operativa de tu empresa.',
                icono:'fas fa-2x fa-cogs'
            },
            cinco:{
                titulo:'Desarrollo de Sistemas de Gestión',
                descripcion:'Desarrollo sistemas de gestión empresarial (ERP) y de relaciones con clientes (CRM) adaptados a las necesidades específicas de tu negocio.',
                icono:'fas fa-2x fa-tasks'
            },
            seis:{
                titulo:'Integración de Plataformas',
                descripcion:'Integración de plataformas y sistemas existentes para optimizar la comunicación y el intercambio de datos entre aplicaciones y herramientas empresariales.',
                icono:'fas fa-2x fa-link'
            }
        },
        
        portafolio:{
            diseño:{
                uno:{
                    img:'/img/portfolio-3.jpg',
                    categoria:'first',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-1.jpg',
                    categoria:'first',
                    enlace:''
                },
            
            },
            desarrollo:{
                uno:{
                    img:'/img/blog-2.jpg',
                    categoria:'second',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-6.jpg',
                    categoria:'second',
                    enlace:''
                },
            },
            marketing:{
                uno:{
                    img:'/img/portfolio-5.jpg',
                    categoria:'third',
                    enlace:''
                },
                dos:{
                    img:'/img/portfolio-4.jpg',
                    categoria:'third',
                    enlace:''
                },
            },
        },
        novedades:{
            uno:{
                titulo:'Tendencias en Diseño Gráfico para el 2024',
                mes:'17',
                dia:'Abr',
                img:'/img/portfolio-2.jpg',
                enlace:''
            },
            dos:{
                titulo:'Los Fundamentos del Desarrollo Front-end',
                mes:'18',
                dia:'Abr',
                img:'/img/testimonial-2.jpg',
                enlace:''
            },
            tres:{
                titulo:'Estrategias Efectivas de Marketing de Contenido',
                mes:'19',
                dia:'Abr',
                img:'/img/portfolio-3.jpg',
                enlace:''
            },
        }
    }
};

app.get('/portafolio/:id', (req, res) => {
    const userId = req.params.id;
    if (usuarios.hasOwnProperty(userId)) {
        const userData = usuarios[userId];
        res.render('index', { data: userData });
    } else {
        res.render('error', { mensaje: 'Usuario no encontrado' });
    }
});


app.get('/descargar-cv/:id', (req, res) => {
    const userId = req.params.id;
    if (usuarios.hasOwnProperty(userId)) {
        const userData = usuarios[userId];
        const cvPath = userData.cv;
        // Descargar el archivo
        res.download(cvPath, userData.nombre + '_CV.pdf', (err) => {
            if (err) {
                res.status(500).send('Error al descargar el CV');
            }
        });
    } else {
        res.status(404).send('Usuario no encontrado');
    }
});



app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
