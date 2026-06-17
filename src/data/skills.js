const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const skillGroups = [
  {
    title: 'Languages',
    items: [
      { name: 'HTML5', icon: `${CDN}/html5/html5-original.svg` },
      { name: 'CSS3', icon: `${CDN}/css3/css3-original.svg` },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'PHP', icon: `${CDN}/php/php-original.svg` },
      { name: 'Python', icon: `${CDN}/python/python-original.svg` },
      { name: 'Arduino', icon: `${CDN}/arduino/arduino-original.svg` },
    ],
  },
  {
    title: 'Frameworks',
    items: [
      { name: 'Bootstrap', icon: `${CDN}/bootstrap/bootstrap-original.svg` },
      { name: 'Vue', icon: `${CDN}/vuejs/vuejs-original.svg` },
      { name: 'Laravel', icon: `${CDN}/laravel/laravel-original.svg` },
      { name: 'FastApi', icon: `${CDN}/fastapi/fastapi-original.svg` },
      { name: 'React', icon: `${CDN}/react/react-original.svg` },
    ],
  },
  {
    title: 'DevOps',
    items: [
      { name: 'Docker', icon: `${CDN}/docker/docker-original.svg` },
      { name: 'Terraform', icon: `${CDN}/terraform/terraform-original.svg` },
      { name: 'Ansible', icon: `${CDN}/ansible/ansible-original.svg` },
      { name: 'Linux', icon: `${CDN}/linux/linux-original.svg` },
      { name: 'DigitalOcean', icon: `${CDN}/digitalocean/digitalocean-original.svg` },
    ],
  },
];
