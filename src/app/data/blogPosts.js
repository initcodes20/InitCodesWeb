export const blogPosts = [
  {
    id: "moving-from-monolith-to-micro-frontends",
    title: "Moving from Monolith to Micro-frontends: Our Journey",
    date: "OCTOBER 24, 2023",
    category: "ENGINEERING",
    author: "Harshit Dubey",
    readTime: "8 MIN READ",
    description:
      "Scaling a frontend codebase across teams required a radical shift in architecture.",
    content: `
Scaling a frontend codebase across five independent teams forced us to rethink ownership,
deployment, and release velocity. Our monolithic frontend became a bottleneck where small
changes had large blast radiuses.

This article breaks down how we adopted a micro-frontend architecture using Module Federation,
how we defined boundaries between teams, and what we learned after shipping to production.
    `,
  },

  {
    id: "designing-scalable-nodejs-backends",
    title: "Designing Scalable Node.js Backends for High Traffic",
    date: "SEPTEMBER 12, 2023",
    category: "BACKEND",
    author: "Harshit Dubey",
    readTime: "6 MIN READ",
    description:
      "Lessons learned while building Node.js backends that scale reliably under real-world traffic.",
    content: `
Scaling Node.js applications is less about raw performance and more about architecture,
observability, and failure handling. We explore queue-based workloads, horizontal scaling,
and database connection management patterns that have worked well for us in production.

This post covers real metrics, trade-offs, and common mistakes teams make when scaling APIs.
    `,
  },

  {
    id: "frontend-performance-optimization-techniques",
    title: "Frontend Performance Optimization: Beyond Lighthouse Scores",
    date: "AUGUST 30, 2023",
    category: "FRONTEND",
    author: "Harshit Dubey",
    readTime: "5 MIN READ",
    description:
      "Why real user experience matters more than synthetic performance metrics.",
    content: `
Performance is not just about Lighthouse scores. We discuss real user monitoring (RUM),
bundle analysis, caching strategies, and how small architectural decisions can compound
into significant performance gains over time.

We also share how we measure performance in production and prioritize optimization work.
    `,
  },

  {
    id: "choosing-the-right-database-at-scale",
    title: "Choosing the Right Database at Scale: SQL vs NoSQL",
    date: "AUGUST 10, 2023",
    category: "ARCHITECTURE",
    author: "Harshit Dubey",
    readTime: "7 MIN READ",
    description:
      "A practical comparison of SQL and NoSQL databases based on real production use cases.",
    content: `
There is no universally “best” database—only trade-offs. This article compares SQL and NoSQL
choices across consistency, scalability, developer experience, and operational complexity.

We break down when each approach shines and how to avoid expensive migrations later.
    `,
  },

  {
    id: "engineering-culture-and-code-ownership",
    title: "Engineering Culture: Building Strong Code Ownership",
    date: "JULY 18, 2023",
    category: "ENGINEERING CULTURE",
    author: "Harshit Dubey",
    readTime: "4 MIN READ",
    description:
      "Why strong ownership models lead to better software and happier teams.",
    content: `
Code ownership is not about gatekeeping—it’s about accountability and clarity.
We share how defining ownership improved code quality, reduced incidents, and increased
developer confidence across teams.

This article also discusses review practices and onboarding strategies.
    `,
  },

  {
    id: "deploying-with-confidence-ci-cd-best-practices",
    title: "Deploying with Confidence: CI/CD Best Practices",
    date: "JUNE 29, 2023",
    category: "DEVOPS",
    author: "Harshit Dubey",
    readTime: "6 MIN READ",
    description:
      "How modern CI/CD pipelines enable faster releases without sacrificing stability.",
    content: `
Fast deployments are only valuable when they are safe. We discuss branching strategies,
progressive rollouts, automated testing, and monitoring techniques that help teams deploy
confidently multiple times a day.

We also cover rollback strategies and incident response workflows.
    `,
  },
];
