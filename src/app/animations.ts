import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";

export let fadeRight = trigger("fadeRight", [
  state("void", style({ opacity: 0, transform: "translateX(-60px)" })),
  transition("void => *", [animate("600ms 0.6s")])
]);

export let fadeLeft = trigger("fadeLeft", [
  state("void", style({ opacity: 0, transform: "translateX(60px)" })),
  transition("void => *", [animate("600ms 0.9s")])
]);

export let fadeUp = trigger("fadeUp", [
  state("void", style({ opacity: 0, transform: "translateY(100px)" })),
  transition("void => *", [animate("600ms 0.6s")])
]);
export let fadeUp1 = trigger("fadeUp1", [
  state("void", style({ opacity: 0, transform: "translateY(100px)" })),
  transition("void => *", [animate("600ms 0.85s")])
]);
export let fadeUp2 = trigger("fadeUp2", [
  state("void", style({ opacity: 0, transform: "translateY(100px)" })),
  transition("void => *", [animate("600ms 1.1s")])
]);

export let fadeDown = trigger("fadeDown", [
  state("void", style({ opacity: 0, transform: "translateY(-40px)" })),
  transition("void => *", [animate("600ms 0.3s")])
]);
export let fadeDown2 = trigger("fadeDown2", [
  state("void", style({ opacity: 0, transform: "translateY(-40px)" })),
  transition("void => *", [animate("600ms 0.45s")])
]);
