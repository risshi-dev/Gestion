import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Landing() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gestion</title>
        <meta name="description" content="A Project Management Tool" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.title}>
          Gestion
        </div>
      </main>

      <div className={styles.tagLine}>
          Make Your <b>110%</b> of<br/>
          <b>Everyday</b>
      </div>

      <div className={styles.Invite}>
        <div>
            Invite Your Team Members
        </div>

        <form className={styles.form}>
          <input type='text' placeholder='email'/>
          <button type='submit'> Invite </button>
        </form>
          
      </div>

      
    </div>
  )
}
