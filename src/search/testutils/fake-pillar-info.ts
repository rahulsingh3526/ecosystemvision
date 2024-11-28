import { faker } from '@faker-js/faker';

export const fakePillarInfo = () => ({
  title: faker.lorem.words({ min: 2, max: 4 }),
  count: 331,
  description: faker.lorem.paragraph(),
  activePillar: {
    slug: 'categories',
    items: [
      'Dexes',
      'Bizdev Projects',
      'Customer Support Projects',
      'Cybersecurity Projects',
      'Data Science Jobs',
      'Category 1',
      'Data Entry Jobs',
      'Design Jobs',
      'DevOps Jobs',
      'Engineering Jobs',
      'Finance Jobs',
      'HR Jobs',
      'Legal Jobs',
      'Management Jobs',
      'Marketing Jobs',
    ],
  },
  altPillar: {
    slug: 'tags',
    items: [
      'Python',
      'JavaScript',
      'React',
      'Node.js',
      'Angular',
      'Vue.js',
      'Django',
      'Flask',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'Golang',
      'Java',
      'C++',
      'C#',
      'PHP',
      'Ruby',
      'Swift',
      'Kotlin',
      'Rust',
      'Kubernetes',
      'Scala',
      'TypeScript',
      'HTML',
      'CSS',
      'SASS',
      'LESS',
    ],
  },
});
