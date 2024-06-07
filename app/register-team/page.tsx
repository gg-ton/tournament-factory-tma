'use client';

import { useEffect } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import styles from './RegisterTeam.module.css';

interface FormValues {
  teamName: string;
  memberCount: number;
  members: { name: string }[];
}

const RegisterTeam: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();

  const memberCount = watch('memberCount') || 2;

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'members',
  });

  useEffect(() => {
    const count = Number(memberCount);
    if (fields.length < count) {
      for (let i = fields.length; i < count; i++) {
        append({ name: '' });
      }
    } else {
      for (let i = fields.length; i > count; i--) {
        remove(i - 1);
      }
    }
  }, [memberCount, fields.length, append, remove]);

  const onSubmit = (data: FormValues) => {
    router.push('/tournament-details');
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Register team</h2>
        <form
          className={styles.form}
          id="register-team-form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.field}>
            <label className={styles.label}>Team name</label>
            <input
              className={styles.input}
              {...register('teamName', { required: 'Team name is required' })}
            />
            {errors.teamName && (
              <p className={styles.error}>{errors.teamName.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Participants count</label>
            <select
              className={styles.select}
              {...register('memberCount', {
                required: 'Participants count is required',
              })}
            >
              {[2, 3, 4].map(num => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
            {errors.memberCount && (
              <p className={styles.error}>{errors.memberCount.message}</p>
            )}
          </div>

          {fields.map((field, index) => (
            <div className={styles.field} key={field.id}>
              <label className={styles.label}>
                Participant {index + 1}
              </label>
              <input
                className={styles.input}
                {...register(`members.${index}.name`, {
                  required: 'Participant name is required',
                })}
              />
              {errors.members?.[index]?.name && (
                <p className={styles.error}>
                  error
                  {/* {errors.members[index].name?.message} */}
                </p>
              )}
            </div>
          ))}
        </form>
      </div>
      <button className={styles.button} type="submit" form="register-team-form">
        Complete registration
      </button>
    </div>
  );
};

export default RegisterTeam;
