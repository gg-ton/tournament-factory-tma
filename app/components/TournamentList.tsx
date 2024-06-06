'use client';

import { useRouter } from 'next/navigation';
import styles from './TournamentList.module.css';

interface Team {
  name: string;
}

interface Tournament {
  id: number;
  name: string;
  description: string;
  teams: Team[][];
}

interface TournamentListProps {
  tournaments: Tournament[];
}

const TournamentList: React.FC<TournamentListProps> = ({ tournaments }) => {
  const router = useRouter();

  const handleCreateTournament = () => {
    router.push('/create-tournament');
  };

  return (
    <div className={styles.container}>
      <div className={styles.list}>
        {tournaments.map(tournament => (
          <div key={tournament.id} className={styles.tournament}>
            <h3 className={styles.tournamentName}>{tournament.name}</h3>
            <p className={styles.description}>{tournament.description}</p>
            <ul>
              {tournament.teams.map((teamPair, index) => (
                <li key={index}>
                  {teamPair[0].name} vs. {teamPair[1].name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <button onClick={handleCreateTournament} className={styles.button}>
        Create new tournament
      </button>
    </div>
  );
};

export default TournamentList;
