const express = require('express');
const app = express();
const path = require('path');

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
//app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));

// Datos sobre los usuarios
const usuarios = {
    Renzo: {
        nombre: 'Renzo Sarmiento',
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
                valor:'95',
                color:'bg-danger'
            },
            dos:{
                nombre:'CSS',
                valor:'85',
                color:'bg-primary'
            },
            tres:{
                nombre:'PHP',
                valor:'90',
                color:'bg-primary'
            },
            cuatro:{
                nombre:'Javascript',
                valor:'90',
                color:'bg-warning'
            },
            cinco:{
                nombre:'Angular',
                valor:'95',
                color:'bg-danger'
            },
            seis:{
                nombre:'Wordpress',
                valor:'85',
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
        grado: 'Titulado',
        telefono: '+51 937473824',
        ubicacion: 'Lima, Perú',
        cumple: '12 de Septiembre',
        exp: '6 años',
        email: 'carmen.sandoval@tecsup.edu.pe',
        free: 'Disponible',
        image: '/img/carmen.jpg',
        color: 'bg-danger',
        texto: 'text-danger',
        borde: 'btn-outline-danger',

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
                valor:'95',
                color:'bg-danger'
            },
            dos:{
                nombre:'CSS',
                valor:'85',
                color:'bg-primary'
            },
            tres:{
                nombre:'PHP',
                valor:'90',
                color:'bg-primary'
            },
            cuatro:{
                nombre:'Javascript',
                valor:'90',
                color:'bg-warning'
            },
            cinco:{
                nombre:'Angular',
                valor:'95',
                color:'bg-danger'
            },
            seis:{
                nombre:'Wordpress',
                valor:'85',
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
                mes:'17',
                dia:'Abr',
                img:'/img/blog-1.jpg',
                enlace:''
            },
            dos:{
                titulo:'Los Fundamentos del Desarrollo Front-end',
                mes:'18',
                dia:'Abr',
                img:'/img/blog-2.jpg',
                enlace:''
            },
            tres:{
                titulo:'Estrategias Efectivas de Marketing de Contenido',
                mes:'19',
                dia:'Abr',
                img:'/img/blog-3.jpg',
                enlace:''
            },
        }
    },
    Leomar: {
        nombre: 'Leomar Urcia',
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
                valor:'95',
                color:'bg-danger'
            },
            dos:{
                nombre:'CSS',
                valor:'85',
                color:'bg-primary'
            },
            tres:{
                nombre:'PHP',
                valor:'90',
                color:'bg-primary'
            },
            cuatro:{
                nombre:'Javascript',
                valor:'90',
                color:'bg-warning'
            },
            cinco:{
                nombre:'Angular',
                valor:'95',
                color:'bg-danger'
            },
            seis:{
                nombre:'Wordpress',
                valor:'85',
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
                mes:'17',
                dia:'Abr',
                img:'/img/blog-1.jpg',
                enlace:''
            },
            dos:{
                titulo:'Los Fundamentos del Desarrollo Front-end',
                mes:'18',
                dia:'Abr',
                img:'/img/blog-2.jpg',
                enlace:''
            },
            tres:{
                titulo:'Estrategias Efectivas de Marketing de Contenido',
                mes:'19',
                dia:'Abr',
                img:'/img/blog-3.jpg',
                enlace:''
            },
        }
    },
    Eduardo: {
        nombre: 'Eduardo Dioses',
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
                valor:'95',
                color:'bg-danger'
            },
            dos:{
                nombre:'CSS',
                valor:'85',
                color:'bg-primary'
            },
            tres:{
                nombre:'PHP',
                valor:'90',
                color:'bg-primary'
            },
            cuatro:{
                nombre:'Javascript',
                valor:'90',
                color:'bg-warning'
            },
            cinco:{
                nombre:'Angular',
                valor:'95',
                color:'bg-danger'
            },
            seis:{
                nombre:'Wordpress',
                valor:'85',
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
                mes:'17',
                dia:'Abr',
                img:'/img/blog-1.jpg',
                enlace:''
            },
            dos:{
                titulo:'Los Fundamentos del Desarrollo Front-end',
                mes:'18',
                dia:'Abr',
                img:'/img/blog-2.jpg',
                enlace:''
            },
            tres:{
                titulo:'Estrategias Efectivas de Marketing de Contenido',
                mes:'19',
                dia:'Abr',
                img:'/img/blog-3.jpg',
                enlace:''
            },
        }
    }
};

// Ruta base para obtener los perfiles
app.get('/portafolio/:id', (req, res) => {
    const userId = req.params.id;
    // Verificar si el usuario existe en la base de datos
    if (usuarios.hasOwnProperty(userId)) {
        const userData = usuarios[userId];
        res.render('index', { data: userData });
    } else {
        // Renderizar una página de error o redireccionar a otra página
        res.render('error', { mensaje: 'Usuario no encontrado' });
    }
});


// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
