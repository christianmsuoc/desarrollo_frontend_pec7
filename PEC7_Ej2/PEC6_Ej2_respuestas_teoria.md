# Preguntas ejercicio 2

### a. ¿Cuál es la diferencia entre definir un servicio usando el decorador @Injectable o @NgModule? Referencia: https://angular.io/guide/providers

La diferencia es que cuando se define en el NgModule el servicio esta disponible en toda la aplicación y 
en Injectable se puede definir el scope

### b. ¿Qué otras opciones admite el decorador @Injectable para la propiedad ProvidedIn? ¿Para qué sirven las otras configuraciones? Referencia: https://dev.to/christiankohler/improved-dependeny-injection-with-the-newprovidedin-scopes-any-and-platform-30bb

| PovidedIn | Uso |
| --- | --- |
| root | Se declara a nivel de aplicación, disponible a nivel global |
| platform | Disponible para múltiples aplicaciones Angular |
| any | Se crea una instancia del servicio para cada 'inyección' |
