import App from "./App";
const application: App = new App();
application.getApp().listen(application.getPort(), () => {
console.log(`servidor en el puerto un cambio mas${application.getPort()}`);
});