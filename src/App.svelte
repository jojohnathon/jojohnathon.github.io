<script lang="ts">
  const styleOptions = [
    'Minimalist monochrome palette with generous whitespace',
    'Soft pastel gradients paired with subtle drop shadows',
    'High-contrast dark mode with accent blues',
    'Warm earth tones with serif typography for a print-like feel',
    'Vibrant neon-accented cyberpunk look for project highlights'
  ];
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of Johnathon Zheng" />
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta property="og:title" content="Johnathon Zheng Portfolio" />
  <meta
    property="og:description"
    content="Portfolio of Johnathon Zheng, UC Berkeley Applied Mathematics student."
  />
  <meta property="og:image" content="https://johnatho.nz/public/preview.png" />
  <meta property="og:url" content="https://johnatho.nz" />
  <meta property="og:type" content="website" />
  <title>Johnathon Zheng</title>
</svelte:head>

<main class="page">
  <h1>Johnathon Zheng</h1>

  <div class="image-container">
    <img src="/preview.png" alt="Preview of Johnathon Zheng's projects" />
    <img src="/profile.png" alt="Portrait of Johnathon Zheng" />
  </div>

  <ul class="contact-list">
    <li>
      <strong>Email:</strong>
      <a href="mailto:johnathon@berkeley.edu">johnathon@berkeley.edu</a>
    </li>
    <li>
      <strong>Github:</strong>
      <a href="https://github.com/jojohnathon">jojohnathon</a>
    </li>
    <li>
      <strong>LinkedIn:</strong>
      <a href="https://www.linkedin.com/in/johnathon-zheng">Johnathon Zheng</a>
    </li>
  </ul>

  <p>
    I'm currently studying Applied Mathematics at the University of California, Berkeley. I earned my
    Associate of Science degrees in Computer Science and Mathematics from Skyline College in Spring 2025.
  </p>
  <p>
    My interests include programming, system administration and computer vision. Projects I've worked on are
    available on <a href="https://github.com/jojohnathon">Github</a>.
  </p>

  <section class="style-guide">
    <h2>Style options</h2>
    <p>Experiment with the portfolio by exploring these alternative styling directions:</p>
    <ul>
      {#each styleOptions as option}
        <li>{option}</li>
      {/each}
    </ul>
  </section>
</main>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
  }

  .page {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1.5rem;
    max-width: 720px;
  }

  h1 {
    margin: 0;
    font-size: clamp(2.25rem, 5vw, 3rem);
  }

  .image-container {
    display: none;
    height: 50%;
    gap: 10px;
  }

  .image-container img {
    max-width: 50%;
    height: auto;
  }

  .contact-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .contact-list strong {
    margin-right: 0.25rem;
  }

  .style-guide {
    border-top: 1px solid rgba(17, 17, 17, 0.1);
    padding-top: 1rem;
  }

  .style-guide h2 {
    margin: 0 0 0.5rem;
    font-size: 1.25rem;
  }

  .style-guide ul {
    margin: 0.5rem 0 0;
    padding-left: 1.25rem;
    display: grid;
    gap: 0.25rem;
  }

  .style-guide li {
    line-height: 1.4;
  }
</style>
