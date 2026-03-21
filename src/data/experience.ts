import { ExperienceItem } from '@/types'

export const experience: ExperienceItem[] = [
  {
    company: 'Texas A&M University',
    role: 'Master of Science — Management Information Systems',
    period: 'Aug 2024 – May 2026',
    location: 'College Station, TX',
    type: 'education',
    bullets: ['GPA: 3.7 / 4.0'],
  },
  {
    company: 'LTIMindtree',
    role: 'Data Engineer',
    period: 'Jun 2021 – Jul 2024',
    location: 'Mumbai, India',
    type: 'work',
    bullets: [],
    subRoles: [
      {
        client: 'Client: Onsemi',
        bullets: [
          'Architected Snowflake dimensional models with SQL and DBT, reducing analyst report generation time by 25% for 50+ stakeholders',
          'Reduced data ingestion latency by 30% through fault-tolerant Airflow pipelines processing 100GB+ daily, ensuring 99.9% SLA adherence',
          'Cut data validation effort by 80% (20→4 hrs/week) via a Python data quality framework across 100+ datasets',
          'Saved 5+ engineering hours weekly with Bash-based monitoring tools, preventing 95% of storage-related server failures',
        ],
      },
      {
        client: 'Client: ServiceNow',
        bullets: [
          'Boosted query performance by 40% through clustering and materialized views, reducing dashboard load times for 200+ daily users',
          'Led migration of 20TB+ data from SAP HANA, SQL Server, and PostgreSQL to Snowflake, cutting average query time by 60%',
          'Deployed Apache Kafka + Spark pipeline processing 1B records/hour, reducing data latency from 24 hours to real-time',
          'Built 10+ KPI dashboards in Tableau processing 2M+ records for sales, customer health, and product adoption tracking',
        ],
      },
    ],
    skills: ['Snowflake', 'DBT', 'Airflow', 'Kafka', 'Spark', 'Python', 'Tableau', 'SQL'],
  },
  {
    company: 'University of Mumbai',
    role: 'Bachelor of Engineering — Computer Science',
    period: 'Aug 2017 – May 2021',
    location: 'Mumbai, India',
    type: 'education',
    bullets: ['GPA: 3.76 / 4.0'],
  },
]
