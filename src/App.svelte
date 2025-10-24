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
