const projectImageModules = import.meta.glob(
  '../assets/projects/*/*.{webp,png,jpg,jpeg,gif}',
  { eager: true, import: 'default' }
);

export function getProjectImages(projectId) {
  const base = `../assets/projects/${projectId}/`;
  const entries = Object.entries(projectImageModules).filter(([key]) =>
    key.startsWith(base)
  );

  const presentationEntry = entries.find(([key]) => {
    const name = key.split('/').pop().toLowerCase();
    return name.startsWith('presentation');
  });

  const presentation = presentationEntry ? presentationEntry[1] : null;

  const slides = entries
    .filter(([key]) => key !== (presentationEntry ? presentationEntry[0] : ''))
    .filter(([key]) => {
      const name = key.split('/').pop();
      return !name.startsWith('_');
    })
    .map(([, url]) => url);

  return { presentation, slides };
}