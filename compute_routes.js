export default function(routes) {
  let nested = [];
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i];
    if (route.children == null) {
      // Normal route
      nested.push({
        name: route.title,
        compoundName: [route.title],
        path: '/' + route.slug,
        component: route.component,
        releaseAfter: route.releaseAfter,
        hidden: route.hidden,
        type: 'normal',
      });
    } else {
      // Nested route
      nested.push({
        // push topic header
        name: route.title,
        compoundName: [route.title],
        path: '/' + route.slug,
        component: route.component,
        releaseAfter: route.releaseAfter,
        hidden: route.hidden,
        type: 'normal',
      });
      for (let j = 0; j < route.children.length; j++) {
        const subroute = route.children[j];
        nested.push({
          // push subroutes
          name: subroute.title,
          compoundName: [route.title, subroute.title],
          path: '/' + [route.slug, subroute.slug].join('/'),
          component: subroute.component,
          releaseAfter: subroute.releaseAfter,
          hidden: subroute.hidden,
          type: 'nested',
        });
      }
    }
  }

  // Filter out non-released
  if (window.location.search.indexOf('showall') == -1) {
    const currentDate = new Date();
    nested = nested.filter(route => {
      if (route.releaseAfter != null) {
        if (currentDate < route.releaseAfter) return false;
      }
      return true;
    });
  }

  // Populate previous and next routes.
  const routerSpec = [];
  for (let i = 0; i < nested.length; i++) {
    if (i != 0) nested[i].previous = nested[i - 1];
    if (i != nested.length - 1) nested[i].next = nested[i + 1];
    routerSpec.push({
      path: nested[i].path,
      component: nested[i].component,
      name: nested[i].name,
    });
  }

  return {nestedRoutes: nested, routerSpec};
}
