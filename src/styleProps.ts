export const animationDuration = 250;

export function setStyleProps() {
  document.documentElement.style.setProperty('--animationDuration', `${animationDuration}ms`);
}
