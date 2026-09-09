export type ProjectStatus = 'released' | 'prototype' | 'in-development' | 'archived';

export interface Project {
  title: string;
  description: string;
  repository: string;
  repositoryUrl: string;
  itchUrl?: string;
  coverUrl?: string;
  technology?: string;
  year?: number;
  featured: boolean;
  status: ProjectStatus;
  statusLabel: string;
  topics: string[];
  updatedAt: string;
}
