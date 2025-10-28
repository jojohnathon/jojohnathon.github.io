<script lang="ts">
  import { fly } from "svelte/transition";
  import { styleOptions } from "./styleOptions";
</script>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Portfolio of Johnathon Zheng" />
  <title>Johnathon Zheng</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  <meta property="og:title" content="Johnathon Zheng Portfolio" />
  <meta
    property="og:description"
    content="Portfolio of Johnathon Zheng, UC Berkeley Applied Mathematics student."
  />
  <meta property="og:image" content="https://johnatho.nz/preview.png?v=2" />
  <meta property="og:url" content="https://johnatho.nz" />
  <meta property="og:type" content="website" />
</svelte:head>

<main class="page" transition:fly={{ y: -50, duration: 600 }}>
  <h1>Johnathon Zheng</h1>

  <div class="image-container">
    <img src="/preview.png" alt="project preview collage" />
    <!-- <img src="/profile.png" alt="Portrait of Johnathon Zheng" /> -->
  </div>

  <ul class="contact-list">
    <li>
      <strong>Email: </strong>
      <a href="mailto:johnathon@berkeley.edu">johnathon@berkeley.edu</a>
    </li>
    <li>
      <strong>Github: </strong>
      <a href="https://github.com/jojohnathon">jojohnathon</a>
    </li>
    <li>
      <strong>LinkedIn: </strong>
      <a href="https://www.linkedin.com/in/johnathon-zheng">Johnathon Zheng</a>
    </li>
     <li>
      <strong>Resume: </strong>
      <a href="/My_Resume.pdf">Johnathon Zheng</a>
    </li>
  </ul>

  <p>
    I'm currently studying Applied Mathematics at the University of California,
    Berkeley. I earned my Associate of Science degrees in Computer Science and
    Mathematics from Skyline College in Spring 2025.
  </p>
  <p>
    My interests include programming, <a href="https://uptime.wankers.us/status/lol">system administration</a> and computer vision.
    Projects I've worked on are available on <a
      href="https://github.com/jojohnathon">Github</a
    >.
  </p>
<p>
  -----BEGIN PGP PUBLIC KEY BLOCK-----

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
Ym/n9Te9eHRtFitktGpz98mOcg==
=7oxk
-----END PGP PUBLIC KEY BLOCK-----
</p>

  <section class="style-options" aria-labelledby="style-options-heading">
    <!-- <h2 id="style-options-heading">Style options to explore</h2>
    <p>
      Keep the current minimal presentation, or experiment with one of the style snippets below to evolve the
      portfolio layout when you're ready.
    </p>
    <ul>
      {#each styleOptions as option}
        <li>
          <h3>{option.name}</h3>
          <p>{option.summary}</p>
          <code>{option.cssClass}</code>
        </li>
      {/each}
    </ul> -->
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
    padding: 2.5rem clamp(1.5rem, 5vw, 4rem);
    max-width: 64rem;
  }

  h1 {
    font-size: clamp(2.5rem, 4vw, 3.5rem);
    font-weight: 700;
    letter-spacing: -0.04em;
    margin: 0;
    animation: slideUp 0.4s ease 0s backwards;
  }

  .image-container {
    display: flex;
    height: 50%;
    gap: 0.625rem;
    animation: slideUp 0.4s ease 0.05s backwards;
  }

  .image-container img {
    max-width: 50%;
    height: auto;
    border-radius: 1rem;
    object-fit: cover;
    transition: transform 0.3s ease;
    cursor: pointer;
  }

  .image-container img:hover {
    transform: scale(1.05) rotate(1deg);
  }

  .contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    animation: slideUp 0.4s ease 0.1s backwards;
  }

  .contact-list li {
    animation: slideUp 0.4s ease backwards;
  }

  .contact-list li:nth-child(1) {
    animation-delay: 0.15s;
  }
  .contact-list li:nth-child(2) {
    animation-delay: 0.2s;
  }
  .contact-list li:nth-child(3) {
    animation-delay: 0.25s;
  }

  p {
    animation: slideUp 0.4s ease backwards;
  }

  p:nth-of-type(1) {
    animation-delay: 0.3s;
  }
  p:nth-of-type(2) {
    animation-delay: 0.35s;
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .contact-list a {
    color: #2563eb;
    font-weight: 600;
    text-decoration: none;
    position: relative;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    transition: color 0.3s ease;
  }

  .contact-list a::after {
    content: "";
    position: absolute;
    bottom: 0.1rem;
    left: 0.5rem;
    width: 0;
    height: 2px;
    background: #2563eb;
    transition: width 0.3s ease;
  }

  .contact-list a:hover {
    color: #1d47a1;
  }

  .contact-list a:hover::after {
    width: calc(100% - 1rem);
  }

  p a {
    color: #2563eb;
    font-weight: 600;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;
  }

  p a::after {
    content: "";
    position: absolute;
    bottom: 0.05rem;
    left: 0;
    width: 0;
    height: 2px;
    background: #2563eb;
    transition: width 0.3s ease;
  }

  p a:hover {
    color: #1d47a1;
  }

  p a:hover::after {
    width: 100%;
  }

  p {
    margin: 0;
    max-width: 65ch;
  }

  .style-options {
    margin-top: 2.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(15, 23, 42, 0.1);
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .style-options ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    gap: 1rem;
  }

  .style-options li {
    background: rgba(15, 23, 42, 0.04);
    border-radius: 1rem;
    padding: 1rem 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .style-options h3 {
    margin: 0;
    font-size: 1.1rem;
  }

  .style-options code {
    display: block;
    padding: 0.75rem;
    background: rgba(15, 23, 42, 0.08);
    border-radius: 0.75rem;
    font-family: "Fira Code", "SFMono-Regular", Consolas, "Liberation Mono",
      monospace;
    font-size: 0.9rem;
    white-space: pre-wrap;
  }
</style>
