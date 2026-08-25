import { useEffect, useState } from "react";

const KEY = "docs:code-wrap";
const listeners = new Set();

function read() {
  if (typeof localStorage === "undefined") return true;
  const v = localStorage.getItem(KEY);
  return v === null ? true : v === "1";
}

// Shared "wrap long lines" preference — every code and response block on the
// page toggles together, and the choice survives a reload.
export function useWrap() {
  const [wrap, setWrap] = useState(read);

  useEffect(() => {
    const onChange = (v) => setWrap(v);
    listeners.add(onChange);
    return () => listeners.delete(onChange);
  }, []);

  const toggle = () => {
    const next = !read();
    localStorage.setItem(KEY, next ? "1" : "0");
    listeners.forEach((fn) => fn(next));
  };

  return [wrap, toggle];
}
