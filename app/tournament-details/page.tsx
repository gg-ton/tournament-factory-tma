'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './TournamentDetails.module.css';

interface Participant {
  id: number;
  name: string;
}

const TournamentDetails: React.FC = () => {
  const [status, setStatus] = useState<
    'preparing' | 'inProgress' | 'finished' | 'completed'
  >('preparing');
  const [showModal, setShowModal] = useState(false);
  const [participants] = useState<Participant[]>([
    { id: 1, name: 'Participant 1' },
    { id: 2, name: 'Participant 2' },
    { id: 3, name: 'Participant 3' },
    { id: 4, name: 'Participant 4' },
  ]);

  const router = useRouter();

  useEffect(() => {
    if (status === 'inProgress') {
      const timer = setTimeout(() => {
        setStatus('finished');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const startTournament = () => setStatus('inProgress');
  const confirmResult = () => setShowModal(true);
  const handleModalClose = (confirm: boolean) => {
    if (confirm) setStatus('completed');
    setShowModal(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Tournament ABC</h2>
        <p className={styles.description}>
          Some description about the tournament.
        </p>

        <div className={`${styles.status} ${styles[status]}`}>
          Status: {status.replace(/([A-Z])/g, ' $1').toLowerCase()}
        </div>

        <div className={styles.participants}>
          <label className={styles.label}>Participants:</label>
          <div className={styles.participantList}>
            {participants.map((participant, index) =>
              index % 2 === 0 && index < participants.length - 1 ? (
                <div key={participant.id} className={styles.participantRow}>
                  <div className={styles.participant}>
                    {participants[index].name}
                  </div>
                  <div className={styles.vs}>vs.</div>
                  <div className={styles.participant}>
                    {participants[index + 1].name}
                  </div>
                </div>
              ) : null
            )}
          </div>
        </div>

        {showModal && (
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <p>Are you sure you want to confirm the result?</p>
              <button
                className={`${styles.modalButton} ${styles.modalButtonYes}`}
                onClick={() => handleModalClose(true)}
              >
                Yes
              </button>
              <button
                className={`${styles.modalButton} ${styles.modalButtonNo}`}
                onClick={() => handleModalClose(false)}
              >
                No
              </button>
            </div>
          </div>
        )}
      </div>
      <div className={styles.buttonContainer}>
        {status === 'preparing' && (
          <button
            className={styles.button}
            onClick={startTournament}
            disabled={status !== 'preparing'}
          >
            Start Tournament
          </button>
        )}

        {status === 'finished' && (
          <>
            <button className={styles.button} onClick={confirmResult}>
              Confirm Result
            </button>
            <button
              className={styles.backButton}
              onClick={() => router.push('/tournaments')}
            >
              Back to Tournaments
            </button>
          </>
        )}

        {status === 'completed' && (
          <button
            className={styles.backButton}
            onClick={() => router.push('/tournaments')}
          >
            Back to Tournaments
          </button>
        )}
      </div>
    </div>
  );
};

export default TournamentDetails;
