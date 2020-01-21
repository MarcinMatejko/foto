import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";

export let fadeRight = trigger("fadeRight", [
  state("void", style({ opacity: 0, transform: "translateX(-60px)" })),
  transition("void => *", [animate("1200ms 1.2s")])
]);

export let fadeLeft = trigger("fadeLeft", [
  state("void", style({ opacity: 0, transform: "translateX(60px)" })),
  transition("void => *", [animate("1200ms 1.8s")])
]);

export let fadeUp = trigger("fadeUp", [
  state("void", style({ opacity: 0, transform: "translateY(100px)" })),
  transition("void => *", [animate("1200ms 1.2s")])
]);
export let fadeUp1 = trigger("fadeUp1", [
  state("void", style({ opacity: 0, transform: "translateY(100px)" })),
  transition("void => *", [animate("1200ms 1.7s")])
]);
export let fadeUp2 = trigger("fadeUp2", [
  state("void", style({ opacity: 0, transform: "translateY(100px)" })),
  transition("void => *", [animate("1200ms 2.2s")])
]);

export let fadeDown = trigger("fadeDown", [
  state("void", style({ opacity: 0, transform: "translateY(-40px)" })),
  transition("void => *", [animate("1200ms 0.6s")])
]);
export let fadeDown2 = trigger("fadeDown2", [
  state("void", style({ opacity: 0, transform: "translateY(-40px)" })),
  transition("void => *", [animate("1200ms 0.9s")])
]);
