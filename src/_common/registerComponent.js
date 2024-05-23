import { defineCustomElement } from "vue"; // gets resolved in rollup.config.mjs

export function register(name, component) {
  const el = defineCustomElement(component);
  customElements.define(`yorksu-${name}`, el);
}