<script>
  export let bannerData = {};
  const { HEADING, DECRIPTION, HINT } = bannerData;
</script>

<section class="grey-bgcolor" id="banner">
  <div class="container">
    <div class="row">
      <div class="row-md-6 banner_items">
        <h1>{HEADING}</h1>
        <p>{DECRIPTION}</p>
      </div>
      <div class="col-md-6" />
      <div class="input-group mb-3 fill_inp">
        <select
          class="form-select select_fill"
          aria-label="Default select example"
        >
          <option selected>Select coin</option>
          <option value="1">
            BTC
            <span>Bitcoin</span></option
          >
          <option value="2">ETH <span>Ethereum</span></option>
          <option value="3">ETC <span>Ethereum classic</span></option>
          <option value="4">DASH <span>Dash</span></option>
          <option value="5">XMR <span>Monero</span></option>
          <option value="6">DOGE <span>Doge</span></option>
        </select>
        <input
          type="text"
          class="form-control"
          placeholder="Enter the wallet address"
          aria-label="Enter the wallet address"
        />
        <button class="btn fill_btn" type="button">Check</button>
      </div>
      <p class="hint_text">{HINT}</p>
    </div>
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1089 266"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_916_7020)">
        <path
          d="M1088.24 594.5C1088.24 922.833 844.627 1189 544.119 1189C243.61 1189 0 922.833 0 594.5C0 266.167 243.61 0 544.119 0C844.627 0 1088.24 266.167 1088.24 594.5Z"
          fill="url(#paint0_linear_916_7020)"
        />
      </g>
      <defs>
        <filter
          id="filter0_i_916_7020"
          x="0"
          y="0"
          width="1088.24"
          height="1225"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="36" />
          <feGaussianBlur stdDeviation="38" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.898039 0 0 0 0.7 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_916_7020"
          />
        </filter>
        <linearGradient
          id="paint0_linear_916_7020"
          x1="408.214"
          y1="339.558"
          x2="887.457"
          y2="19.1891"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#120D13" />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</section>

<style>
  section {
    padding-top: 5%;
    min-height: max-content;
  }

  .banner_items {
    text-align: center;
  }
  .banner_items h1 {
    color: rgb(185, 171, 254);
  }
  .banner_items p {
    color: rgb(255, 255, 255);
    display: inline-block;
    width: 550px;
    margin-bottom: 40px;
  }

  h1 {
    display: inline-block;
    width: 600px;
    font-size: 60px;
    font-weight: 600;
    margin-top: 100px;
    margin-bottom: 50px;
    text-align: center;
  }

  .select_fill {
    max-width: max-content;
    display: block;
    font-size: 13px;
  }

  .fill_inp {
    display: flex;
    flex-direction: row;
    width: 80%; /* set the width to 50% of the parent element */
    margin: 0 auto; /* center the element horizontally */
  }

  ::-webkit-input-placeholder {
    font-style: italic;
    font-weight: semi-bold;
  }

  .fill_btn {
    color: white;
    background-color: #603de6;
  }

  .hint_text {
    color: rgb(177, 179, 181);
    margin-top: 1px;
    margin-left: 120px;
  }
</style>
