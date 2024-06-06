'use client';

import TournamentList from '../components/TournamentList';

const tournaments = [
  {
    id: 1,
    name: 'Tournament name 1',
    description:
      'Description of the tournament in one sentence in two lines max',
    teams: [
      [{ name: 'Quantum Raptors' }, { name: 'Digital Shadows' }],
      [{ name: 'Infinity Blades' }, { name: 'Cyber Titans' }],
    ],
  },
  {
    id: 2,
    name: 'Tournament name 2',
    description:
      'Description of the tournament in one sentence in two lines max',
    teams: [[{ name: 'Phantom Strikers' }, { name: 'Astral Guardians' }]],
  },
  {
    id: 3,
    name: 'Tournament name 3',
    description:
      'Description of the tournament in one sentence in two lines max',
    teams: [
      [{ name: 'Electronic Hawks' }, { name: 'CyberRockers' }],
      [{ name: 'Virtual Wolves' }, { name: 'Titanium Storms' }],
      [{ name: 'Pixel Knights' }, { name: 'Neon Dragons' }],
    ],
  },
];

const TournamentsPage = () => {
  return <TournamentList tournaments={tournaments} />;
};

export default TournamentsPage;
