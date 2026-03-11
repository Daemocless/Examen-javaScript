"use strict"

import {
    datosJsonInicial,
    localStorageKey
} from "./datos.js"

let caracter = []

function cargarDatos() {
    const estadoCarga = document.querySelector("#estadoCarga")
    const datosLocalStorage = localStorage.getItem(localStorageKey)
    if (datosLocalStorage) {
        try {
            listadoAlumnos = JSON.parse(datosLocalStorage)
            estadoCarga.textContent = "Cargado desde LocalStorage..."
        } catch (error) {
            listadoAlumnos = structuredClone(datosJsonInicial)
            estadoCarga.textContent = "LocalStorage inválido... Cargando Json inicial..."
        }
    } else {
        listadoAlumnos = structuredClone(datosJsonInicial)
        estadoCarga.textContent = "LocalStorage vacío... Cargando Json inicial..."
    }
    renderizarTabla()
}

function renderizarTabla() {
    const tbody = document.querySelector("#tbodyrespuesta")
    tbody.innerHTML = ""

    if (listadoAlumnos.length === 0) {
        const tr = document.createElement("tr")
        tr.innerHTML = "<td colspan='5'>No hay datos para mostrar</td>"
        tbody.appendChild(tr)
        return
    }
}