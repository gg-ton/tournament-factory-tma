'use client';

import { useForm, Controller } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Select, Input } from 'antd';
import styles from './CreateTournament.module.css';

const { Option } = Select;

interface FormValues {
  tournamentName: string;
  gameName: string;
  tournamentType: 'Public' | 'Private';
  tournamentFormat: '1 vs 1' | 'Single Elimination' | 'Double Elimination';
  pricePool: number;
  currency: 'TON' | 'NOT';
}

const CreateTournament = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      currency: 'TON',
    },
  });
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<'Public' | 'Private'>(
    'Public'
  );

  const pricePool = parseFloat(watch('pricePool') as any) || 0;
  const currency = watch('currency') || 'TON';
  const commission = pricePool * 0.1;
  const total = pricePool + commission;

  const onSubmit = (data: FormValues) => {
    router.push(`/register-team`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Create new tournament</h2>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          id="create-tournament-form"
        >
          <div className={styles.field}>
            <label className={styles.label}>Tournament name</label>
            <input
              className={styles.input}
              {...register('tournamentName', {
                required: 'Tournament name is required',
              })}
              placeholder="Name"
            />
            {errors.tournamentName && (
              <p className={styles.error}>{errors.tournamentName.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Game name</label>
            <input
              className={styles.input}
              {...register('gameName', { required: 'Game name is required' })}
              placeholder="Dota 2"
            />
            {errors.gameName && (
              <p className={styles.error}>{errors.gameName.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Tournament type</label>
            <select
              className={styles.select}
              {...register('tournamentType', {
                required: 'Tournament type is required',
              })}
              onChange={e =>
                setSelectedType(e.target.value as 'Public' | 'Private')
              }
            >
              <option value="Public">Public</option>
              <option value="Private">Private</option>
            </select>
            {selectedType === 'Public' && (
              <p className={styles.infoText}>
                Everyone can join the tournament.
              </p>
            )}
            {selectedType === 'Private' && (
              <p className={styles.infoText}>
                Private tournaments require an invitation and are not visible to
                everyone.
              </p>
            )}
            {errors.tournamentType && (
              <p className={styles.error}>{errors.tournamentType.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Tournament format</label>
            <select
              className={styles.select}
              {...register('tournamentFormat', {
                required: 'Tournament format is required',
              })}
            >
              <option value="1 vs 1">1 vs 1</option>
              <option value="Single Elimination">Single elimination</option>
              <option value="Double Elimination">Double elimination</option>
            </select>
            {errors.tournamentFormat && (
              <p className={styles.error}>{errors.tournamentFormat.message}</p>
            )}
          </div>

          <div className={styles.field}>
            <label className={styles.label}>Price pool</label>
            <div className={styles.pricePoolContainer}>
              <Controller
                name="pricePool"
                control={control}
                rules={{
                  required: 'Price pool is required',
                  min: {
                    value: 0.01,
                    message: 'Price pool must be greater than 0',
                  },
                }}
                render={({ field }) => (
                  <Input
                    type="number"
                    className={`${styles.input} ${styles.pricePoolInput}`}
                    {...field}
                  />
                )}
              />
              <Controller
                name="currency"
                control={control}
                render={({ field }) => (
                  <Select
                    className={`${styles.currencySelect}`}
                    {...field}
                    defaultValue="TON"
                  >
                    <Option value="TON">
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 56 56"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M28 56C43.464 56 56 43.464 56 28C56 12.536 43.464 0 28 0C12.536 0 0 12.536 0 28C0 43.464 12.536 56 28 56Z"
                            fill="#0098EA"
                          />
                          <path
                            d="M37.5603 15.6277H18.4386C14.9228 15.6277 12.6944 19.4202 14.4632 22.4861L26.2644 42.9409C27.0345 44.2765 28.9644 44.2765 29.7345 42.9409L41.5381 22.4861C43.3045 19.4251 41.0761 15.6277 37.5627 15.6277H37.5603ZM26.2548 36.8068L23.6847 31.8327L17.4833 20.7414C17.0742 20.0315 17.5795 19.1218 18.4362 19.1218H26.2524V36.8092L26.2548 36.8068ZM38.5108 20.739L32.3118 31.8351L29.7417 36.8068V19.1194H37.5579C38.4146 19.1194 38.9199 20.0291 38.5108 20.739Z"
                            fill="white"
                          />
                        </svg>
                        <span style={{ marginLeft: '8px' }}>TON</span>
                      </div>
                    </Option>
                    <Option value="NOT">NOT</Option>
                  </Select>
                )}
              />
            </div>
            {errors.pricePool && (
              <p className={styles.error}>{errors.pricePool.message}</p>
            )}
          </div>

          <hr className={styles.divider} />

          <div className={styles.summary}>
            <div className={styles.summaryItem}>
              PRICE POOL: {pricePool.toFixed(2)} {currency}
            </div>
            <div className={styles.summaryItem}>
              COMMISSION: {commission.toFixed(2)} {currency}
            </div>
            <div className={styles.summaryItem}>
              TOTAL: {total.toFixed(2)} {currency}
            </div>
          </div>
        </form>
      </div>
      <button
        className={styles.payButton}
        type="submit"
        form="create-tournament-form"
      >
        Pay
      </button>
    </div>
  );
};

export default CreateTournament;
