<script>
  export let startData = {};
  const { HEADING, DESCRIPTION, STEPS, HINT } = startData;
</script>

<section class="grey-bgcolor" id="banner">
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
    font-size: 40px;
    font-weight: 600;
    margin-top: 100px;
    margin-bottom: 50px;
    text-align: left;
  }

  ol {
    color: rgb(252, 252, 252);
    text-align: left;
  }

  li {
    padding-bottom: 15px;
    margin-left: 90px;
  }
</style>
