import nextra from 'nextra';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains:['hobbymaster.xyz']
    }
};

const withNextra = nextra({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.jsx'
  });

export default withNextra(nextConfig);
