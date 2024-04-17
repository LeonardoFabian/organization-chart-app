import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Chart } from "@/api/chart";
import { useState, useEffect } from "react";
import { TreeRenderer } from "@/components/TreeRenderer";

const chartCtrl = new Chart();

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  const [chart, setChart] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await chartCtrl.find();
        console.log("RESPONSE: ", response);
        setChart(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <>
      <Head>
        <title>{chart?.heading || "Chart title"}</title>
        <meta
          name="description"
          content={chart?.subheading || "Chart subtitle"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.header}>
          <div className={styles.center}>
            <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
            />
          </div>
          <h2>{chart?.heading}</h2>
          <p>{chart?.subheading}</p>
        </div>

        <div className={styles.content}>
          <TreeRenderer data={chart?.nodes} />
        </div>
      </main>
    </>
  );
}
