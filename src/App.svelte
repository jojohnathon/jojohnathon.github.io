<script lang="ts">
  const contactLinks = [
    {
      label: 'Email',
      href: 'mailto:johnathon@berkeley.edu',
      text: 'johnathon@berkeley.edu'
    },
    {
      label: 'Github',
      href: 'https://github.com/jojohnathon',
      text: 'jojohnathon'
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/johnathon-zheng',
      text: 'Johnathon Zheng'
    }
  ];

  const styleIdeas = [
    'Add a dark mode toggle that swaps background and text colors.',
    'Introduce a two-column layout with the portrait anchored on the right.',
    'Experiment with a serif display font for the heading to add contrast.',
    'Use subtle gradients or border accents around the contact list.',
    'Highlight key phrases in the bio with accent colors or emphasis.'
  ];
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of Johnathon Zheng" />
  <meta property="og:title" content="Johnathon Zheng Portfolio" />
  <meta
    property="og:description"
    content="Portfolio of Johnathon Zheng, UC Berkeley Applied Mathematics student."
  />
  <meta property="og:image" content="https://johnatho.nz/public/preview.png" />
  <meta property="og:url" content="https://johnatho.nz" />
  <meta property="og:type" content="website" />
  <title>Johnathon Zheng</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</svelte:head>

<main>
  <h1>Johnathon Zheng</h1>

  <div class="image-container">
    <img src="/preview.png" alt="Portfolio preview" />
    <img src="/profile.png" alt="my glorious face" />
  </div>

  <ul>
    {#each contactLinks as contact}
      <li>
        <strong>{contact.label}:</strong>
        <a href={contact.href}>{contact.text}</a>
      </li>
    {/each}
  </ul>

  <p>
    I'm currently studying Applied Mathematics at the University of California, Berkeley. I
    earned my Associate of Science degrees in Computer Science and Mathematics from Skyline
    College in Spring 2025.
  </p>
  <p>
    My interests include programming, system administration and computer vision. Projects I've
    worked on are available on <a href="https://github.com/jojohnathon">Github</a>.
  </p>

  <section>
    <h2>Style ideas you could try</h2>
    <ul class="styles-list">
      {#each styleIdeas as idea}
        <li>{idea}</li>
      {/each}
    </ul>
  </section>
</main>
