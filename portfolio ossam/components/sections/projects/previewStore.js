"use client";

// Which project preview is open, shared so opening one card closes any other.
let activeId = null;
const listeners = new Set();

export function getActivePreview() {
  return activeId;
}

export function getServerActivePreview() {
  return null;
}

export function setActivePreview(id) {
  if (activeId === id) return;
  activeId = id;
  listeners.forEach((listener) => listener());
}

export function subscribePreview(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
