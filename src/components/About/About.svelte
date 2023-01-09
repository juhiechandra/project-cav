<script>
  export let aboutData = {};
  const { HEADING, DESCRIPTION, TITLE, WHY_CHOOSE_US_LIST, IMAGE_URL } =
    aboutData;
</script>

<!------------------------------------------->
<!----------------MARKUP----------------------->
<!------------------------------------------->
<section id="about-us" class="section grey-bgcolor">
  <div class="container">
    <div class="about_head">
      <h1 class="title text-center">{HEADING}</h1>
      <p class="descri">{DESCRIPTION}</p>
    </div>
    <div class="row section-body">
      <div class="col-md-6">
        <h3 class="about-title">{TITLE}</h3>
        <ul>
          {#each WHY_CHOOSE_US_LIST as list}
            <li>{list}</li>
          {/each}
        </ul>
      </div>
      <div class="col-md-6">
        <img src={IMAGE_URL} alt="" class="img-fluid" />
      </div>
    </div>
  </div>
</section>

<!------------------------------------------->
<!----------------STYLE----------------------->

<!------------------------------------------->
<style>
  .about-title {
    margin-top: 8%;
    margin-bottom: 20px;
  }

  .about_head {
    text-align: center;
  }

  .about_head p {
    color: rgb(165, 166, 167);
    display: inline-block;
    width: 550px;
  }
  section ul li {
    margin: 10px 0;
  }
  section ul {
    padding-left: 23px;
  }
</style>
