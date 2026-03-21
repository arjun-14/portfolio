import { Project } from '@/types'

export const projects: Project[] = [
  {
    title: 'SafePlate',
    description:
      'Serverless allergen classification system serving 32M+ Americans with food allergies. Analyzes restaurant menus in under 5 seconds using a multi-modal AI pipeline with Claude Vision, categorizing dishes into 3 allergen safety tiers.',
    tags: ['AWS Lambda', 'Amazon Bedrock', 'API Gateway', 'Flutter'],
    period: 'Jan 2026 – Feb 2026',
    featured: true,
  },
  {
    title: 'TerraLens',
    description:
      'Scalable image-embedding pipeline achieving 56× faster similarity search by combining CNN feature extraction with HNSW indexing, reducing query latency from 37ms to 0.66ms. Built a 27k-node k-NN graph for high-purity data clustering.',
    tags: ['PyTorch', 'NumPy', 'Scikit-learn', 'NetworkX', 'Jupyter'],
    period: 'Oct 2025 – Dec 2025',
    featured: true,
  },
  {
    title: 'NYC Trips Analytics',
    description:
      'End-to-end analytics platform on GCP processing 10GB+ of NYC taxi data using Medallion architecture and star-schema modelling. Enables sub-second queries on trip patterns, fare distributions, and geographic trends via interactive dashboards.',
    tags: ['GCP', 'BigQuery', 'DBT', 'Looker Studio', 'GCS'],
    period: 'Jul 2025 – Aug 2025',
  },
  {
    title: 'POS Cloud Database System',
    description:
      'Three-node MariaDB Galera cluster deployed on AWS EC2 achieving 25% faster read-write performance and zero-downtime failover. Paired with MongoDB for flexible document storage in a hybrid POS environment.',
    tags: ['AWS', 'MariaDB', 'Galera', 'MongoDB'],
    period: 'Aug 2024 – Dec 2024',
  },
]
