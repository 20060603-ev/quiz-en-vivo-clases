PRD · Quiz en Vivo

«Documento de requisitos del producto (Product Requirements Document).»

Campo| Valor
Alumno| Pendiente
Proyecto n.º| Pendiente
Sitio de referencia| Kahoot!
Compañero revisor| Pendiente
URL desplegada| Pendiente (Sprint 5)

1. Problema

En las clases tradicionales, muchas actividades de evaluación pueden resultar poco interactivas y dificultar la participación de todos los estudiantes. Los docentes necesitan una herramienta sencilla para comprobar la comprensión de los temas impartidos, mientras que los estudiantes necesitan una forma dinámica de participar y recibir retroalimentación. Quiz en Vivo busca convertir las evaluaciones en experiencias interactivas, promoviendo la participación, el aprendizaje y la competencia amistosa dentro del aula.

2. Usuarios

- Usuario principal: Docente, que necesita crear cuestionarios, organizar partidas y evaluar los conocimientos de sus estudiantes desde una computadora.
- Usuario secundario: Estudiante, que necesita ingresar a una partida desde un celular, tablet o computadora, responder preguntas y visualizar sus resultados.

3. Objetivo y métrica de éxito

Permitir que un docente cree y ejecute un cuestionario interactivo en clase, mientras los estudiantes se unen mediante un código de partida y responden en tiempo real.

Métricas de éxito:

- Un docente puede crear un cuestionario sin asistencia técnica.
- Los estudiantes pueden ingresar a una partida mediante un código.
- Las respuestas se registran correctamente.
- Los resultados se muestran al finalizar la partida.

4. Alcance del MVP

Funcionalidades que se desarrollarán durante el semestre:

1. Registro e inicio de sesión de usuarios.
2. Creación y edición de cuestionarios.
3. Administración de preguntas y respuestas.
4. Creación de partidas en vivo.
5. Unión de estudiantes mediante un código de partida.
6. Respuesta de preguntas durante la partida.
7. Cálculo y visualización de puntuaciones.
8. Consulta de resultados al finalizar una partida.

Funcionalidades → carpetas de "src/" (screaming architecture)

Funcionalidad| Carpeta
Usuarios| "src/users"
Cuestionarios| "src/quizzes"
Preguntas| "src/questions"
Partidas| "src/games"
Participantes| "src/participants"
Respuestas| "src/answers"
Puntuaciones| "src/scores"
Resultados| "src/results"

5. Fuera de alcance

- Aplicación móvil nativa.
- Videollamadas o comunicación por voz.
- Integración con plataformas educativas externas.
- Inteligencia artificial para generar preguntas automáticamente.
- Suscripciones, pagos o monetización.
- Personalización avanzada de avatares.

6. Requisitos funcionales

ID| Requisito| Prioridad
RF-01| El sistema permitirá a los usuarios registrarse e iniciar sesión.| Alta
RF-02| El docente podrá crear, editar y guardar cuestionarios.| Alta
RF-03| El docente podrá agregar preguntas y sus opciones de respuesta.| Alta
RF-04| El docente podrá iniciar una partida asociada a un cuestionario.| Alta
RF-05| El sistema generará un código para que los estudiantes se unan a una partida.| Alta
RF-06| Los estudiantes podrán ingresar a una partida utilizando el código generado.| Alta
RF-07| Los estudiantes podrán enviar sus respuestas durante la partida.| Alta
RF-08| El sistema calculará las puntuaciones y mostrará los resultados.| Alta

7. Requisitos no funcionales

- Diseño responsive, móvil primero, compatible con resoluciones de 375 px y 1280 px.
- Lighthouse igual o superior a 90 en Accesibilidad y Buenas prácticas.
- Cero errores en la consola del navegador durante el funcionamiento normal.
- Capacidad para gestionar hasta 10.000 registros sin congelar la interfaz.
- Interfaz clara, sencilla e intuitiva.
- Protección de los datos y control de acceso de los usuarios.

8. Modelo de datos

El sistema utilizará PostgreSQL como base de datos.

Diagrama entidad-relación

erDiagram
    USER ||--o{ QUIZ : crea
    QUIZ ||--|{ QUESTION : contiene
    QUESTION ||--|{ ANSWER_OPTION : tiene
    QUIZ ||--o{ GAME : genera
    GAME ||--o{ PARTICIPANT : registra
    PARTICIPANT ||--o{ RESPONSE : realiza
    QUESTION ||--o{ RESPONSE : recibe
    ANSWER_OPTION ||--o{ RESPONSE : seleccionada

    USER {
        int id PK
        text name
        text email
        text password_hash
    }

    QUIZ {
        int id PK
        int user_id FK
        text title
        text description
    }

    QUESTION {
        int id PK
        int quiz_id FK
        text content
        int time_limit
    }

    ANSWER_OPTION {
        int id PK
        int question_id FK
        text content
        boolean is_correct
    }

    GAME {
        int id PK
        int quiz_id FK
        text game_code
        text status
    }

    PARTICIPANT {
        int id PK
        int game_id FK
        text nickname
        int score
    }

    RESPONSE {
        int id PK
        int participant_id FK
        int question_id FK
        int answer_option_id FK
        boolean is_correct
    }

Las tablas deberán contar con claves primarias, claves foráneas, restricciones y tipos de datos apropiados para garantizar la integridad de la información.

9. Reto técnico distintivo

El principal reto técnico del proyecto es la sincronización de las partidas en tiempo real, permitiendo que varios estudiantes participen simultáneamente sin perder ni duplicar respuestas.

Se buscará resolverlo mediante una comunicación eficiente entre el servidor y los clientes, el control del estado de cada partida y la validación de las respuestas recibidas. Se evaluará el uso de tecnologías de comunicación en tiempo real, como WebSockets, según la arquitectura del proyecto.

10. Riesgos y preguntas abiertas

- Problemas de conexión a internet durante una partida.
- Retrasos en la sincronización de preguntas y respuestas.
- Ingreso de participantes no autorizados.
- Envío de respuestas duplicadas.
- Sobrecarga del servidor cuando varios estudiantes participan simultáneamente.
- Definir el mecanismo final de comunicación en tiempo real.
- Definir las reglas de puntuación y el tiempo por pregunta.
- Confirmar los requisitos específicos del profesor para la entrega final.