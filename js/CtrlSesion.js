import {
  getAuth
} from "../lib/fabrica.js";
import {
  muestraError
} from "../lib/util.js";
import {
  iniciaSesión,
  terminaSesión
} from "./seguridad.js";

/** @type {HTMLFormElement} */
const forma = document["forma"];
/** @type {HTMLImageElement} */
const avatar = document.
  querySelector("#avatar");


getAuth().onAuthStateChanged(
  muestraSesión, muestraError);


async function
  muestraSesión(usuario) {
  if (usuario && usuario.email) {
    
    forma.email.value =
      usuario.email || "";
    forma.nombre.value =
      usuario.displayName || "";
    avatar.src =
      usuario.photoURL || "";
    forma.terminarSesión.
      addEventListener(
        "click", terminaSesión);
  } else {
    
    iniciaSesión();
  }
}
