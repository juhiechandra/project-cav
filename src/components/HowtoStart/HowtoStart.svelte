<script>
  export let startData = {};
  const { HEADING, DESCRIPTION, STEPS, HINT } = startData;
</script>

<section class="grey-bgcolor" id="howtostart">
  <div class="container">
    <div class="row">
      <div class="row-md-6 start_items">
        <h1>{HEADING}</h1>
        <p>{DESCRIPTION}</p>
        <ol>
          {#each STEPS as step}
            <li>{step}</li>
          {/each}
        </ol>

        <p>{HINT}</p>
      </div>
    </div>
  </div>
</section>

<style>
  section {
    padding-top: 5%;
    min-height: max-content;
  }

  .start_items {
    text-align: center;
  }
  .start_items h1 {
    color: rgb(255, 255, 255);
  }
  .start_items p {
    color: rgb(177, 175, 175);
    display: inline-block;
    width: 520px;
    margin-bottom: 40px;
    text-align: left;
  }

  h1 {
    display: inline-block;
    width: 600px;
    font-size: 35px;
    font-weight: 600;
    margin-top: 100px;
    margin-bottom: 50px;
    text-align: center;
  }

  ol {
    color: rgb(252, 252, 252);
    text-align: initial;
  }

  li {
    padding-bottom: 20px;
    margin-left: 200px;
    width: 500px;
  }

  @media (max-width: 800px) {
    .start_items {
      text-align: center;
    }
    .start_items h1 {
      font-size: 25px;
    }
    .start_items p {
      width: 100%;
      text-align: center;
    }
    h1 {
      display: inline-block;
      width: 100%;
      font-size: 25px;
      margin-top: 50px;
      margin-bottom: 25px;
      text-align: center;
    }
    ol {
      margin-left: 0;
      text-align: left;
    }
    li {
      padding-bottom: 10px;
      margin-left: 0;
      width: 100%;
    }
  }
</style>
