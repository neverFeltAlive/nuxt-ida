import directives from '~/directives';

export default defineNuxtPlugin((nuxtApp) => {
  directives.forEach((directive) => {
    nuxtApp.vueApp.directive(directive.name, directive);
  });
});
