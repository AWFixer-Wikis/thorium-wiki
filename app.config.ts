export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: "AWFixer Thorium Wiki Wiki",
      description: "Cult like Thorium wiki.",
    },
    theme: {
      customizable: true,
      color: "zinc",
      radius: 0.5,
    },
    banner: {
      enable: true,
      showClose: false,
      content: 'Join our Discord Community!',
      to: 'https://discord.gg/beBXaryXVC',
      target: '_blank',
      border: true,
    },
    header: {
      title: "AWFixer Thorium Wiki",
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: "/logo.svg",
        dark: "/logo-dark.svg",
      },
      nav: [],
      links: [
        {
          icon: "lucide:github",
          to: "https://github.com/awfixer-wikis/thorium-wiki",
          target: "_blank",
        },
      ],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: "Copyright © 2025",
      links: [
        {
          icon: 'lucide:heart',
          title: 'Sponsor Me',
          to: 'https://support.awfixer.wiki',
          target: '_blank',
        },
        {
          icon: 'lucide:twitter',
          to: 'https://x.com/awfixer',
          target: '_blank',
        },
        {
          icon: 'simple-icons:discord',
          to: 'https://discord.gg/beBXaryXVC',
          target: '_blank',
        },
        {
          icon: 'lucide:github',
          to: 'https://github.com/awfixer-wikis',
          target: '_blank',
        },
      ],
    },
    toc: {
      enable: true,
      title: "On This Page",
      links: [
        {
          title: "Join our Community",
          icon: "lucide:chat",
          to: "https://discord.gg/awfixer",
          target: "_blank",
        },
        {
          title: "Star on GitHub",
          icon: "lucide:star",
          to: "https://github.com/awfixer-wikis/thorium-wiki",
          target: "_blank",
        },
        {
          title: "Create Issues",
          icon: "lucide:circle-dot",
          to: "https://github.com/awfixer-wikis/thorium-wiki/issues",
          target: "_blank",
        },
      ],
    },
    search: {
      enable: true,
      inAside: false,
    },
  },
});
