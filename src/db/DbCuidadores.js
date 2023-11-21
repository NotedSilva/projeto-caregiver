import pessoa1 from '../assets/pessoa1.jpg'
import pessoa2 from '../assets/pessoa2.jpg'
import pessoa3 from '../assets/pessoa3.png'
import pessoa4 from '../assets/pessoa4.jpg'
import pessoa5 from '../assets/pessoa5.jpg'
import pessoa6 from '../assets/pessoa6.avif'
import pessoa7 from '../assets/pessoa7.jpeg'
import pessoa8 from '../assets/pessoa8.jpg'
import pessoa9 from '../assets/pessoa9.png'
import pessoa10 from '../assets/pessoa10.jpg'
import pessoa11 from '../assets/pessoa11.png'
import pessoa12 from '../assets/pessoa12.png'
import pessoa13 from '../assets/pessoa13.png'
import pessoa14 from '../assets/pessoa14.jpg'
import pessoa15 from '../assets/pessoa15.avif'
import pessoa16 from '../assets/pessoa16.avif'
import pessoa17 from '../assets/pessoa17.avif'
import pessoa18 from '../assets/pessoa18.avif'
import pessoa19 from '../assets/pessoa19.jpg'
import pessoa20 from '../assets/pessoa20.jpg'


export const categoryList = [
  {
    id: 1,
    value: 'Crianças',
    label: '👶 Crianças',
  },
  {
    id: 2,
    value: 'Idosos',
    label: '👴 Idosos',
  },
  {
      id: 3,
      value: 'Pcds',
      label: '👩‍🦽 Pcds',
    },
  {
      id: 4,
      value: 'Pets',
      label: '🐶 Pets',
    },
];

export const ratingList = [
  {
    id: 1,
    value: '1',
    label: '1⭐',
  },
  {
    id: 2,
    value: '2',
    label: '2⭐',
  },
  {
    id: 3,
    value: '3',
    label: '3⭐',
  },
  {
    id: 4,
    value: '4',
    label: '4⭐',
  },
  {
    id: 5,
    value: '5',
    label: '5⭐',
  },
];

export const dataList = [
  {
    id: 1,
    name: 'Carlos Eduardo',
    localization: 'Minas Gerais',
    category: 'idosos',
    description: 'cuidador experiente com atividades acertivas.',
    rating: 5,
    price: 80,
    coverSrc: pessoa1,
  },
  {
      id: 2,
      name: 'Mariana Silva',
      localization: 'São Paulo',
      category: 'Crianças',
      description: 'cuidadora experiente de crianças com atividades divertidas e educacionais.',
      rating: 4,
      price: 105,
      coverSrc: pessoa2,
    },
    {
      id: 3,
      name: 'José Santos',
      localization: 'Campinas',
      category: 'Idosos',
      description: 'dedicado ao cuidado de idosos com carinho e atenção personalizada.',
      rating: 3,
      price: 90,
      coverSrc: pessoa3,
    },
    {
      id: 4,
      name: 'Ana Paula',
      localization: 'São Bernardo do Campo',
      category: 'Pcds',
      description: 'assistência especializada para pessoas com deficiência, focada na autonomia.',
      rating: 4,
      price: 60,
      coverSrc: pessoa4,
    },
    {
      id: 5,
      name: 'Ricardo Oliveira',
      localization: 'Osasco',
      category: 'Pets',
      description: 'amante de animais de estimação, cuida do seu pet com amor e dedicação.',
      rating: 5,
      price: 200,
      coverSrc: pessoa5,
    },
    {
      id: 6,
      name: 'Carla Pereira',
      localization: 'Santos',
      category: 'Crianças',
      description: 'educação infantil de qualidade para um desenvolvimento saudável.',
      rating: 2,
      price: 150,
      coverSrc: pessoa6,
    },
    {
      id: 7,
      name: 'Pedro Rocha',
      localization: 'Jundiaí',
      category: 'Idosos',
      description: 'companhia e assistência para idosos com cuidado e respeito.',
      rating: 4,
      price: 130,
      coverSrc: pessoa7,
    },
    {
      id: 8,
      name: 'Isabela Costa',
      localization: 'Ribeirão Preto',
      category: 'Pcds',
      description: 'atendimento personalizado para pessoas com deficiência.',
      rating: 5,
      price: 220,
      coverSrc: pessoa8,
    },
    {
      id: 9,
      name: 'João Ferreira',
      localization: 'São José dos Campos',
      category: 'Pets',
      description: 'cuidados atenciosos para animais de estimação, garantindo bem-estar.',
      rating: 2,
      price: 102,
      coverSrc: pessoa9,
    },
    {
      id: 10,
      name: 'Caroline Lima',
      localization: 'Sorocaba',
      category: 'Crianças',
      description: 'aventuras e aprendizado para Crianças em um ambiente seguro e divertido.',
      rating: 5,
      price: 90,
      coverSrc: pessoa10,
    },
    {
      id: 11,
      name: 'Marcos Almeida',
      localization: 'Santo André',
      category: 'Idosos',
      description: 'apoio emocional e físico para idosos, promovendo qualidade de vida.',
      rating: 1,
      price: 95,
      coverSrc: pessoa11,
    },
    {
      id: 12,
      name: 'Patrícia Fernandes',
      localization: 'Mogi das Cruzes',
      category: 'Pcds',
      description: 'assistência inclusiva para pessoas com deficiência.',
      rating: 4,
      price: 108,
      coverSrc: pessoa12,
    },
    {
      id: 13,
      name: 'Roberto Xavier',
      localization: 'São Caetano do Sul',
      category: 'Pets',
      description: 'amigo dos animais e cuidador dedicado para o seu pet.',
      rating: 3,
      price: 100,
      coverSrc: pessoa13,
    },
    {
      id: 14,
      name: 'Juliana Rodrigues',
      localization: 'Piracicaba',
      category: 'Crianças',
      description: 'aprendizado lúdico e atividades criativas para Crianças de todas as idades.',
      rating: 4,
      price: 140,
      coverSrc: pessoa14,
    },
    {
      id: 15,
      name: 'Antônio Nunes',
      localization: 'Diadema',
      category: 'Idosos',
      description: 'acolhimento e cuidado para idosos, promovendo qualidade de vida.',
      rating: 3,
      price: 90,
      coverSrc: pessoa15,
    },
    {
      id: 16,
      name: 'Fernanda Mendes',
      localization: 'Itaquaquecetuba',
      category: 'Pcds',
      description: 'apoio individualizado para pessoas com deficiência.',
      rating: 4,
      price: 80,
      coverSrc: pessoa16,
    },
    {
      id: 17,
      name: 'Gustavo Castro',
      localization: 'Taboão da Serra',
      category: 'Pets',
      description: 'cuidados amorosos e brincadeiras para seu pet durante sua ausência.',
      rating: 5,
      price: 65,
      coverSrc: pessoa17,
    },
    {
      id: 18,
      name: 'Cristiane Prado',
      localization: 'Campos do Jordão',
      category: 'Pcds',
      description: 'apoio individualizado para pessoas com deficiência.',
      rating: 5,
      price: 110,
      coverSrc: pessoa18,
    },
    {
      id: 19,
      name: 'Giuliana Goes',
      localization: 'São Paulo',
      category: 'Idosos',
      description: 'acolhimento e cuidado para idosos, promovendo qualidade de vida.',
      rating: 5,
      price: 130,
      coverSrc: pessoa19,
    },
    {
      id: 20,
      name: 'Carla Senna',
      localization: 'Guarulhos',
      category: 'Idosos',
      description: 'acolhimento e cuidado para idosos, promovendo qualidade de vida.',
      rating: 5,
      price: 220,
      coverSrc: pessoa20,
    },
];
