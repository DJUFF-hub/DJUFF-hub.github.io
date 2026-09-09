import type { NextConfig } from 'next';

const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const isOrganizationPages = repository?.endsWith('.github.io');
const basePath = process.env.GITHUB_ACTIONS && repository && !isOrganizationPages ? `/${repository}` : '';

const nextConfig: NextConfig = { output: 'export', trailingSlash: true, basePath, assetPrefix: basePath || undefined, images: { unoptimized: true } };

export default nextConfig;
