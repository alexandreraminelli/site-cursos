"use strict" // Usar strict mode

/*
 * Script para navbar responsivo.
 * Este script exibe e oculta a sidebar na versão mobile.
 */

// Obter elementos DOM e armazenar numa variável
const botaoMenu = document.getElementById("botao-menu-hamburguer")
const sidebar = document.getElementById("sidebar-header")
const botaoFecharSidebar = document.getElementById("botao-fechar-sidebar")

// Adicionar eventos Listeners
//  Clicar no botão de menu hamburguer
botaoMenu.addEventListener("click", exibirSidebar)
//  Clicar no botão de fechar sidebar
botaoFecharSidebar.addEventListener("click", ocultarSidebar)

/**
 * Função que exibe o sidebar na tela.
 */
function exibirSidebar() {
  // Adicionar classe visivel que exibe o sidebar dentro da tela
  sidebar.classList.add("visivel")
}

/**
 * Função que oculta o sidebar na tela.
 */
function ocultarSidebar() {
  // Remover classe visivel
  sidebar.classList.remove("visivel")
}
