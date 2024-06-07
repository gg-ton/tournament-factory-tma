'use client';

import TournamentList from '../components/TournamentList';

const tournaments = [
  {
    id: 1,
    name: 'Doka 2 Open Cup 2024',
    description:
      'Classic annual Doka 2 tournament.',
    teams: [
      [{ name: 'Quantum Raptors' }, { name: 'Digital Shadows' }],
      [{ name: 'Infinity Blades' }, { name: 'Cyber Titans' }],
    ],
  },
  {
    id: 2,
    name: 'OwO World Cup 2024',
    description:
      'Who is the champion above the champions? Let\'s find out!',
    teams: [[{ name: 'Phantom Strikers' }, { name: 'Astral Guardians' }]],
  },
  {
    id: 3,
    name: 'Edge of Mirror Speedrun Contest',
    description:
      'Celebrate 20-year EoM anniversary by joining our contest!',
    teams: [
      [{ name: 'bunk3r01d' }, { name: 'YeaBoiiiii' }],
      [{ name: 'reflect' }, { name: 't1t4n514' }],
      [{ name: '1pix' }, { name: 'RoofDweller' }],
    ],
  },
];

const TournamentsPage = () => {
  return <TournamentList tournaments={tournaments} />;
};

export default TournamentsPage;
