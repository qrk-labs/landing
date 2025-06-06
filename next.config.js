/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";
import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
// Configure `pageExtensions` to include markdown and MDX files
pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
// Optionally, add any other Next.js config below
}
   
const withMDX = createMDX({
// Add markdown plugins here, as desired
options: {
  remarkPlugins: [],
  rehypePlugins: [],
},
})

export default withMDX(nextConfig);
