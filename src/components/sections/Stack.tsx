'use client'

import { motion } from 'framer-motion'
import { Cloud, CloudCog, BarChart3, BarChart2, Database, Server } from 'lucide-react'
import {
  SiPython, SiFlutter, SiJavascript, SiGnubash, SiCplusplus,
  SiSnowflake, SiDbt, SiApacheairflow, SiApachespark, SiApachekafka,
  SiMongodb, SiGooglebigquery, SiMariadb,
  SiGooglecloud, SiFirebase, SiLooker,
  SiDocker, SiJenkins, SiGit,
} from 'react-icons/si'
import { DomeGallery, DomeTool } from './DomeGallery'

const tools: DomeTool[] = [
  { name: 'Python',        category: 'Language',   icon: SiPython,         color: '#3776AB' },
  { name: 'SQL',           category: 'Language',   icon: Database,          color: '#336791' },
  { name: 'Flutter',       category: 'Language',   icon: SiFlutter,         color: '#54C5F8' },
  { name: 'JavaScript',    category: 'Language',   icon: SiJavascript,      color: '#F7DF1E' },
  { name: 'Bash',          category: 'Language',   icon: SiGnubash,         color: '#4EAA25' },
  { name: 'C/C++',         category: 'Language',   icon: SiCplusplus,       color: '#6295CB' },
  { name: 'Snowflake',     category: 'Data Eng',   icon: SiSnowflake,       color: '#29B5E8' },
  { name: 'DBT',           category: 'Data Eng',   icon: SiDbt,             color: '#FF694A' },
  { name: 'Airflow',       category: 'Data Eng',   icon: SiApacheairflow,   color: '#017CEE' },
  { name: 'Spark',         category: 'Data Eng',   icon: SiApachespark,     color: '#E25A1C' },
  { name: 'Kafka',         category: 'Data Eng',   icon: SiApachekafka,     color: '#A0A0A0' },
  { name: 'MongoDB',       category: 'Data Eng',   icon: SiMongodb,         color: '#47A248' },
  { name: 'BigQuery',      category: 'Data Eng',   icon: SiGooglebigquery,  color: '#4285F4' },
  { name: 'MariaDB',       category: 'Data Eng',   icon: SiMariadb,         color: '#C0765A' },
  { name: 'SQL Server',    category: 'Data Eng',   icon: Server,            color: '#CC2927' },
  { name: 'AWS',           category: 'Cloud',      icon: Cloud,             color: '#FF9900' },
  { name: 'GCP',           category: 'Cloud',      icon: SiGooglecloud,     color: '#4285F4' },
  { name: 'Azure',         category: 'Cloud',      icon: CloudCog,          color: '#0078D4' },
  { name: 'Firebase',      category: 'Cloud',      icon: SiFirebase,        color: '#FFCA28' },
  { name: 'Tableau',       category: 'Analytics',  icon: BarChart3,         color: '#E97627' },
  { name: 'Power BI',      category: 'Analytics',  icon: BarChart2,         color: '#F2C811' },
  { name: 'Looker Studio', category: 'Analytics',  icon: SiLooker,          color: '#4285F4' },
  { name: 'Docker',        category: 'DevOps',     icon: SiDocker,          color: '#2496ED' },
  { name: 'Jenkins',       category: 'DevOps',     icon: SiJenkins,         color: '#D33833' },
  { name: 'Git',           category: 'DevOps',     icon: SiGit,             color: '#F05032' },
]

export function Stack() {
  return (
    <div className="max-w-2xl mx-auto pt-4 pb-24">

      {/* Header */}
      <motion.div
        className="flex flex-col md:flex-row md:items-center gap-6 md:gap-16 mb-8 justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2
          className="font-serif text-4xl md:text-5xl font-bold flex-shrink-0"
          style={{ color: 'var(--page-text)' }}
        >
          Tech Stack
        </h2>
        <p
          className="font-mono text-sm leading-relaxed max-w-md"
          style={{ color: 'var(--page-muted)' }}
        >
          What&apos;s in the box? The languages I think in, the platforms I&apos;ve shipped on, and the tools I keep reaching for.
        </p>
      </motion.div>

      {/* Dome */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ width: '100%', height: 520, position: 'relative' }}
      >
        <DomeGallery tools={tools} overlayBlurColor="transparent" fit={0.6} minRadius={520} />
      </motion.div>

    </div>
  )
}
