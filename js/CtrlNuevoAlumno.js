import {
  getAuth,
  getFirestore
} from "../lib/fabrica.js";
import {
  getString,
  muestraError
} from "../lib/util.js";
import {
  muestraAlumnos
} from "./navegacion.js";
import {
  tieneRol
} from "./seguridad.js";

const daoAlumno =
  getFirestore().
    collection("Alumno");

const forma = document["forma"];
getAuth().onAuthStateChanged(
  protege, muestraError);

async function protege(usuario) {
  if (tieneRol(usuario,
    ["Administrador"])) {
    forma.addEventListener(
      "submit", guarda);
  }
}

async function guarda(evt) {
  try {
    evt.preventDefault();
    const formData =
      new FormData(forma);
    const matricula = getString(
        formData, "matricula").trim();  
    const nombre = getString(
      formData, "nombre").trim();
   
    const modelo = {
      matricula,
      nombre
    };
    await daoAlumno.
      add(modelo);
    muestraAlumnos();
  } catch (e) {
    muestraError(e);
  }
}
