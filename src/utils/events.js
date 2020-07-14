import mitt from "mitt";

const emitter = mitt();

export const on = emitter.on;
export const off = emitter.off;
export const emit = emitter.emit;
